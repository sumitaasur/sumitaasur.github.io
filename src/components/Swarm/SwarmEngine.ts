import { swarmAudio } from "./SwarmAudio";

export interface CursorState {
  e: HTMLDivElement;
  c: string;
  x: number;
  y: number;
  tx: number;
  ty: number;
  s: number;
  busy: boolean;
  drag: boolean;
  orb: boolean;
  docked: boolean;
  ax: number;
  ay: number;
}

export interface SwarmStats {
  total: number;
  completed: number;
  percentage: number;
  isTouring: boolean;
  speed: number;
}

type SwarmListener = (stats: SwarmStats) => void;

export class SwarmEngine {
  private host: HTMLElement | null = null;
  private sel: HTMLElement | null = null;
  private cursors: CursorState[] = [];
  private elements: HTMLElement[] = [];
  private queue: HTMLElement[] = [];
  private pumping: boolean = false;
  private isDestroyed: boolean = false;
  private isDismissed: boolean = false;
  private isTouring: boolean = false;
  private speed: number = 1;
  private lastAct: number = 0;
  private active: boolean = true;
  private scanTimer: number | null = null;
  private animFrameId: number | null = null;
  private listeners: Set<SwarmListener> = new Set();

  private RING = { cx: 0, cy: 0, R: 0 };
  private TH = -0.14;
  private cT = Math.cos(this.TH);
  private sT = Math.sin(this.TH);

  private readonly cols = [
    "#ff2a2a",
    "#3b9cff",
    "#ffb02e",
    "#2ee6a6",
    "#b36bff",
    "#ff6bd6",
    "#00d1ff",
    "#c6f432",
    "#ff7a3d",
  ];

  constructor(host: HTMLElement, sel: HTMLElement) {
    this.host = host;
    this.sel = sel;
    this.init();
  }

  public subscribe(listener: SwarmListener): () => void {
    this.listeners.add(listener);
    this.emitStats();
    return () => {
      this.listeners.delete(listener);
    };
  }

  private emitStats() {
    const total = this.elements.length;
    let completed = 0;
    this.elements.forEach((e) => {
      // Element is completed if marked with .in or has typed characters turned .on
      const state = (e as unknown as { _s?: number })._s;
      if (state === 2 || e.classList.contains("in")) {
        completed++;
      }
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    const stats: SwarmStats = {
      total,
      completed,
      percentage,
      isTouring: this.isTouring,
      speed: this.speed,
    };

    this.listeners.forEach((l) => l(stats));
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((r) => setTimeout(r, ms / this.speed));
  }

  private ease(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  private ringSize = () => {
    if (typeof window === "undefined") return;
    const hdr = document.querySelector("header");
    this.RING.cx = window.innerWidth / 2;
    this.RING.R = Math.min(window.innerWidth * 0.42, 300);
    this.RING.cy = (hdr ? hdr.offsetHeight : 70) + 48;
  };

  private home(i: number, t: number, sy: number) {
    const outer = i < 5;
    const n = outer ? 5 : 4;
    const idx = outer ? i : i - 5;
    const a = (outer ? 1 : -1.35) * (t / 1700) + (idx * 6.2832) / n;
    const rx = this.RING.R * (outer ? 1 : 0.62);
    const ry = rx * 0.24;
    const dx = rx * Math.cos(a);
    const dy = ry * Math.sin(a);
    return {
      x: this.RING.cx + dx * this.cT - dy * this.sT,
      y: this.RING.cy - sy + dx * this.sT + dy * this.cT,
      s: 0.7 + (0.3 * (Math.sin(a) + 1)) / 2,
    };
  }

  private init() {
    if (typeof window === "undefined" || !this.host || !this.sel) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.dismiss();
      return;
    }

    document.documentElement.classList.add("js");
    document.body.classList.add("swarm-active");

    this.ringSize();

    // Spawn 9 cursors onto the orbit ring
    this.cursors = this.cols.map((c, i) => {
      const e = document.createElement("div");
      e.className = "cur";
      e.innerHTML = `<svg width="20" height="20" viewBox="0 0 18 18"><path d="M1 1l6 15 2.2-6.2L16 7.6z" fill="${c}" stroke="#fff" stroke-width="1"/></svg>`;
      this.host!.appendChild(e);
      const h = this.home(i, 0, window.scrollY);
      return {
        e,
        c,
        x: h.x,
        y: h.y,
        tx: h.x,
        ty: h.y,
        s: h.s,
        busy: false,
        drag: false,
        orb: true,
        docked: false,
        ax: 0,
        ay: 0,
      };
    });

    // Collect rebuildable elements
    this.collectElements();

    // Start tick loop
    this.lastAct = performance.now() + 3500;
    this.active = true;

    const tick = (t: number) => {
      if (this.isDestroyed || this.isDismissed) return;
      const sy = window.scrollY;

      this.cursors.forEach((c, i) => {
        if (c.docked) return;
        let ts = 1;
        if (!c.drag) {
          if (c.orb && !c.busy) {
            const h = this.home(i, t, sy);
            c.tx = h.x;
            c.ty = h.y;
            ts = h.s;
            c.x += (c.tx - c.x) * 0.14;
            c.y += (c.ty - c.y) * 0.14;
          } else {
            c.x += (c.tx - c.x) * 0.24;
            c.y += (c.ty - c.y) * 0.24;
          }
        }
        c.s += (ts - c.s) * 0.12;
        c.e.style.opacity =
          c.orb && !c.busy && !c.drag
            ? (0.45 + (0.55 * (c.s - 0.7)) / 0.3).toFixed(2)
            : "1";
        c.e.style.transform = `translate3d(${c.x}px,${c.y}px,0) scale(${c.s.toFixed(3)})`;
      });

      this.animFrameId = requestAnimationFrame(tick);
    };

    this.animFrameId = requestAnimationFrame(tick);

    // Event listeners
    window.addEventListener("resize", this.ringSize, { passive: true });
    window.addEventListener("scroll", this.onActivity, { passive: true });
    window.addEventListener("wheel", this.onActivity, { passive: true });
    window.addEventListener("touchmove", this.onActivity, { passive: true });
    window.addEventListener("keydown", this.onActivity, { passive: true });

    // Initial scan and periodic monitor
    this.scan();
    this.scanTimer = window.setInterval(() => this.scan(), 120);

    // Fallback safety timeout: ensure content is revealed if swarm takes too long
    setTimeout(() => {
      if (this.isDismissed) return;
      const anyRevealed = document.querySelector(
        "[data-reveal].in, [data-item].in, [data-pop].in, .ch.on"
      );
      if (!anyRevealed) {
        this.revealAllInstantly();
      }
    }, 8000);
  }

  private collectElements() {
    const rawEls = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal],[data-type],[data-clone],[data-pop]"
      )
    );

    rawEls.forEach((el) => {
      if (el.hasAttribute("data-type")) {
        this.splitText(el);
      }
    });

    this.elements = rawEls;
    this.emitStats();
  }

  private splitText(el: HTMLElement) {
    if (el.classList.contains("ready")) return;

    // Preserve existing .ch if rendered by AnimatedText React component
    const existingCh = Array.from(el.querySelectorAll<HTMLElement>(".ch"));
    if (existingCh.length > 0) {
      (el as unknown as { _ch: HTMLElement[] })._ch = existingCh;
      el.classList.add("ready");
      return;
    }

    el.setAttribute("aria-label", el.textContent?.replace(/\s+/g, " ").trim() || "");
    const chs: HTMLElement[] = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes: Node[] = [];
    let n: Node | null;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach((t) => {
      if (!t.nodeValue || !t.nodeValue.trim()) return;
      const frag = document.createDocumentFragment();
      Array.from(t.nodeValue).forEach((ch) => {
        if (/\s/.test(ch)) {
          frag.appendChild(document.createTextNode(ch));
        } else {
          const sp = document.createElement("span");
          sp.className = "ch";
          sp.setAttribute("aria-hidden", "true");
          sp.textContent = ch;
          frag.appendChild(sp);
          chs.push(sp);
        }
      });
      t.parentNode?.replaceChild(frag, t);
    });

    (el as unknown as { _ch: HTMLElement[] })._ch = chs;
    el.classList.add("ready");
  }

  private onActivity = () => {
    this.lastAct = performance.now();
    this.scan();
  };

  private inViewport(r: DOMRect): boolean {
    return r.bottom > 0 && r.top < window.innerHeight * 0.94 && r.height > 0;
  }

  private ripple(c: CursorState) {
    if (!this.sel) return;
    const rp = document.createElement("div");
    rp.className = "rip";
    rp.style.cssText = `left:${c.x + window.scrollX}px;top:${c.y + window.scrollY}px;--c:${c.c};`;
    this.sel.appendChild(rp);
    swarmAudio.playClickSound();
    setTimeout(() => rp.remove(), 700);
  }

  private mkBox(c: CursorState, fill: boolean): HTMLElement {
    const b = document.createElement("div");
    b.className = "sel";
    b.style.setProperty("--c", c.c);
    if (fill) b.style.background = `${c.c}24`;
    b.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>";
    this.sel!.appendChild(b);
    return b;
  }

  private setBox(b: HTMLElement, l: number, t: number, w: number, h: number) {
    b.style.left = `${l + window.scrollX}px`;
    b.style.top = `${t + window.scrollY}px`;
    b.style.width = `${w}px`;
    b.style.height = `${h}px`;
  }

  private async arrive(
    c: CursorState,
    fn: () => void,
    maxSteps: number = 40
  ): Promise<void> {
    for (let i = 0; i < maxSteps; i++) {
      fn();
      if (Math.hypot(c.tx - c.x, c.ty - c.y) < 8) break;
      await this.sleep(25);
    }
  }

  private vy(c: CursorState): number {
    return c.docked ? c.ay - window.scrollY : c.y;
  }

  private async acquire(): Promise<CursorState> {
    for (;;) {
      let best: CursorState | null = null;
      let bd = 1e9;
      this.cursors.forEach((c) => {
        if (!c.busy) {
          const d = Math.abs(this.vy(c) - window.innerHeight * 0.45);
          if (d < bd) {
            bd = d;
            best = c;
          }
        }
      });

      if (best) {
        const c: CursorState = best;
        c.busy = true;
        c.orb = false;
        c.e.classList.remove("fl");
        if (c.docked) {
          c.x = c.ax - window.scrollX;
          c.y = c.ay - window.scrollY;
          c.s = 1;
          c.docked = false;
          c.e.style.transform = `translate3d(${c.x}px,${c.y}px,0) scale(1)`;
          this.host?.appendChild(c.e);
        }
        return c;
      }
      await this.sleep(40);
    }
  }

  private free(c: CursorState) {
    if (!this.sel) return;
    c.busy = false;
    c.drag = false;
    c.orb = false;
    c.e.classList.remove("dn");
    c.ax = c.x + window.scrollX;
    c.ay = c.y + window.scrollY;
    c.docked = true;
    c.e.style.opacity = "1";
    c.e.style.transform = `translate3d(${c.ax}px,${c.ay}px,0) scale(1)`;
    c.e.style.setProperty("--d", `${(2.4 + Math.random() * 1.4).toFixed(2)}s`);
    c.e.style.setProperty("--dl", `${(-Math.random() * 3).toFixed(2)}s`);
    c.e.classList.add("fl");
    this.sel.appendChild(c.e);
  }

  private async dragReveal(
    el: HTMLElement,
    c: CursorState,
    center: boolean
  ): Promise<boolean> {
    let r = el.getBoundingClientRect();
    await this.arrive(
      c,
      () => {
        r = el.getBoundingClientRect();
        c.tx = center ? r.left + r.width / 2 : r.left;
        c.ty = center ? r.top + r.height / 2 : r.top;
      },
      45
    );

    if (!this.inViewport(el.getBoundingClientRect())) return false;
    const b = this.mkBox(c, true);
    c.e.classList.add("dn");
    this.ripple(c);
    el.style.transition = "none";
    await this.sleep(60);

    c.drag = true;
    const dur = Math.min(650, 280 + el.offsetWidth * 0.4) / this.speed;
    const t0 = performance.now();

    await new Promise<void>((resolve) => {
      const step = (now: number) => {
        const p = this.ease(Math.min((now - t0) / dur, 1));
        r = el.getBoundingClientRect();
        const w = r.width * p;
        const h = r.height * p;
        const l = center ? r.left + (r.width - w) / 2 : r.left;
        const t = center ? r.top + (r.height - h) / 2 : r.top;
        this.setBox(b, l, t, w, h);

        const ins = center
          ? `inset(${(1 - p) * 50}% ${(1 - p) * 50}% ${(1 - p) * 50}% ${(1 - p) * 50}%)`
          : `inset(0 ${(1 - p) * 100}% ${(1 - p) * 100}% 0)`;
        el.style.opacity = "1";
        el.style.clipPath = ins;
        c.x = l + w;
        c.y = t + h;

        if (now - t0 < dur) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(step);
    });

    c.drag = false;
    c.e.classList.remove("dn");
    this.ripple(c);

    r = el.getBoundingClientRect();
    this.setBox(b, r.left, r.top, r.width, r.height);
    b.classList.add("done");
    swarmAudio.playDoneSound();

    el.classList.add("in");
    el.style.opacity = "";
    el.style.clipPath = "";
    el.style.transition = "";

    setTimeout(() => b.remove(), 300);
    return true;
  }

  private async popIn(el: HTMLElement, c: CursorState): Promise<boolean> {
    let r = el.getBoundingClientRect();
    await this.arrive(
      c,
      () => {
        r = el.getBoundingClientRect();
        c.tx = r.left + r.width * 0.55;
        c.ty = r.top + r.height * 0.55;
      },
      40
    );

    if (!this.inViewport(el.getBoundingClientRect())) return false;
    const b = this.mkBox(c, false);
    r = el.getBoundingClientRect();
    this.setBox(b, r.left, r.top, r.width, r.height);
    b.classList.add("done");
    c.e.classList.add("dn");
    this.ripple(c);
    c.drag = true;

    await this.sleep(100);
    el.classList.add("in");
    c.e.classList.remove("dn");
    this.ripple(c);
    swarmAudio.playDoneSound();

    await this.sleep(350);
    b.remove();
    c.drag = false;
    return true;
  }

  private async typeIn(el: HTMLElement, c: CursorState): Promise<boolean> {
    const chs = (el as unknown as { _ch?: HTMLElement[] })._ch || [];
    const n = chs.length;
    let r = el.getBoundingClientRect();

    await this.arrive(
      c,
      () => {
        r = el.getBoundingClientRect();
        c.tx = r.left + 4;
        c.ty = r.top + r.height * 0.5;
      },
      35
    );

    if (!this.inViewport(el.getBoundingClientRect())) return false;
    const b = this.mkBox(c, false);
    b.classList.add("done");

    const cr = document.createElement("div");
    cr.className = "caret";
    cr.style.setProperty("--c", c.c);
    this.sel!.appendChild(cr);

    this.ripple(c);
    c.drag = true;

    const per = Math.max(14, Math.min(48, 900 / (n || 1)));
    for (let i = 0; i < n; i++) {
      chs[i].classList.add("on");
      swarmAudio.playTypeSound();
      const rc = chs[i].getBoundingClientRect();
      const er = el.getBoundingClientRect();
      this.setBox(b, er.left, er.top, er.width, er.height);
      cr.style.left = `${rc.right + window.scrollX}px`;
      cr.style.top = `${rc.top + window.scrollY}px`;
      cr.style.height = `${rc.height}px`;
      c.x = rc.right + 6;
      c.y = rc.bottom - rc.height * 0.2;
      await this.sleep(per);
    }

    c.drag = false;
    await this.sleep(110);
    cr.remove();
    b.remove();
    swarmAudio.playDoneSound();
    return true;
  }

  private async exec(el: HTMLElement, c: CursorState) {
    const kind = el.hasAttribute("data-type")
      ? "type"
      : el.hasAttribute("data-pop")
      ? "pop"
      : "reveal";

    let ok = false;
    if (kind === "reveal") {
      ok = await this.dragReveal(
        el,
        c,
        el.getAttribute("data-reveal") === "center"
      );
    } else if (kind === "type") {
      ok = await this.typeIn(el, c);
    } else if (kind === "pop") {
      ok = await this.popIn(el, c);
    }

    this.free(c);
    (el as unknown as { _s: number })._s = ok ? 2 : 0;
    this.emitStats();
  }

  private async pump() {
    if (this.pumping) return;
    this.pumping = true;

    while (this.queue.length && !this.isDestroyed && !this.isDismissed) {
      const c = await this.acquire();
      const nextEl = this.queue.shift();
      if (nextEl) {
        this.exec(nextEl, c);
      } else {
        this.free(c);
      }
      await this.sleep(40);
    }

    this.pumping = false;
  }

  private hide(el: HTMLElement) {
    const kind = el.hasAttribute("data-type")
      ? "type"
      : el.hasAttribute("data-pop")
      ? "pop"
      : "reveal";

    if (kind === "type") {
      const chs = (el as unknown as { _ch?: HTMLElement[] })._ch || [];
      chs.forEach((x) => x.classList.remove("on"));
    } else {
      el.classList.remove("in");
    }
    (el as unknown as { _s: number })._s = 0;
  }

  public scan = () => {
    if (this.isDestroyed || this.isDismissed) return;
    const act = performance.now() - this.lastAct < 800;
    const allow = act || this.active || this.isTouring;

    this.elements.forEach((e) => {
      const state = (e as unknown as { _s?: number })._s || 0;
      const r = e.getBoundingClientRect();

      if (state === 2) {
        // Element completed; if it scrolled far out of view, optionally reset
        if (r.bottom < -100 || r.top > window.innerHeight + 100) {
          if (!this.isTouring) {
            this.hide(e);
          }
        }
      } else if (allow && state === 0 && this.inViewport(r)) {
        (e as unknown as { _s: number })._s = 1;
        this.queue.push(e);
      }
    });

    this.active = act;
    if (this.queue.length) {
      this.pump();
    }
  };

  /**
   * TOUR Mode: Smoothly navigates the entire website section by section,
   * activating cursors to reconstruct each section in view.
   */
  public async startTour(): Promise<void> {
    if (this.isTouring) return;
    this.isTouring = true;
    this.emitStats();

    const sections = [
      "#top",
      "#projects",
      "#ai-engineering",
      "#architecture",
      "#about",
      "#experience",
      "#contact",
    ];

    for (const secId of sections) {
      if (!this.isTouring) break;
      const target = document.querySelector(secId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        this.lastAct = performance.now();
        this.scan();
        // Wait for section to settle and cursors to work
        await this.sleep(1800);
      }
    }

    this.isTouring = false;
    this.emitStats();
  }

  public stopTour() {
    this.isTouring = false;
    this.emitStats();
  }

  public setSpeed(multiplier: number) {
    this.speed = Math.max(0.25, Math.min(3, multiplier));
    this.emitStats();
  }

  public getSpeed(): number {
    return this.speed;
  }

  public replay() {
    this.stopTour();
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Reset all elements
    this.elements.forEach((el) => {
      this.hide(el);
    });

    // Reset all cursors to orbit ring
    this.cursors.forEach((c, i) => {
      c.busy = false;
      c.drag = false;
      c.docked = false;
      c.orb = true;
      c.e.classList.remove("fl", "dn");
      this.host?.appendChild(c.e);
      const h = this.home(i, 0, 0);
      c.tx = h.x;
      c.ty = h.y;
    });

    this.lastAct = performance.now();
    this.active = true;
    this.queue = [];
    this.emitStats();
    setTimeout(() => this.scan(), 300);
  }

  public revealAllInstantly() {
    this.elements.forEach((el) => {
      el.classList.add("in");
      const chs = (el as unknown as { _ch?: HTMLElement[] })._ch || [];
      chs.forEach((ch) => ch.classList.add("on"));
      (el as unknown as { _s: number })._s = 2;
    });
    this.emitStats();
  }

  public dismiss() {
    this.isDismissed = true;
    this.stopTour();
    this.revealAllInstantly();
    if (this.host) this.host.style.display = "none";
    if (this.sel) this.sel.style.display = "none";
    document.body.classList.remove("swarm-active");
    this.emitStats();
  }

  public resume() {
    this.isDismissed = false;
    if (this.host) this.host.style.display = "";
    if (this.sel) this.sel.style.display = "";
    document.body.classList.add("swarm-active");
    this.replay();
  }

  public destroy() {
    this.isDestroyed = true;
    if (this.scanTimer) clearInterval(this.scanTimer);
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    window.removeEventListener("resize", this.ringSize);
    window.removeEventListener("scroll", this.onActivity);
    window.removeEventListener("wheel", this.onActivity);
    window.removeEventListener("touchmove", this.onActivity);
    window.removeEventListener("keydown", this.onActivity);
    this.listeners.clear();
  }
}

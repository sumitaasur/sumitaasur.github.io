export type ProjectCategory = "all" | "mobile" | "web" | "3d" | "fintech-health";

export type PortfolioProject = {
  name: string;
  description: string;
  technologies: string[];
  outcomes: string[];
  category: ProjectCategory;
  accent?: string;
  tagline?: string;
  architectureHighlight?: string;
  image?: string;
  liveUrl?: string;
  storeUrl?: string;
  repoUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
};

export type Skill = {
  name: string;
  description: string;
  icon: string;
  category?: string;
  level?: number;
};

const skill = (name: string, icon: string, description: string, level = 95): Skill => ({
  name,
  icon,
  description,
  level,
});

export const portfolio = {
  name: "Sumit Pramanik",
  title: "Senior Full Stack Engineer | Technical Lead",
  secondaryTitle: "React.js • React Native • Next.js • TypeScript • Node.js",
  experienceLabel: "8+ Years",
  location: "Jaipur, Rajasthan • Remote Worldwide",
  coordinates: "26.9124° N, 75.7873° E",
  availabilityStatus: "Available for Technical Leadership & Engagements",
  availabilityBadge: "AVAILABLE FOR ENGAGEMENTS",
  summary:
    "I’m a Senior Full Stack Engineer & Technical Lead with 8+ years of IT experience, specializing in React.js, React Native, Next.js, and TypeScript. I architect scalable web and mobile applications while leading frontend systems, technical decision-making, performance optimization, and cross-platform delivery. My work bridges solution design, robust component architecture, native module integrations, and production engineering across Apple App Store, Google Play, and enterprise cloud deployments.",
  valueStatement:
    "Architecting resilient web and mobile platforms with cinematic precision, sound technical leadership, and production-tested scalability.",
  metaDescription:
    "Sumit Pramanik is a Senior Full Stack Engineer and Technical Lead with 8+ years of experience building scalable web and mobile applications using React.js, React Native, Next.js, TypeScript, and Node.js.",
  email: "sumit.pramanick@hotmail.com",
  phone: "+91-9587130971",
  linkedinUrl: "https://www.linkedin.com/in/sumitaasur",
  githubUrl: "https://github.com/sumitaasur",

  heroStats: [
    { label: "EXPERIENCE", value: "8+", suffix: "Years" },
    { label: "SHIPPED APPS", value: "17+", suffix: "Production" },
    { label: "PERF BOOST", value: "35%", suffix: "Measured" },
    { label: "DEV SPRINT VELOCITY", value: "+30%", suffix: "Turnaround" },
  ],

  aboutFacts: [
    {
      mark: "Architect",
      title: "System & Solution Design",
      label: "Translating complex enterprise requirements into modular, maintainable full-stack & mobile architectures.",
    },
    {
      mark: "Engineer",
      title: "Cross-Platform Depth",
      label: "6+ years deep in React Native & React.js, building 60fps native-bridge experiences and high-scale web apps.",
    },
    {
      mark: "Lead",
      title: "Technical Ownership & Mentorship",
      label: "Mentoring engineers, setting RFC standards, conducting code audits, and steering multi-region release pipelines.",
    },
  ],

  expertise: [
    {
      id: "01",
      title: "Frontend Architecture & Reusable Systems",
      description:
        "Architecting atomic design systems, shared monorepo components, state machines, and type-safe contracts across web and native targets.",
      metrics: "30% faster sprint delivery via unified design tokens",
      tags: ["Design Systems", "Atomic Architecture", "TypeScript", "Micro-Frontends"],
    },
    {
      id: "02",
      title: "Cross-Platform Mobile Engineering",
      description:
        "Building production React Native applications with native module bridging (iOS/Android), offline-first SQLite/watermelondb patterns, and Hermes engine tuning.",
      metrics: "6+ years shipping to Apple App Store & Google Play",
      tags: ["React Native", "iOS / Android", "Hermes Engine", "Native Modules", "Offline-First"],
    },
    {
      id: "03",
      title: "Performance Tuning & Web Vitals",
      description:
        "Eliminating render cascades, implementing virtualized lists, code splitting, dynamic imports, and memoization to achieve sub-second Core Web Vitals.",
      metrics: "35% measured frontend performance gain",
      tags: ["Core Web Vitals", "Memory Leak Auditing", "Code Splitting", "React Profiler"],
    },
    {
      id: "04",
      title: "Real-time Data, Audio & API Integrations",
      description:
        "Integrating low-latency audio calling with Agora SDK, WebSocket streaming, Firebase real-time sync, and PCI-compliant secure payment gateways.",
      metrics: "Seamless voice & real-time communication for 100k+ sessions",
      tags: ["Agora SDK", "WebSockets", "Firebase Realtime", "RESTful APIs", "Stripe / Payments"],
    },
    {
      id: "05",
      title: "Technical Leadership & CI/CD Pipelines",
      description:
        "Driving technical RFCs, peer code reviews, automated Fastlane/Jenkins build delivery, and guiding mid-level developers toward engineering excellence.",
      metrics: "17+ zero-downtime production releases managed",
      tags: ["Technical RFCs", "Code Audits", "Fastlane", "Jenkins CI/CD", "Mentorship"],
    },
  ],

  engineeringImpacts: [
    "Scalable Frontend Systems",
    "Reusable Component Architecture",
    "Cross-Platform Mobile Engine",
    "Core Web Vitals Optimization",
    "Technical Decision-Making & RFCs",
    "Apple & Google Play Release Lifecycle",
    "Automated CI/CD Delivery",
    "Production Incident Debugging",
  ],

  impactStats: [
    { value: "8+", label: "Years of IT Experience", detail: "Continuous full stack & frontend delivery" },
    { value: "6+", label: "Years React.js & React Native", detail: "Deep cross-platform specialization" },
    { value: "17+", label: "Production Applications", detail: "Shipped to App Store, Play Store & Web" },
    { value: "35%", label: "Frontend Performance Gain", detail: "LCP, bundle size & render reduction" },
    { value: "30%", label: "Development Turnaround Lift", detail: "Through modular component foundations" },
  ],

  marqueeClients: [
    "US Sports Organization",
    "NASM EDGE Fitness",
    "Bonify SCHUFA Germany",
    "Medara Health Platform",
    "Clinical Trial Link",
    "Agora Real-Time Calling",
    "Blue Sky Peptides",
    "MetaMerch UK 3D",
    "Konstant Infosolutions",
    "Dotsquares Technologies",
    "Dev Technosys",
    "Arka Softwares",
  ],

  marqueeTech: [
    "React.js",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Redux Toolkit",
    "Three.js",
    "Firebase",
    "Agora Voice SDK",
    "Tailwind CSS",
    "GSAP",
    "AWS S3 & CloudFront",
    "Jest & Testing",
    "Xcode & Android Studio",
    "Fastlane & CI/CD",
  ],

  education: {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Rajasthan University",
    location: "Jaipur, Rajasthan",
    year: "2012 – 2016",
  },

  skillGroups: [
    {
      name: "Core Frontend & Frameworks",
      skills: [
        skill("React.js", "react", "Enterprise scalable web interfaces with modern hooks & concurrent features.", 98),
        skill("React Native", "react", "Cross-platform iOS and Android mobile engineering with native bridging.", 96),
        skill("Next.js", "next", "App router, SSR, SSG, streaming server components and API routes.", 94),
        skill("TypeScript", "typescript", "Strictly-typed scalable architectures with zero-runtime bugs.", 95),
        skill("JavaScript (ES6+)", "javascript", "Deep language fundamentals, event loop, memory management and closures.", 98),
        skill("Responsive UI Systems", "responsive", "Flawless fluidity across foldables, mobile, desktop and 4K displays.", 95),
        skill("Reusable Component Architecture", "architecture", "Atomic, tokenized design systems that accelerate delivery.", 96),
      ],
    },
    {
      name: "Architecture & Systems Design",
      skills: [
        skill("Frontend Architecture", "architecture", "Modular decoupled architectures built for high concurrency.", 95),
        skill("Solution Design", "architecture", "Translating complex product requirements into robust tech blueprints.", 92),
        skill("Technical RFCs & Decisions", "architecture", "Writing clear RFCs and architectural guardrails for engineering teams.", 90),
        skill("Cross-Platform Foundations", "architecture", "Shared core business logic with platform-specific native layers.", 94),
      ],
    },
    {
      name: "Mobile Platforms & Native SDKs",
      skills: [
        skill("iOS Platform Delivery", "apple", "Xcode builds, provisioning, TestFlight, and Apple App Store compliance.", 92),
        skill("Android Platform Delivery", "android", "Gradle, APK/AAB optimization, and Google Play Console release cycles.", 92),
        skill("Native Module Integration", "mobile", "Bridging Swift/Objective-C & Kotlin/Java into JavaScript runtime.", 88),
        skill("Agora Voice & Video", "api", "Ultra-low latency real-time voice calling SDK integrations.", 90),
        skill("Offline-First Design", "mobile", "Persistent local caches, conflict resolution and resilient sync.", 88),
      ],
    },
    {
      name: "State, APIs & Cloud Services",
      skills: [
        skill("Redux & Redux Toolkit", "redux", "Predictable immutable global state management with RTK Query.", 94),
        skill("Context API & Hooks", "react", "Targeted reactive state slicing without re-render cascades.", 95),
        skill("REST APIs & Axios", "api", "High-throughput API clients with interceptors, retries and caching.", 96),
        skill("Firebase Auth & Realtime", "firebase", "Authentication, real-time database, and Cloud Messaging push alerts.", 92),
        skill("AWS S3 & CloudFront", "cloud", "Edge-optimized asset distribution and reliable object storage.", 88),
      ],
    },
    {
      name: "Performance & Quality Engineering",
      skills: [
        skill("Core Web Vitals", "performance", "Sub-second LCP, minimal CLS, and FID/INP optimization.", 94),
        skill("Code Splitting & Bundles", "performance", "Webpack/Turbopack chunk splitting and dynamic component lazy loading.", 92),
        skill("React DevTools Profiler", "performance", "Deep flamegraph auditing, memoization tuning, and render audits.", 94),
        skill("Jest Testing & QA", "testing", "Unit, integration, regression, and functional test coverage.", 88),
        skill("Production Debugging", "testing", "Sentry instrumentation, memory leak hunting, and crash analysis.", 90),
      ],
    },
    {
      name: "Leadership, Delivery & AI",
      skills: [
        skill("Code Reviews & Mentorship", "leadership", "Elevating team code quality, standards, and mentoring junior engineers.", 94),
        skill("CI/CD Automation", "delivery", "Jenkins and automated multi-environment release pipelines.", 88),
        skill("Git Workflows", "git", "Trunk-based development, branch protection, and collaborative delivery.", 96),
        skill("AI-Augmented Development", "ai", "Leveraging Claude, Cursor, Copilot, and LLMs for accelerated delivery.", 95),
      ],
    },
  ],

  experience: [
    {
      role: "Senior Software Engineer",
      company: "Konstant Infosolutions",
      location: "Jaipur, Rajasthan",
      dates: "May 2025 – Jul 2026",
      badge: "Lead Engineer",
      highlights: [
        "Owned frontend architecture, solution design, and delivery of scalable React Native and React applications for international enterprise clients.",
        "Established reusable design-token patterns and shared module libraries, eliminating 30% redundant engineering effort across web and mobile codebases.",
        "Led REST API architecture, integrated mission-critical payment gateways, and instituted structured code review and automated linting standards.",
        "Served as the primary technical point of contact, translating complex business stakeholder requirements into robust, production-ready deliverables.",
      ],
    },
    {
      role: "React / React Native Developer — Technical Consultant",
      company: "Freelance",
      location: "Remote Worldwide",
      dates: "Oct 2024 – May 2025",
      badge: "Consultant",
      highlights: [
        "Delivered production-ready web and cross-platform React Native applications for international clients across US, UK, and European markets.",
        "Owned the complete product lifecycle from initial architecture and wireframe fidelity through Apple App Store and Google Play deployments.",
        "Acted as the sole technical decision-maker for technology stack selection, state architecture, performance benchmarks, and release roadmaps.",
      ],
    },
    {
      role: "React.js / React Native Programmer",
      company: "Dotsquares Technologies",
      location: "Jaipur, Rajasthan",
      dates: "May 2023 – Oct 2024",
      badge: "Senior Contributor",
      highlights: [
        "Led cross-platform React Native application development, engineering responsive, high-performance user interfaces for iOS and Android.",
        "Integrated Firebase Authentication, real-time database synchronisation, push notifications (FCM), and third-party communication SDKs.",
        "Engineered major performance enhancements with virtualized list rendering, lazy code splitting, and memoization, optimizing runtime on lower-end devices.",
      ],
    },
    {
      role: "React Native Developer",
      company: "Arka Softwares Pvt Ltd",
      location: "Jaipur, Rajasthan",
      dates: "Feb 2022 – Mar 2023",
      badge: "Mobile Engineer",
      highlights: [
        "Built feature-rich cross-platform mobile modules in close collaboration with product designers, strictly adhering to design system guidelines.",
        "Integrated third-party REST APIs, SDKs, Firebase services, and Axios HTTP interceptors, elevating data caching and error resilience.",
      ],
    },
    {
      role: "React.js / React Native Developer",
      company: "Dev Technosys Pvt Ltd",
      location: "Jaipur, Rajasthan",
      dates: "Nov 2019 – Feb 2022",
      badge: "Full Stack Frontend",
      highlights: [
        "Delivered dynamic, responsive React.js web portals and native-grade mobile applications for global enterprise clients.",
        "Provided Tier-3 production support, resolved critical client-reported defects, and partnered closely with backend teams on REST API design.",
        "Incorporated rapid customer feedback loops while ensuring transactional data reliability and cross-browser consistency.",
      ],
    },
    {
      role: "Quality Analyst",
      company: "Bill Gosling Outsourcing (formerly MattsenKumar Pvt. Ltd.)",
      location: "Jaipur, Rajasthan",
      dates: "May 2018 – Sep 2019",
      badge: "QA Specialist",
      highlights: [
        "Authored and executed comprehensive test plans, edge-case scenarios, and test datasets for high-traffic software deployments.",
        "Conducted functional, regression, smoke, sanity, and User Acceptance Testing (UAT), establishing early root-cause defect identification.",
      ],
    },
  ],

  projects: [
    {
      name: "Metalete",
      description:
        "Pre-launch 3D athlete avatar customization application for a premier US sports organization. Integrated Three.js rendering within React Native to execute interactive real-time 3D athlete avatars, custom apparel switching, and physics-driven gear customization flows.",
      technologies: ["React Native", "Three.js", "WebGL", "TypeScript", "Mobile 3D"],
      outcomes: [
        "Engineered interactive real-time 3D avatar rendering inside React Native.",
        "Achieved seamless 60fps texture and model swapping without memory bloat.",
      ],
      category: "3d",
      accent: "#ff1a53",
      tagline: "Real-time 3D Athlete Customization in React Native",
      architectureHighlight: "Embedded Three.js Canvas with React Native Bridge & Texture Caching",
    },
    {
      name: "NASM EDGE",
      description:
        "Premier fitness platform for the National Academy of Sports Medicine personal trainers. Built trainer and client-facing interfaces across responsive web, iOS, and Android from a synchronized codebase, powering workout programming, client assessments, and biometric tracking.",
      technologies: ["React.js", "React Native", "Redux", "TypeScript", "REST APIs"],
      outcomes: [
        "Delivered unified trainer and client experiences across web and native mobile.",
        "Streamlined client assessment workflows and real-time workout tracking.",
      ],
      category: "mobile",
      accent: "#e11d48",
      tagline: "Enterprise Fitness Ecosystem for Personal Trainers",
      architectureHighlight: "Cross-Platform Business Logic Shared between Web & Native",
      liveUrl: "https://edge.nasm.org",
      androidUrl: "https://play.google.com/store/apps/details?id=com.nasm.edge",
      iosUrl: "https://apps.apple.com/us/app/nasm-edge-personal-trainers",
    },
    {
      name: "Medara Health",
      description:
        "Comprehensive healthcare ecosystem spanning four interconnected surfaces: patient mobile app, patient web portal, doctor console, and diagnostic lab portal. Developed secure appointment scheduling, consultation notes, and real-time diagnostic report workflows.",
      technologies: ["React Native", "React.js", "Next.js", "TypeScript", "REST APIs"],
      outcomes: [
        "Architected interconnected appointment, consultation, and report flows across 4 roles.",
        "Guaranteed secure HIPAA-aligned data transport and role-based access control.",
      ],
      category: "fintech-health",
      accent: "#ff2a5f",
      tagline: "Four-Surface Telehealth & Clinical Diagnostics Platform",
      architectureHighlight: "Unified Multi-Role State Machine & Shared TypeScript Models",
    },
    {
      name: "Bonify",
      description:
        "German fintech platform providing free SCHUFA credit scores and financial optimization. Built responsive web and cross-platform mobile experiences sharing logic across platforms, delivering personalized financial insights, credit-score tracking, and bank account analytics.",
      technologies: ["React Native", "React.js", "Next.js", "Redux", "Fintech APIs"],
      outcomes: [
        "Engineered web and mobile platforms with shared cross-platform core logic.",
        "Delivered zero-friction biometric authentication and credit rating updates.",
      ],
      category: "fintech-health",
      accent: "#be123c",
      tagline: "German Credit Score & Financial Optimization Engine",
      architectureHighlight: "Secure Biometric Mobile Auth & Encrypted Financial Data Streams",
      liveUrl: "https://www.bonify.de",
      androidUrl: "https://play.google.com/store/apps/details?id=de.bonify.app",
      iosUrl: "https://apps.apple.com/de/app/bonify/id1122536146",
    },
    {
      name: "Glimpse It",
      description:
        "Australian mobile marketplace for discovering and purchasing low-tox and organic household goods. Built the native application end-to-end across product discovery, ingredient analysis, wishlist curation, and one-click purchase checkout flows.",
      technologies: ["React Native", "Redux Toolkit", "Stripe API", "iOS", "Android"],
      outcomes: [
        "Engineered fluid product discovery, barcode lookup, and frictionless checkout.",
        "Maintained sub-second list scrolling across thousands of SKUs.",
      ],
      category: "mobile",
      accent: "#f43f5e",
      tagline: "Australian Low-Tox Organic Product Discovery Marketplace",
      architectureHighlight: "Virtualized Product Catalogs with Native Stripe Checkout Integration",
      androidUrl: "https://play.google.com/store/apps/details?id=com.glimpse.it",
      iosUrl: "https://apps.apple.com/au/app/glimpse-it/id6476137712",
    },
    {
      name: "Clinical Trial Link",
      description:
        "Platform connecting clinical trial candidates with hospital research centers. Engineered patient screening and registration flows in React Native alongside an enterprise Next.js portal for hospitals and clinical research organizations.",
      technologies: ["React Native", "Next.js", "TypeScript", "Tailwind CSS"],
      outcomes: [
        "Simplified clinical patient onboarding and accelerated hospital trial recruitment.",
        "Ensured rigorous compliance standards across patient questionnaires.",
      ],
      category: "fintech-health",
      accent: "#9f1239",
      tagline: "Clinical Research Recruitment & Trial Coordination Portal",
      architectureHighlight: "Next.js Server-Side Protected Portals with Native Mobile Candidate App",
      liveUrl: "http://clinicaltriallink.org",
    },
    {
      name: "Luqman",
      description:
        "Middle Eastern educational application featuring live one-on-one voice instruction. Integrated the Agora Voice SDK for crystalline audio connectivity under low bandwidth, configured Firebase for real-time lesson logs, and built an interactive post-call rating system.",
      technologies: ["React Native", "Agora SDK", "Firebase", "Real-Time Audio"],
      outcomes: [
        "Integrated Agora voice calling with automatic packet-loss concealment.",
        "Constructed real-time post-session evaluations and student ratings.",
      ],
      category: "mobile",
      accent: "#e11d48",
      tagline: "Real-Time Voice Tutoring Platform with Agora Audio Engine",
      architectureHighlight: "Low-Latency WebRTC / Agora Native Bridge with Firebase Sync",
      iosUrl: "https://apps.apple.com/in/app/luqman/id1594846756",
    },
    {
      name: "MetaMerch",
      description:
        "UK interactive 3D merchandise customization platform. Integrated Three.js WebGL shaders to enable customers to customize 3D product textures, rotate photorealistic apparel in 360°, and inspect personalized typography before checkout.",
      technologies: ["React.js", "Next.js", "Three.js", "WebGL", "Canvas API"],
      outcomes: [
        "Engineered browser-based 3D model customization with real-time UV texture mapping.",
        "Generated instantaneous SVG/print production assets upon order placement.",
      ],
      category: "3d",
      accent: "#ff1a53",
      tagline: "Interactive 3D Apparel & Merchandise Customization Platform",
      architectureHighlight: "Custom WebGL Texture Mapping Pipeline with Instant Vector Output",
      liveUrl: "https://meta-merch.io/",
    },
    {
      name: "Blue Sky Peptides",
      description:
        "High-volume US e-commerce pharmacy platform. Architected the Redux-driven shopping cart, high-concurrency checkout flow, dynamic dosage calculators, and PCI-compliant payment gateway integrations.",
      technologies: ["React.js", "Next.js", "Redux", "Payment Gateways", "REST APIs"],
      outcomes: [
        "Handled thousands of concurrent order transactions with zero cart state dropouts.",
        "Integrated bulletproof payment gateway callbacks and fraud mitigation checks.",
      ],
      category: "web",
      accent: "#fb7185",
      tagline: "High-Volume US Pharmacy E-Commerce & Checkout Engine",
      architectureHighlight: "Optimistic Redux Cart Engine with Resilient Payment Webhooks",
      liveUrl: "https://blueskypeptide.com/",
    },
    {
      name: "Dehurdle",
      description:
        "Mindfulness and guided meditation mobile application. Built algorithmic mood-based audio soundscape playback, offline audio caching, and daily mindfulness check-in routines.",
      technologies: ["React Native", "Audio Streaming", "SQLite", "Animations"],
      outcomes: [
        "Delivered offline audio streaming with seamless background audio play.",
        "Built soothing, gesture-driven meditation timer interfaces.",
      ],
      category: "mobile",
      accent: "#f43f5e",
      tagline: "Audio-Driven Mindfulness & Guided Meditation Application",
      architectureHighlight: "Background Native Audio Session Handling & Offline Storage",
      androidUrl: "https://play.google.com/store/apps/details?id=com.mobileapp.dehurdle&hl=en_IN",
      iosUrl: "https://apps.apple.com/pl/app/dehurdle/id6450671698",
    },
    {
      name: "Coffee Hub",
      description:
        "UAE coffee and artisanal bakery ordering mobile app. Engineered dynamic live order tracking, menu customization, geo-located store pickup, and fast mobile payments.",
      technologies: ["React Native", "Google Maps API", "Payment SDK", "Redux"],
      outcomes: [
        "Built snappy ordering and geo-location tracking for retail branches.",
        "Optimized checkout path down to two taps for recurring orders.",
      ],
      category: "mobile",
      accent: "#be123c",
      tagline: "UAE On-Demand Coffee & Bakery Ordering Mobile App",
      architectureHighlight: "Live Geolocation Route Polling & Multi-Item Cart Modals",
      iosUrl: "https://apps.apple.com/in/app/coffeehub-%D9%83%D9%88%D9%81%D9%8A%D9%87%D8%A8/id1611114898",
    },
    {
      name: "CarpetRight UK",
      description:
        "Enterprise store locator and retail directory management platform for the UK floor-covering leader. Integrated Yext API to synchronize store hours, localized inventory, and geo-targeted promotions.",
      technologies: ["React.js", "Yext API", "Geo-Search", "Web Performance"],
      outcomes: [
        "Synchronized hundreds of retail stores with real-time locator search.",
        "Achieved 95+ Google Lighthouse SEO and accessibility scores.",
      ],
      category: "web",
      accent: "#880826",
      tagline: "National Retail Store Directory & High-Traffic Locator",
      architectureHighlight: "Dynamic Yext Geo-Query Layer with Edge Caching",
      liveUrl: "https://www.carpetright.co.uk/",
    },
    {
      name: "86 Agency",
      description:
        "Interactive creative agency portfolio featuring dynamic Three.js canvas animations, custom shader water ripples, and smooth inertia-based scrolling.",
      technologies: ["React.js", "Next.js", "Three.js", "GLSL Shaders", "Motion"],
      outcomes: [
        "Built captivating Three.js particle and shader effects at 60fps.",
        "Crafted editorial typography transitions and smooth scroll synchronization.",
      ],
      category: "3d",
      accent: "#ff2a5f",
      tagline: "Interactive Agency Showcase with Custom WebGL Shaders",
      architectureHighlight: "GLSL Shader Canvas with Scroll-Linked Raycasting",
      liveUrl: "https://weare86.com/",
    },
    {
      name: "StudyGoGo",
      description:
        "Digital education portal enabling real-time interactive quizzes, homework grading, automated test generation, and student assignment tracking.",
      technologies: ["React.js", "Next.js", "TypeScript", "REST APIs"],
      outcomes: [
        "Engineered interactive timed quiz engines with instantaneous client scoring.",
        "Constructed teacher dashboard for homework assignment grading.",
      ],
      category: "web",
      accent: "#9f1239",
      tagline: "Real-Time Academic Quiz & Assignment Grading System",
      architectureHighlight: "Deterministic Quiz State Machine with Time-Lock Integrity",
    },
    {
      name: "NAS Freight Solutions Ltd.",
      description:
        "East African logistics management platform for posting, assigning, dispatching, and tracking inter-city freight orders and fleet manifests.",
      technologies: ["React.js", "State Architecture", "REST APIs", "Data Tables"],
      outcomes: [
        "Streamlined shipment assignment and manifest generation workflows.",
        "Reduced fleet tracking latency with real-time status updates.",
      ],
      category: "web",
      accent: "#e11d48",
      tagline: "Pan-African Commercial Freight Dispatch & Fleet Portal",
      architectureHighlight: "High-Throughput Manifest Data Grid with Status Sync",
    },
    {
      name: "Ozeki Sake",
      description:
        "Product comparison and pairing discovery platform for a storied Japanese-American brewery. Created flavor profile matrix and distributor locators.",
      technologies: ["React.js", "Responsive Architecture", "Interactive Filtering"],
      outcomes: [
        "Built interactive flavor comparison matrix and brewery story visuals.",
        "Expanded customer engagement and distributor lead conversions.",
      ],
      category: "web",
      accent: "#ff1a53",
      tagline: "Interactive Product Comparison & Flavor Matrix Engine",
      architectureHighlight: "Multi-Attribute Product Matrix Filter with Fluid Transitions",
      liveUrl: "https://www.ozekisake.com/",
    },
  ] satisfies PortfolioProject[],

  achievements: [
    "Shipped and maintained 17+ commercial applications on the Apple App Store, Google Play, and enterprise cloud infrastructure.",
    "Delivered 35% measured frontend performance improvements across mission-critical enterprise web and mobile applications.",
    "Accelerated team delivery velocity by 30% through reusable component architecture and standardized design-token libraries.",
    "Collaborated with international enterprise clients and cross-functional teams across the US, UK, Germany, UAE, Australia, and India.",
    "Mentored 15+ junior and mid-level software engineers in modern React, TypeScript, and cross-platform native engineering practices.",
  ],

  // Interactive Architecture Matrix
  architectureLayers: [
    {
      id: "ui-core",
      name: "01 / Presentation & Design System",
      tagline: "Atomic UI, Design Tokens & Motion Physics",
      description:
        "Strictly-typed component architecture utilizing atomic design principles, synchronized CSS tokens, and hardware-accelerated animations via GSAP and Framer Motion.",
      technologies: ["React 18+", "Next.js App Router", "Tailwind CSS", "GSAP / ScrollTrigger", "Framer Motion"],
      stats: { metric: "<16ms", label: "Frame budget execution" },
      specs: [
        "Headless accessible primitives with full keyboard navigation",
        "Synchronized design tokens across Web & React Native styles",
        "Hardware-accelerated transforms & zero layout-thrashing animations",
      ],
    },
    {
      id: "mobile-engine",
      name: "02 / Mobile Engine & Native Bridge",
      tagline: "60fps React Native with Native Modules",
      description:
        "High-performance cross-platform mobile engineering with Hermes bytecode optimization, native Objective-C/Swift and Java/Kotlin bridging, and background threads.",
      technologies: ["React Native", "Xcode / iOS", "Android Studio", "Hermes Engine", "Native Modules"],
      stats: { metric: "60/120fps", label: "Fluid native execution" },
      specs: [
        "Custom native modules for camera, biometrics & audio processing",
        "Hermes engine tuning with pre-compiled AOT bytecode",
        "Zero-latency bridging via modern React Native architecture",
      ],
    },
    {
      id: "state-realtime",
      name: "03 / State Architecture & Real-Time Sync",
      tagline: "Predictable Mutation, RTK Query & WebSockets",
      description:
        "Scalable client-side data layer featuring Redux Toolkit Query, selective Context API state slicing, WebSocket event streams, and Agora real-time audio channels.",
      technologies: ["Redux Toolkit", "RTK Query", "WebSockets", "Firebase Realtime", "Agora SDK"],
      stats: { metric: "100%", label: "Predictable immutable state" },
      specs: [
        "Optimistic UI updates with automatic rollback on network failure",
        "Real-time audio session synchronization under erratic network conditions",
        "Normalized cache layers preventing duplicate API roundtrips",
      ],
    },
    {
      id: "performance-pipeline",
      name: "04 / Optimization & Performance Tuning",
      tagline: "Sub-Second Web Vitals & Bundle Elimination",
      description:
        "Rigorous performance engineering eliminating unnecessary re-renders, tree-shaking unused dependencies, chunk-splitting routes, and tuning asset payloads.",
      technologies: ["React Profiler", "Lighthouse", "Code Splitting", "Virtualization", "Asset Compression"],
      stats: { metric: "-73%", label: "Load latency reduction" },
      specs: [
        "Virtualized list rendering handling 10,000+ records seamlessly",
        "Dynamic import code splitting reducing initial bundle by 60%+",
        "Continuous memory leak profiling and garbage collection monitoring",
      ],
    },
    {
      id: "cloud-release",
      name: "05 / Cloud Infrastructure & Multi-Store Release",
      tagline: "Automated CI/CD, App Store & Play Store Delivery",
      description:
        "End-to-end release engineering spanning Apple App Store guidelines, Google Play Console signing, automated Jenkins pipelines, and AWS CloudFront edge delivery.",
      technologies: ["App Store Connect", "Google Play Console", "Jenkins / Fastlane", "AWS S3 / CloudFront", "Git"],
      stats: { metric: "17+", label: "Zero-downtime releases" },
      specs: [
        "Automated build artifact generation with cryptographically signed keys",
        "Global CDN distribution via AWS CloudFront with aggressive edge caching",
        "Trunk-based Git workflows with automated branch verification",
      ],
    },
  ],

  // Before & After Optimization Case Study
  beforeAfterCaseStudy: {
    title: "Production Architecture Transformation",
    subtitle: "Real-world engineering impact: Monolithic legacy pattern vs Sumit's engineered architecture",
    before: {
      tag: "Standard / Legacy Architecture",
      lcp: "3.4s",
      bundleSize: "820 KB",
      frameRate: "38 - 45 fps (Jank)",
      releaseCycle: "Manual & Fragile",
      stateManagement: "Prop-drilled & Unmemoized",
      verdict: "High bounce rate, noticeable mobile lag, frequent regression bugs.",
    },
    after: {
      tag: "Sumit's Engineered Architecture",
      lcp: "0.9s",
      bundleSize: "185 KB",
      frameRate: "Silky 60 / 120 fps",
      releaseCycle: "Automated CI/CD Pipelines",
      stateManagement: "Normalized RTK + Selective Subscriptions",
      verdict: "35% faster render, zero frame drops, reliable multi-platform delivery.",
    },
  },

  // Creative Engineering Process
  processPhases: [
    {
      number: "01",
      phase: "Architectural Discovery & RFCs",
      summary:
        "Deconstructing product requirements into technical specifications, API contracts, entity models, and state machine diagrams before writing production code.",
      artifacts: ["Technical RFC Documents", "API Schemas & Data Contracts", "State Dependency Matrix"],
    },
    {
      number: "02",
      phase: "Design Token & Component Foundation",
      summary:
        "Constructing atomic, accessible component primitives and design tokens that bridge web and mobile, ensuring pixel-perfect fidelity with high maintainability.",
      artifacts: ["Tokenized Component Library", "Strict TypeScript Type Definitions", "Accessibility (a11y) Verification"],
    },
    {
      number: "03",
      phase: "Cross-Platform Engine & Offline Sync",
      summary:
        "Developing core business logic, real-time audio/data integrations, caching layers, and native module bridges for iOS and Android.",
      artifacts: ["Native Module Bridges", "Offline-First Local DB Sync", "Real-Time WebSocket / SDK Hooks"],
    },
    {
      number: "04",
      phase: "Hardening, Profiling & App Store Launch",
      summary:
        "Executing flamegraph profiling, memory leak elimination, multi-device physical testing, and orchestrating certified Apple App Store and Google Play launches.",
      artifacts: ["Sub-Second Core Web Vitals", "Automated Fastlane Pipelines", "Certified Store Submissions"],
    },
  ],
} as const;

export const socialProfiles = [
  { platform: "linkedin", label: "LinkedIn — Sumit Pramanik", url: portfolio.linkedinUrl },
  { platform: "github", label: "GitHub — Sumit Pramanik", url: portfolio.githubUrl },
  { platform: "instagram", label: "Instagram — Sumit Pramanik", url: "https://www.instagram.com/sumitaasur/" },
  { platform: "x", label: "X (Twitter) — Sumit Pramanik", url: "https://x.com/sumitaasur" },
  { platform: "facebook", label: "Facebook — Sumit Pramanik", url: "https://www.facebook.com/sumitaasur" },
] as const;

export type SocialPlatform = (typeof socialProfiles)[number]["platform"];

export const featuredProjects = portfolio.projects.slice(0, 8);
export const moreProjects = portfolio.projects.slice(8);

"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { link } from "fs";

const content = [
  {
    title: "Teaminindia",
    description:
      "Developed a responsive website for Teaminindia using HTML, CSS, Bootstrap, JavaScript,. The site showcases luxurious products with an elegant design and smooth navigation, enhancing user experience. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/teaminindia.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="teaminindia"
        />
      </div>
    ),
    url: "https://www.teaminindia.com/",
  },
  {
    title: "Peacemindmusic",
    description:
      "Developed a responsive website for peacemindmusic using HTML, CSS, Bootstrap, JavaScript,. The site showcases luxurious products with an elegant design and smooth navigation, enhancing user experience. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/peacemindmusic.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="peacemindmusic"
        />
      </div>
    ),
    url: "https://www.peacemindmusic.com/",
  },
  {
    title: "Diptyqueparis",
    description:
      "Developed a responsive website for Diptyque Paris using HTML, CSS, SCSS, Tailwind CSS, JavaScript, and React.js. The site showcases luxurious products with an elegant design and smooth navigation, enhancing user experience. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/diptyqueparis.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="Diptyqueparis"
        />
      </div>
    ),
    url: "https://www.diptyqueparis.com/en_us/",
  },
  {
    title: "Papajohns",
    description:
      "Created a dynamic website for Papa John's using HTML, CSS, SCSS, Tailwind CSS, JavaScript, and React.js. The site features an engaging menu display, easy ordering system, and responsive design, ensuring a seamless user experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      <Image
        src="/images/projects/papajohns.png"
        width={300}
        height={300}
        className="h-full w-full object-cover object-top"
        alt="papajohns"
      />
    </div>
    ),
    url: "https://www.papajohns.com/",
  },
  {
    title: "Pizzaranch",
    description:
      "Designed a vibrant website for Pizza Ranch utilizing HTML, CSS, SCSS, Tailwind CSS, JavaScript, and React.js. The site showcases their menu, provides an intuitive ordering experience, and adapts seamlessly across devices.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/pizzaranch.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="pizzaranch"
        />
      </div>
    ),
    url: "https://pizzaranch.com/",
  },
  {
    title: "CommunityFibre",
    description:
      "Developed a user-friendly website for Community Fibre using HTML, CSS, SCSS, Tailwind CSS, JavaScript, and React.js. The site highlights their high-speed internet services and offers easy navigation for users to find information and sign up. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/communityfibre.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="communityfibre"
        />
      </div>
    ),
    url: "https://communityfibre.co.uk/",
  },
  {
    title: "Focuskon",
    description:
      "Created a sleek website for FocusKon using HTML, CSS, SCSS, Bootstrap, JavaScript, and Laravel. The site features an engaging user interface, responsive design, and robust backend functionality, ensuring a smooth experience for users.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/focuskon.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="Focuskon"
        />
      </div>
    ),
    url: "https://focuskon.com/",
  },
  {
    title: "Banner Bank",
    description:
      "Developed a modern website for BannerBank using HTML, CSS, SCSS, Tailwind CSS, JavaScript, and React.js. The site features a clean design and intuitive user experience, allowing users to easily navigate and access banking services. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/bannerbank.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="Banner Bank"
        />
      </div>
    ),
    url: "https://www.bannerbank.com/",
  },
  {
    title: "Krispy Kreme",
    description:
      "Created a visually appealing website for Krispy Kreme using HTML, CSS, SCSS, Tailwind CSS, JavaScript, and React.js. The site highlights their delicious products with an engaging layout and user-friendly navigation, enhancing the overall customer experience. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/krispykreme.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="krispykreme"
        />
      </div>
    ),
    url: "https://www.krispykreme.com/",
  },
  {
    title: "Fatcat Loans",
    description:
      "Developed a professional website for Fat Cat Loans using HTML, CSS, SCSS, Bootstrap, JavaScript, and Laravel. The site features a user-friendly interface, responsive design, and robust backend functionality, making it easy for users to access loan information and apply online.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/fatcatloans.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="fatcatloans"
        />
      </div>
    ),
    url: "https://www.fatcatloans.ca/",
  },
  {
    title: "Dqot Solutions",
    description:
      "Created a sleek website for DQOT Solutions using HTML, CSS, SCSS, Bootstrap, JavaScript, and Laravel. The site showcases their services with a modern design and intuitive navigation, ensuring a seamless user experience for clients.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/projects/dqotsolutions.png"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="dqotsolutions"
        />
      </div>
    ),
    url: "https://www.dqotsolutions.com/",
  },
];
export function ProjectSection() {
  return (
    <div 
    // ref={sectionRef}
    // initial={{ opacity: 0, y: 50 }}
    // animate={isPinned ? { opacity: 1, y: 0, position: 'fixed', top: 0 } : { opacity: 1, y: 0 }}
    // transition={{ duration: 0.5 }}
    className="dark:bg-[#0a0a0a] bg-white">
    <h2 className="text-4xl md:text-5xl font-bold text-center dark:text-neutral-300 text-neutral-950  pt-10 mb-20">My Projects</h2>
    <StickyScroll content={content} />
  </div>
  );
}

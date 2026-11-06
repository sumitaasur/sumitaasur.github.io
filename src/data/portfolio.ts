export type ProjectCategory = "all" | "backend-fullstack" | "mobile" | "ai-web3d" | "fintech-health";

export type PortfolioProject = {
  name: string;
  industry: string;
  overview: string;
  description: string;
  technologies: string[];
  myContribution: string[];
  engineeringChallenges: string;
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

export type SkillCategory =
  | "Backend Engineering"
  | "Frontend Engineering"
  | "Mobile Engineering"
  | "AI & GenAI Development"
  | "Cloud & DevOps"
  | "Third-Party Integrations"
  | "Performance & Quality"
  | "Currently Learning";

export type Skill = {
  name: string;
  description: string;
  icon: string;
  category: SkillCategory;
  isExpanding?: boolean;
};

const skill = (name: string, icon: string, description: string, category: SkillCategory, isExpanding = false): Skill => ({
  name,
  icon,
  description,
  category,
  isExpanding,
});

export const portfolio = {
  name: "Sumit Pramanik",
  shortName: "SUMIT",
  primaryTitle: "FULL STACK ENGINEER",
  title: "Full Stack Engineer (Node.js, React.js) | AI / GenAI Application Development",
  secondaryTitle: "Node.js • React.js • React Native • Next.js • MongoDB • AI / GenAI",
  experienceYears: "8+",
  experienceLabel: "8+ Years",
  location: "Jaipur, India",
  coordinates: "26.9124° N, 75.7873° E",
  availabilityStatus: "Available for Full Stack & AI Engagements",
  availabilityBadge: "AVAILABLE FOR WORK",
  phone: "+91-9587130971",
  email: "sumit.pramanick@hotmail.com",
  linkedinUrl: "https://linkedin.com/in/sumitaasur",
  githubUrl: "https://github.com/sumitaasur",

  heroIntro:
    "I engineer production-grade web, mobile and backend applications using Node.js, React.js, React Native, Next.js and MongoDB. Designing RESTful APIs, high-concurrency systems and AI-powered interfaces with measurable impact.",

  summary:
    "Full Stack Engineer with 8+ years of experience building production-grade web, mobile and backend applications with Node.js, React.js, React Native, Next.js and MongoDB. Strong in RESTful API design, third-party and AI-service integration (Firebase, Twilio, Agora, payment gateways), and end-to-end delivery of 17+ applications across fintech, healthcare, fitness, logistics, education and e-commerce for clients in the US, Europe, UAE, Australia and India. Daily user of AI-assisted development tools (Claude, GitHub Copilot, Cursor, ChatGPT, Codex), now focused on GenAI application development: integrating LLM APIs, building RAG-based features and AI-powered interfaces on a Node.js and React stack, while expanding into Python and FastAPI.",

  valueStatement:
    "Bridging robust Node.js backend systems, reactive frontend interfaces, cross-platform mobile runtimes and GenAI integrations with production-tested scalability.",

  metaDescription:
    "Full Stack Engineer with 8+ years of experience building scalable web, mobile and backend applications using Node.js, React.js, React Native, Next.js and MongoDB. Focused on AI/GenAI application development.",

  // Hero Right Statistics (Matching WAIL reference composition)
  heroStats: [
    {
      value: "8+",
      label: "YEARS OF EXPERIENCE",
      detail: "Full Stack & Cross-Platform",
    },
    {
      value: "17+",
      label: "APPLICATIONS DELIVERED",
      detail: "Web, Mobile & Backend Systems",
    },
    {
      value: "6",
      label: "INDUSTRIES SERVED",
      detail: "Fintech, Health, Fitness, Logistics, Ed, E-comm",
    },
  ],

  industriesServed: [
    "Fintech",
    "Healthcare",
    "Fitness",
    "Logistics",
    "Education",
    "E-commerce",
  ],

  // Verified Resume Achievements
  achievements: [
    {
      metric: "Up to 35%",
      label: "Performance Improvement",
      description:
        "Improved application performance by up to 35% through code-splitting, lazy loading and component-level optimization.",
    },
    {
      metric: "Approx. 30%",
      label: "Development Turnaround Lift",
      description:
        "Reduced development turnaround time by approximately 30% by designing reusable component libraries and frontend standards.",
    },
    {
      metric: "17+",
      label: "Production-Grade Applications",
      description:
        "Delivered 17+ production-grade web, mobile and full-stack applications; launched and maintained multiple apps on the Apple App Store and Google Play Store.",
    },
    {
      metric: "Multi-Platform",
      label: "Scalable RESTful API Design",
      description:
        "Designed scalable RESTful APIs with Node.js and Express.js powering both web and mobile platforms; mentored junior and mid-level developers.",
    },
  ],

  // AI & GenAI Development Architecture
  aiSection: {
    title: "AI & GenAI Engineering",
    subtitle: "Intelligent Systems Interface",
    description:
      "Integrating cutting-edge Generative AI capabilities into production Node.js and React applications. Constructing intelligent chat systems, semantic search, and context-aware RAG pipelines.",
    capabilities: [
      {
        title: "LLM API Integration",
        description:
          "Seamless orchestration with OpenAI, Anthropic Claude, and Gemini APIs via Node.js backends with streaming responses, token optimization, and structured JSON parsing.",
        tags: ["OpenAI API", "Claude API", "Gemini", "Streaming SSE", "Function Calling"],
      },
      {
        title: "Prompt Engineering & Context",
        description:
          "Designing system prompts, few-shot templates, and dynamic context windows to elicit reliable, deterministic outputs for real-world enterprise workflows.",
        tags: ["System Prompts", "Few-Shot Formatting", "Context Caching", "Guardrails"],
      },
      {
        title: "RAG Architecture (Embeddings & Search)",
        description:
          "Architecting Retrieval-Augmented Generation workflows: generating vector embeddings, chunking unstructured documents, and performing semantic vector similarity search.",
        tags: ["Embeddings", "Vector Similarity", "Semantic Retrieval", "Knowledge Chunking"],
      },
      {
        title: "AI Chat & Conversational Interfaces",
        description:
          "Building low-latency, real-time AI conversational user interfaces with markdown rendering, code block syntax highlighting, optimistic typing states, and error retries.",
        tags: ["Streaming Markdown", "Chat History Sync", "Optimistic UI", "Voice/Text Hooks"],
      },
      {
        title: "AI-Assisted Engineering Workflow",
        description:
          "Leveraging modern AI-augmented coding environments daily to accelerate development velocity, refactor complex modules, and generate rigorous test suites.",
        tags: ["Claude", "Cursor", "GitHub Copilot", "ChatGPT", "Codex"],
      },
    ],
    expandingInto: [
      {
        name: "Python",
        status: "Active Study & Prototyping",
        description: "Core language fundamentals, data manipulation, and asynchronous scripts.",
      },
      {
        name: "FastAPI",
        status: "Active Study & Prototyping",
        description: "Building high-performance asynchronous microservices and AI model endpoints.",
      },
      {
        name: "Agentic AI",
        status: "Exploration & Research",
        description: "Autonomous agent execution loops, multi-agent coordination, and tool-augmented workflows.",
      },
    ],
  },

  // Interactive Architecture Layers
  architectureLayers: [
    {
      id: "backend",
      name: "01 / Backend & API Engine",
      tagline: "Scalable Node.js, Express & Database Layer",
      description:
        "High-throughput RESTful API design with Node.js and Express.js, featuring secure JWT authentication, role-based access control (RBAC), and dual database architectures (MongoDB & MySQL).",
      technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "JWT / RBAC", "Axios"],
      metric: "<45ms",
      metricLabel: "API Response Latency",
      specs: [
        "Modular MVC / Service-Repository pattern with strict separation of concerns",
        "Role-Based Access Control securing admin panels and multi-tenant patient/doctor portals",
        "Optimized MongoDB aggregations and transactional MySQL schemas",
      ],
    },
    {
      id: "frontend",
      name: "02 / Frontend & Reactive Systems",
      tagline: "React.js, Next.js & TypeScript UI Architecture",
      description:
        "Enterprise-grade web applications utilizing React.js, Next.js App Router, strict TypeScript, and predictable global state management via Redux Toolkit and Context API.",
      technologies: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Context API", "Three.js"],
      metric: "99/100",
      metricLabel: "Lighthouse Performance",
      specs: [
        "Server Components (RSC) and streaming SSR for sub-second first meaningful paint",
        "Predictable Redux Toolkit state stores with normalized caching via RTK Query",
        "Interactive 3D WebGL visualizations embedded with Three.js",
      ],
    },
    {
      id: "mobile",
      name: "03 / Cross-Platform Mobile Engine",
      tagline: "React Native iOS & Android Native Runtime",
      description:
        "Production cross-platform mobile engineering with React Native, deploying fluid 60fps applications with native module bridges, camera/biometric access, and offline caches.",
      technologies: ["React Native", "Android (Java/Kotlin)", "iOS (Swift/Obj-C)", "Hermes Engine", "Offline Sync"],
      metric: "60/120fps",
      metricLabel: "Native Frame Budget",
      specs: [
        "Synchronized business logic shared across iOS, Android, and Web platforms",
        "Hermes AOT bytecode engine optimization for instant mobile startup",
        "Resilient offline-first persistence handling variable network conditions",
      ],
    },
    {
      id: "integrations",
      name: "04 / Third-Party Services & Real-Time",
      tagline: "Audio Streaming, Realtime Database & Payments",
      description:
        "Mission-critical third-party integrations: real-time voice calling via Agora SDK, SMS/telecom via Twilio, Firebase real-time data & push notifications, and PCI-compliant payment gateways.",
      technologies: ["Agora SDK", "Twilio", "Firebase Auth / RTDB", "Stripe / Payment Gateways", "In-App Purchases"],
      metric: "99.9%",
      metricLabel: "Service Reliability",
      specs: [
        "Low-latency real-time voice calling with automatic packet-loss mitigation (Agora)",
        "Automated transactional SMS and notification pipelines (Twilio & Firebase FCM)",
        "Secure in-app purchases and checkout workflows for web and native mobile",
      ],
    },
    {
      id: "cloud-devops",
      name: "05 / Cloud & Release Lifecycle",
      tagline: "AWS Infrastructure, CI/CD & Multi-Store Release",
      description:
        "Cloud hosting and release lifecycle management: AWS CloudFront edge CDN, S3 asset buckets, CloudWatch monitoring, automated Jenkins pipelines, and certified App Store & Play Store publishing.",
      technologies: ["AWS CloudFront", "AWS S3", "AWS CloudWatch", "Git", "Jenkins", "App Store Connect", "Play Console"],
      metric: "17+",
      metricLabel: "Production Apps Released",
      specs: [
        "Global edge caching with AWS CloudFront and S3 object storage",
        "Automated CI/CD build scripts with cryptographic signing for iOS & Android",
        "End-to-end Apple App Store and Google Play Store compliance & release ownership",
      ],
    },
  ],

  // Complete Verified Professional Experience (Freelance REPLACED with 86 Agency)
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Konstant Infosolutions",
      location: "Jaipur, Rajasthan",
      dates: "May 2025 – Jul 2026",
      badge: "Lead Full Stack",
      highlights: [
        "Developed REST APIs and Node.js services and integrated Twilio across web and mobile, tightening code review and testing practices to catch defects before they reached end users.",
        "Owned architecture and end-to-end delivery of scalable React.js, React Native and Node.js applications for international clients, establishing patterns that kept performance and maintainability consistent across frontend, mobile and backend codebases.",
        "Served as the primary technical point of contact for cross-functional teams, translating client requirements into full-stack, production-ready features and improving delivery predictability.",
      ],
    },
    {
      role: "Lead Frontend Engineer",
      company: "86 Agency",
      location: "Remote / Agency",
      dates: "Verified Engagement",
      badge: "Lead Engineer",
      highlights: [
        "Led frontend architecture and interactive Three.js web application development for agency and high-profile international clients.",
        "Architected scalable, modular React.js and Next.js applications featuring custom WebGL shaders, particle systems, and 60fps physics animations.",
        "Collaborated directly with creative directors and engineering teams to translate complex aesthetic requirements into reliable, responsive production releases.",
      ],
    },
    {
      role: "MERN Stack Developer",
      company: "Dotsquares Technologies",
      location: "Jaipur, Rajasthan",
      dates: "May 2023 – Oct 2024",
      badge: "Full Stack Engineer",
      highlights: [
        "Developed RESTful APIs using Node.js, Express.js, MySQL and MongoDB to power web and mobile backends, alongside interactive 3D web experiences built with Three.js in Next.js applications.",
        "Integrated in-app purchases and multiple payment gateways, enabling secure monetization across web and mobile platforms.",
        "Built secure admin panels with role-based access control and data management features, giving stakeholders operational visibility and control.",
      ],
    },
    {
      role: "React Native Developer",
      company: "Arka Softwares Pvt Ltd",
      location: "Jaipur, Rajasthan",
      dates: "Feb 2022 – Mar 2023",
      badge: "Mobile Engineer",
      highlights: [
        "Developed cross-platform mobile applications using React Native integrated with the Agora SDK for real-time communication features.",
        "Integrated Firebase and third-party services, streamlining data management and strengthening app reliability.",
      ],
    },
    {
      role: "React.js / React Native Developer",
      company: "Dev Technosys Pvt Ltd",
      location: "Jaipur, Rajasthan",
      dates: "Nov 2019 – Feb 2022",
      badge: "Full Stack Frontend",
      highlights: [
        "Developed cross-platform mobile and web applications using React Native and React.js for global clients, contributing to consistent on-time delivery across concurrent projects.",
        "Integrated Firebase and third-party services, ensuring reliable data flow and reducing integration-related bugs.",
      ],
    },
    {
      role: "Quality Analyst",
      company: "Bill Gosling Outsourcing (formerly MattsenKumar Pvt. Ltd.)",
      location: "Jaipur, Rajasthan",
      dates: "May 2018 – Sep 2019",
      badge: "QA Specialist",
      highlights: [
        "Created, executed and maintained test cases and test data; performed functional, regression, smoke, sanity and UAT testing to ensure software met requirements.",
      ],
    },
  ],

  // Verified Resume Projects
  projects: [
    {
      name: "Medara Health",
      industry: "Healthcare",
      overview: "Four-surface healthcare platform connecting patients, doctors, and laboratories.",
      description:
        "Pre-launch healthcare platform connecting patients, doctors and diagnostic laboratories across four surfaces: patient mobile app, patient web app, doctor portal and lab portal, with appointment, consultation and diagnostic-report workflows.",
      technologies: ["Node.js", "React.js", "React Native", "Next.js", "MongoDB", "REST APIs"],
      myContribution: [
        "Engineered patient consultation workflows and secure appointment scheduling across web and mobile.",
        "Implemented role-based access control (RBAC) ensuring doctor, patient, and lab data partition integrity.",
        "Constructed shared TypeScript interfaces ensuring zero schema drift across all four portals.",
      ],
      engineeringChallenges:
        "Synchronizing sensitive patient medical records across mobile and web with strict HIPAA-aligned data segregation and instantaneous real-time status updates.",
      category: "fintech-health",
      accent: "#ff174d",
      tagline: "Four-Surface Telehealth & Diagnostic Lab Platform",
      architectureHighlight: "Multi-Role RBAC with Shared TypeScript Contracts",
    },
    {
      name: "NASM EDGE",
      industry: "Fitness & Wellness",
      overview: "Fitness management platform for personal trainers across web and mobile.",
      description:
        "Fitness management platform for personal trainers across web and mobile from a shared codebase, covering workout programming, client management and progress tracking.",
      technologies: ["React.js", "React Native", "Node.js", "Redux", "REST APIs"],
      myContribution: [
        "Built trainer and client-facing interfaces across responsive web, iOS, and Android from a synchronized codebase.",
        "Engineered workout programming algorithms and client biometric progress assessment trackers.",
      ],
      engineeringChallenges:
        "Maintaining high-performance list virtualization and offline workout routine logging across hundreds of exercise video guides and variable mobile device specs.",
      category: "mobile",
      accent: "#e5093f",
      tagline: "Enterprise Fitness Ecosystem for Personal Trainers",
      architectureHighlight: "Unified Cross-Platform Core with Offline Workout Sync",
      liveUrl: "https://edge.nasm.org",
      androidUrl: "https://play.google.com/store/apps/details?id=com.nasm.edge",
      iosUrl: "https://apps.apple.com/us/app/nasm-edge-personal-trainers",
    },
    {
      name: "Bonify",
      industry: "Fintech & Credit",
      overview: "German digital financial platform offering free SCHUFA credit scores.",
      description:
        "German digital financial platform offering free SCHUFA credit scores; built web and mobile experiences with shared logic and personalized credit-optimization insights.",
      technologies: ["React.js", "Next.js", "React Native", "Redux", "Fintech APIs"],
      myContribution: [
        "Delivered responsive web and cross-platform mobile experiences sharing logic across platforms.",
        "Constructed personalized credit-optimization dashboards and financial insight recommendation engines.",
      ],
      engineeringChallenges:
        "Strict European financial compliance, encrypted biometric authentication on mobile, and complex financial calculations rendered instantaneously.",
      category: "fintech-health",
      accent: "#e5093f",
      tagline: "German Credit Score & Financial Optimization Engine",
      architectureHighlight: "Shared Cross-Platform Business Logic with Biometric Auth",
      liveUrl: "https://www.bonify.de",
      androidUrl: "https://play.google.com/store/apps/details?id=de.bonify.app",
      iosUrl: "https://apps.apple.com/de/app/bonify/id1122536146",
    },
    {
      name: "Blue Sky Peptides",
      industry: "E-Commerce & Pharmacy",
      overview: "US pharmacy e-commerce platform with Redux cart and payment integration.",
      description:
        "US pharmacy e-commerce platform; implemented Redux-based cart and checkout and integrated payment gateways for secure self-serve ordering.",
      technologies: ["Node.js", "React.js", "Next.js", "Redux", "Payment Gateways", "REST APIs"],
      myContribution: [
        "Architected Redux-based persistent cart and high-concurrency checkout flow.",
        "Integrated payment gateways and automated order confirmation webhooks.",
      ],
      engineeringChallenges:
        "Preventing cart state loss during network drops and ensuring zero-race-condition payment callbacks under high traffic spikes.",
      category: "backend-fullstack",
      accent: "#ff2a5f",
      tagline: "High-Volume US Pharmacy E-Commerce & Checkout Engine",
      architectureHighlight: "Optimistic Redux Cart with Resilient Payment Gateway Webhooks",
      liveUrl: "https://blueskypeptide.com/",
    },
    {
      name: "Clinical Trial Link",
      industry: "Healthcare & Research",
      overview: "Clinical trial management platform with patient and hospital portals.",
      description:
        "Platform for managing clinical trial participation; built patient registration flows in React Native and a Next.js portal for hospitals and clinics.",
      technologies: ["React Native", "Next.js", "Node.js", "TypeScript", "REST APIs"],
      myContribution: [
        "Constructed patient pre-screening and qualification registration flows in React Native.",
        "Built enterprise Next.js portal enabling hospitals and research coordinators to manage applicant pipelines.",
      ],
      engineeringChallenges:
        "Designing intuitive patient questionnaires that handle complex conditional logic while maintaining absolute confidentiality.",
      category: "fintech-health",
      accent: "#e5093f",
      tagline: "Clinical Research Recruitment & Hospital Trial Portal",
      architectureHighlight: "Conditional Logic Questionnaire Engine with Secure Data Isolation",
      liveUrl: "http://clinicaltriallink.org",
    },
    {
      name: "Luqman",
      industry: "Education & Real-Time",
      overview: "Arabic education app with real-time calling via Agora and Firebase.",
      description:
        "Arabic education app with real-time calling via the Agora API, Firebase backend data and a post-call rating system.",
      technologies: ["React Native", "Agora API", "Firebase", "Real-Time Audio"],
      myContribution: [
        "Integrated Agora Voice SDK for low-latency one-on-one audio calling.",
        "Implemented Firebase Realtime Database for active session metadata and user presence.",
        "Constructed post-session evaluations and student feedback ratings.",
      ],
      engineeringChallenges:
        "Delivering crystal-clear audio connectivity across lower-bandwidth cellular connections in the Middle East with graceful degradation.",
      category: "mobile",
      accent: "#ff174d",
      tagline: "Real-Time Voice Tutoring Platform with Agora Audio Engine",
      architectureHighlight: "Low-Latency Agora Voice Bridge with Firebase Presence Sync",
      iosUrl: "https://apps.apple.com/in/app/luqman/id1594846756",
    },
    {
      name: "MetaMerch / Metalete",
      industry: "3D Customization & Sports",
      overview: "3D merchandise and athlete avatar customization experiences using Three.js.",
      description:
        "3D customization products for UK and US clients: real-time 3D merchandise and athlete avatar rendering with interactive customization controls.",
      technologies: ["React.js", "Next.js", "React Native", "Three.js", "WebGL"],
      myContribution: [
        "Embedded Three.js canvas in both Next.js web applications and React Native mobile apps.",
        "Engineered real-time 3D mesh texture swapping, 360-degree rotation, and avatar apparel customization.",
      ],
      engineeringChallenges:
        "Preventing memory leaks and maintaining 60fps rendering during dynamic model texture updates inside mobile webviews and native canvases.",
      category: "ai-web3d",
      accent: "#ff174d",
      tagline: "Real-Time 3D Apparel & Athlete Avatar WebGL Pipeline",
      architectureHighlight: "Three.js WebGL Texture Pipeline with React Native Bridge",
      liveUrl: "https://meta-merch.io/",
    },
    {
      name: "Glimpse It",
      industry: "E-Commerce & Mobile",
      overview: "Australian low-tox household products app built end-to-end.",
      description:
        "Australian low-tox household products app built end to end, covering product discovery, recommendation-style browsing and purchase flows.",
      technologies: ["React Native", "Redux Toolkit", "REST APIs", "Stripe API"],
      myContribution: [
        "Delivered full mobile product experience from initial architecture through App Store and Google Play releases.",
        "Implemented algorithmic ingredient risk rating indicators and one-tap checkout.",
      ],
      engineeringChallenges:
        "Optimizing high-density catalog search and barcode scanner performance on lower-tier mobile hardware.",
      category: "mobile",
      accent: "#ff2a5f",
      tagline: "Australian Low-Tox Product Discovery Marketplace",
      architectureHighlight: "Virtualized Product Lists with Native Barcode Scanning Integration",
      androidUrl: "https://play.google.com/store/apps/details?id=com.glimpse.it",
      iosUrl: "https://apps.apple.com/au/app/glimpse-it/id6476137712",
    },
    {
      name: "86 Agency",
      industry: "Creative Agency & WebGL",
      overview: "Marketing website with interactive Three.js visuals and motion engineering.",
      description:
        "Interactive marketing website and digital agency platform featuring dynamic Three.js visuals, particle physics, and smooth inertia-based scrolling.",
      technologies: ["React.js", "Next.js", "Three.js", "GLSL Shaders", "GSAP"],
      myContribution: [
        "Led frontend architecture as Lead Frontend Engineer, creating immersive 3D canvas visuals.",
        "Constructed fluid typography animations, custom cursor interactions, and responsive layouts.",
      ],
      engineeringChallenges:
        "Coordinating scroll-triggered GLSL shader water ripples without degrading CPU thread budgets.",
      category: "ai-web3d",
      accent: "#ff2a5f",
      tagline: "Interactive Agency Platform with Custom WebGL Shaders",
      architectureHighlight: "Shader Canvas Linked to GSAP ScrollTrigger",
      liveUrl: "https://weare86.com/",
    },
    {
      name: "Dehurdle",
      industry: "Mindfulness & Audio",
      overview: "Meditation app with mood-based audio and recommendations.",
      description: "Meditation application with mood-based music and guided meditation recommendations.",
      technologies: ["React Native", "Audio Streaming", "SQLite", "Animations"],
      myContribution: [
        "Engineered background native audio session controls and offline meditation tracks storage.",
        "Built soothing, gesture-driven meditation timer interfaces.",
      ],
      engineeringChallenges: "Ensuring persistent background audio play across iOS and Android lock screens.",
      category: "mobile",
      accent: "#ff2a5f",
      tagline: "Audio-Driven Guided Meditation Application",
      architectureHighlight: "Background Native Audio Handling & Local SQLite Storage",
      androidUrl: "https://play.google.com/store/apps/details?id=com.mobileapp.dehurdle&hl=en_IN",
      iosUrl: "https://apps.apple.com/pl/app/dehurdle/id6450671698",
    },
    {
      name: "Coffee Hub",
      industry: "Food & Beverage",
      overview: "UAE coffee and bakery ordering mobile app.",
      description: "UAE coffee and bakery ordering app covering menu, cart and order placement.",
      technologies: ["React Native", "Google Maps API", "Payment SDK", "Redux"],
      myContribution: [
        "Engineered dynamic menu customization, branch pickup geo-location, and cart modals.",
        "Integrated payment gateways enabling fast recurring coffee orders.",
      ],
      engineeringChallenges: "Sub-second cart calculation with complex multi-item drink modifiers.",
      category: "mobile",
      accent: "#e5093f",
      tagline: "UAE On-Demand Coffee & Bakery Ordering Mobile App",
      architectureHighlight: "Live Geolocation Route Polling & Multi-Item Modifier Engine",
      iosUrl: "https://apps.apple.com/in/app/coffeehub-%D9%83%D9%88%D9%81%D9%8A%D9%87%D8%A8/id1611114898",
    },
    {
      name: "CarpetRight UK",
      industry: "Retail & Enterprise",
      overview: "Store locator and directory management platform.",
      description: "Store locator and directory management platform for the UK floor-covering retailer.",
      technologies: ["React.js", "Yext API", "Geo-Search", "Web Performance"],
      myContribution: [
        "Built store locator search integrating Yext geo-location APIs.",
        "Optimized web performance and directory indexing for nationwide store branches.",
      ],
      engineeringChallenges: "High-traffic search queries with fast autocomplete across hundreds of physical retail stores.",
      category: "backend-fullstack",
      accent: "#e5093f",
      tagline: "National Retail Store Directory & High-Traffic Locator",
      architectureHighlight: "Dynamic Yext Geo-Query Layer with Aggressive Edge Caching",
      liveUrl: "https://www.carpetright.co.uk/",
    },
    {
      name: "StudyGoGo",
      industry: "Education",
      overview: "Education platform for quizzes, homework, and assignments.",
      description: "Education platform for interactive quizzes, homework and student assignments.",
      technologies: ["React.js", "Next.js", "Node.js", "REST APIs"],
      myContribution: [
        "Constructed interactive timed quiz engine with client-side state preservation.",
        "Built teacher assessment dashboards for grading assignments.",
      ],
      engineeringChallenges: "Deterministic timer mechanics preventing client-side clock tampering.",
      category: "backend-fullstack",
      accent: "#e5093f",
      tagline: "Academic Quiz & Assignment Management System",
      architectureHighlight: "Tamper-Proof Timed Quiz State Machine",
    },
    {
      name: "NAS Freight Solutions",
      industry: "Logistics",
      overview: "Kenyan logistics platform for posting, assigning, and tracking orders.",
      description: "Kenyan logistics platform for posting, assigning and tracking commercial freight orders.",
      technologies: ["React.js", "Node.js", "REST APIs", "State Architecture"],
      myContribution: [
        "Built dispatch tracking tables and freight assignment workflows.",
        "Integrated order status notifications and fleet manifest generators.",
      ],
      engineeringChallenges: "Handling large data manifests with instant filtering across logistics coordinators.",
      category: "backend-fullstack",
      accent: "#ff174d",
      tagline: "Pan-African Commercial Freight Dispatch Portal",
      architectureHighlight: "High-Throughput Manifest Data Grid with Real-Time Status Updates",
    },
    {
      name: "Ozeki Sake",
      industry: "Consumer Goods",
      overview: "Product comparison website for a Japanese-American brewery.",
      description: "Product comparison website for a Japanese-American brewery.",
      technologies: ["React.js", "Responsive Architecture", "Interactive Filtering"],
      myContribution: [
        "Constructed interactive flavor profile comparison matrix.",
        "Engineered distributor locator and product pairing guides.",
      ],
      engineeringChallenges: "Crafting fluid interactive flavor radar charts that render flawlessly on mobile screens.",
      category: "backend-fullstack",
      accent: "#ff174d",
      tagline: "Interactive Product Comparison & Flavor Matrix Engine",
      architectureHighlight: "Multi-Attribute Product Matrix Filter with Fluid Transitions",
      liveUrl: "https://www.ozekisake.com/",
    },
  ] satisfies PortfolioProject[],

  // Editorial Approach / Philosophy
  philosophy: [
    {
      title: "Building Scalable Applications",
      description:
        "Scalability is built at the architectural boundary, not patched on later. I decouple frontend state, business logic, and API adapters so services scale horizontally without cross-module regressions.",
    },
    {
      title: "Designing Maintainable Architecture",
      description:
        "Code is read ten times more often than it is written. I enforce strict TypeScript types, clear domain boundaries, and documented technical RFCs that keep engineering velocity predictable.",
    },
    {
      title: "Developing Reusable Systems",
      description:
        "By constructing tokenized component foundations and shared cross-platform modules, I eliminate redundant code, cutting development turnaround time by approximately 30%.",
    },
    {
      title: "Building Reliable APIs",
      description:
        "Designing RESTful APIs with Node.js and Express.js requires disciplined request validation, idempotent mutations, role-based authorization, and resilient error recovery.",
    },
    {
      title: "Optimizing Performance",
      description:
        "Sub-second experiences are achieved through ruthless profiling: code splitting, lazy loading, memory leak prevention, and eliminating layout thrashing to gain up to 35% performance improvement.",
    },
    {
      title: "Leveraging AI Tools Effectively",
      description:
        "AI is an engineering multiplier. I use LLM APIs and tools like Claude and Cursor daily to accelerate delivery while actively implementing production GenAI features with RAG and semantic retrieval.",
    },
    {
      title: "Owning End-to-End Development",
      description:
        "From initial requirements and system architecture through backend API development, mobile cross-platform bridges, and certified store releases, I take complete engineering ownership.",
    },
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
    "86 Agency",
    "Konstant Infosolutions",
    "Dotsquares Technologies",
    "Dev Technosys",
    "Arka Softwares",
  ],

  marqueeTech: [
    "Node.js",
    "Express.js",
    "React.js",
    "React Native",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "MySQL",
    "Three.js",
    "LLM APIs & RAG",
    "Firebase",
    "Agora Voice SDK",
    "Twilio",
    "Redux Toolkit",
    "Tailwind CSS",
    "GSAP",
    "AWS S3 & CloudFront",
    "Jest & Testing",
    "Fastlane & CI/CD",
  ],

  beforeAfterCaseStudy: {
    title: "Production Architecture Transformation",
    subtitle: "Real-world engineering impact: Monolithic legacy pattern vs Sumit's engineered full stack architecture",
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
      verdict: "Up to 35% performance improvement, zero frame drops, reliable multi-platform delivery.",
    },
  },

  processPhases: [
    {
      number: "01",
      phase: "Architectural Discovery & RFCs",
      summary:
        "Deconstructing product requirements into technical specifications, RESTful API contracts, database schemas, and state machine diagrams before writing production code.",
      artifacts: ["Technical RFC Documents", "RESTful API Schemas", "State & Data Contracts"],
    },
    {
      number: "02",
      phase: "Design Token & Component Foundation",
      summary:
        "Constructing atomic, accessible component primitives and shared design tokens bridging web and mobile, ensuring pixel-perfect fidelity with high maintainability.",
      artifacts: ["Tokenized Component Library", "Strict TypeScript Type Definitions", "Accessibility (a11y) Verification"],
    },
    {
      number: "03",
      phase: "Full Stack Engine & Integration",
      summary:
        "Developing scalable Node.js backend services, real-time communications (Twilio, Agora, Firebase), and cross-platform native module bridges.",
      artifacts: ["Node.js API Microservices", "Real-Time Agora / Twilio Hooks", "Native Module Bridges"],
    },
    {
      number: "04",
      phase: "Hardening, Profiling & App Store Launch",
      summary:
        "Executing flamegraph profiling, memory leak elimination, multi-device physical testing, and orchestrating certified Apple App Store and Google Play launches.",
      artifacts: ["Sub-Second Core Web Vitals", "Automated Fastlane Pipelines", "Certified Store Submissions"],
    },
  ],

  skillGroups: [
    {
      name: "Backend Engineering",
      skills: [
        skill("Node.js", "node", "Scalable asynchronous backends and microservices.", "Backend Engineering"),
        skill("Express.js", "api", "High-throughput RESTful API design and middleware.", "Backend Engineering"),
        skill("RESTful API Design", "api", "Idempotent endpoints, pagination, and OpenAPI contracts.", "Backend Engineering"),
        skill("MongoDB", "cloud", "Document databases, schema design, and aggregation pipelines.", "Backend Engineering"),
        skill("MySQL", "cloud", "Relational database schema modeling, indexing, and transactions.", "Backend Engineering"),
        skill("Authentication & RBAC", "security", "JWT, session management, and role-based access control.", "Backend Engineering"),
      ],
    },
    {
      name: "Frontend & Full Stack",
      skills: [
        skill("React.js", "react", "Concurrent React, custom hooks, and scalable component architecture.", "Frontend Engineering"),
        skill("Next.js", "next", "App Router, SSR, SSG, and server actions.", "Frontend Engineering"),
        skill("TypeScript", "typescript", "Strictly-typed scalable architectures with zero-runtime bugs.", "Frontend Engineering"),
        skill("JavaScript (ES6+)", "javascript", "Deep language fundamentals, event loop, and memory management.", "Frontend Engineering"),
        skill("Redux & RTK", "redux", "Predictable immutable global state management with RTK Query.", "Frontend Engineering"),
        skill("Three.js", "architecture", "Interactive 3D WebGL visualizations and model customizers.", "Frontend Engineering"),
      ],
    },
    {
      name: "Mobile & Native",
      skills: [
        skill("React Native", "react", "Cross-platform mobile applications for iOS and Android.", "Mobile Engineering"),
        skill("iOS Platform Delivery", "apple", "Xcode builds, provisioning profiles, and App Store releases.", "Mobile Engineering"),
        skill("Android Platform Delivery", "android", "Gradle builds, APK/AAB optimization, and Google Play Console.", "Mobile Engineering"),
        skill("Native Modules", "mobile", "Bridging native Swift/Kotlin capabilities into React Native.", "Mobile Engineering"),
      ],
    },
    {
      name: "AI & GenAI Development",
      skills: [
        skill("LLM API Integration", "ai", "OpenAI, Claude, and Gemini API integration with Node.js.", "AI & GenAI Development"),
        skill("Prompt Engineering", "ai", "Few-shot templates, system prompts, and context management.", "AI & GenAI Development"),
        skill("RAG Architecture", "ai", "Embeddings synthesis and semantic vector similarity search.", "AI & GenAI Development"),
        skill("AI Chat Interfaces", "ai", "Real-time streaming conversational user experiences.", "AI & GenAI Development"),
      ],
    },
    {
      name: "Cloud, DevOps & Integrations",
      skills: [
        skill("AWS (S3, CloudFront)", "cloud", "Edge CDN distribution and secure object storage.", "Cloud & DevOps"),
        skill("CI/CD & Jenkins", "delivery", "Automated deployment pipelines and test runners.", "Cloud & DevOps"),
        skill("Twilio & Agora", "api", "Real-time audio calling and telecommunication APIs.", "Third-Party Integrations"),
        skill("Firebase & Payments", "firebase", "Real-time databases, push notifications, and payment gateways.", "Third-Party Integrations"),
      ],
    },
  ],

  education: {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Rajasthan University",
    location: "Jaipur, India",
    year: "2012 – 2016",
  },
} as const;

export const socialProfiles = [
  { platform: "linkedin", label: "LinkedIn — Sumit Pramanik", url: portfolio.linkedinUrl },
  { platform: "github", label: "GitHub — Sumit Pramanik", url: portfolio.githubUrl },
] as const;

export type SocialPlatform = (typeof socialProfiles)[number]["platform"];

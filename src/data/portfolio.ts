export type PortfolioProject = {
  name: string;
  description: string;
  technologies: string[];
  outcomes: string[];
  image?: string;
  liveUrl?: string;
  storeUrl?: string;
  repoUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
};

type Skill = { name: string; description: string; icon: string };

const skill = (name: string, icon: string, description: string): Skill => ({ name, icon, description });

export const portfolio = {
  name: "Sumit Pramanik",
  title: "Senior Frontend Engineer | React.js & React Native",
  secondaryTitle: "React.js • React Native • Next.js • TypeScript",
  experienceLabel: "8+ years",
  summary:
    "I’m a Senior Frontend Engineer with 8+ years of IT experience, specializing in React.js and React Native. I build scalable web and mobile applications while working across frontend architecture, solution design, performance optimization, reusable component systems, API integrations, and production delivery. My work extends beyond implementation: I contribute to technical decisions, establish reusable patterns, conduct code reviews, mentor developers, and collaborate with stakeholders to turn requirements into maintainable solutions. React Native is a major area of my frontend engineering experience, with 6+ years on cross-platform applications, alongside React.js, Next.js, JavaScript, and TypeScript.",
  valueStatement:
    "Building scalable web and mobile experiences while leading frontend architecture, technical decisions, and engineering delivery.",
  metaDescription:
    "Sumit Pramanik is a Senior Frontend Engineer with 8+ years of experience building scalable web and mobile applications using React.js, React Native, Next.js, JavaScript, and TypeScript.",
  email: "sumit.pramanick@hotmail.com",
  phone: "+91-9587130971",
  linkedinUrl: "https://www.linkedin.com/in/sumitaasur",
  aboutFacts: [
    { mark: "Build", label: "web & cross-platform\nmobile engineering" },
    { mark: "Design", label: "from solution design\nto production delivery" },
    { mark: "Partner", label: "client collaboration across\nmultiple regions" },
  ],
  expertise: [
    { title: "Frontend Engineering", description: "React.js, React Native, Next.js, TypeScript, and scalable product development." },
    { title: "Frontend Architecture", description: "Reusable component systems, application structure, state patterns, and integrations." },
    { title: "Technical Leadership", description: "Technical decisions, code reviews, engineering standards, mentoring, and team collaboration." },
    { title: "Performance & Quality", description: "Performance optimization, production debugging, testing, and maintainable releases." },
    { title: "Product Delivery", description: "Working with stakeholders to turn requirements into practical, production-ready solutions." },
  ],
  engineeringImpacts: ["Scalable Frontend Systems", "Reusable Component Architecture", "Cross-Platform Development", "Performance Optimization", "Technical Decision-Making", "Production Delivery"],
  impactStats: [
    { value: "8+", label: "Years of IT Experience" },
    { value: "6+", label: "Years React.js & React Native" },
    { value: "17+", label: "Production Applications" },
    { value: "35%", label: "Frontend Performance Improvement" },
    { value: "30%", label: "Development Turnaround Improvement" },
  ],
  education: { degree: "Bachelor of Computer Applications (B.C.A.)", institution: "Rajasthan University", location: "Jaipur", year: "2012 – 2016" },
  skillGroups: [
    { name: "Frontend", skills: [
      skill("React.js", "react", "Scalable, reusable web interfaces."), skill("React Native", "react", "Cross-platform frontend development for mobile."), skill("Next.js", "next", "React framework work for web applications."), skill("TypeScript", "typescript", "Type-safe web and mobile application development."), skill("JavaScript", "javascript", "Modern JavaScript (ES6+) application development."), skill("Responsive Design", "responsive", "Interfaces that work across screen sizes."), skill("Reusable Component Architecture", "architecture", "Shared UI patterns that improve maintainability."),
    ] },
    { name: "Architecture", skills: [
      skill("Frontend Architecture", "architecture", "Practical frontend systems and application architecture."), skill("Solution Design", "architecture", "Translating product requirements into technical solutions."), skill("Technical Decision-Making", "architecture", "Clear technical direction for delivery."),
    ] },
    { name: "Technical Leadership", skills: [
      skill("Code Reviews", "testing", "Improving code quality before release."), skill("Mentoring", "leadership", "Supporting junior and mid-level developers."), skill("Stakeholder Collaboration", "leadership", "Turning requirements into delivery plans."), skill("Agile/Scrum", "leadership", "Collaborative iterative product delivery."),
    ] },
    { name: "Mobile", skills: [
      skill("React Native", "react", "Cross-platform mobile application development."), skill("Android", "android", "Android platform delivery and release support."), skill("iOS", "apple", "iOS platform delivery and release support."), skill("Cross-Platform Architecture", "architecture", "Maintainable shared mobile foundations."), skill("Mobile Solution Design", "architecture", "Architecture and solution design for mobile products."), skill("Native Module Integration", "mobile", "Native capabilities integrated into React Native apps."), skill("Third-Party SDK Integration", "api", "Reliable integrations for production features."), skill("Offline-First Design", "mobile", "Resilient mobile experiences for variable connectivity."),
    ] },
    { name: "State Management", skills: [
      skill("Redux", "redux", "Predictable application state management."), skill("Redux Toolkit", "redux", "Streamlined Redux application patterns."), skill("Context API", "react", "Shared state for React applications."),
    ] },
    { name: "APIs & Services", skills: [
      skill("REST APIs", "api", "Production API integration and delivery."), skill("Axios", "api", "HTTP client integration for web and mobile."), skill("Firebase Authentication", "firebase", "Authentication flows with Firebase."), skill("Firebase Realtime Data", "firebase", "Real-time application data."), skill("Firebase Push Notifications", "firebase", "Mobile notification integrations."), skill("Agora", "api", "Real-time calling SDK integration."), skill("Payment Gateways", "security", "Payment flows for web and mobile products."),
    ] },
    { name: "Performance", skills: [
      skill("Lazy Loading", "performance", "Faster initial loading for production applications."), skill("Code Splitting", "performance", "Smaller, more efficient application bundles."), skill("Memoization", "performance", "Reduced unnecessary rendering work."), skill("React DevTools Profiling", "performance", "Data-informed frontend performance analysis."), skill("Production Troubleshooting", "testing", "Diagnosing and resolving production issues."),
    ] },
    { name: "Engineering", skills: [
      skill("Xcode", "xcode", "iOS build and release workflows."), skill("Android Studio", "android", "Android build and release workflows."), skill("Jenkins", "jenkins", "CI/CD automation support."), skill("CI/CD Pipelines", "delivery", "Repeatable production delivery pipelines."), skill("Git", "git", "Version control and collaborative delivery."), skill("App Store Release Management", "apple", "End-to-end Apple App Store releases."), skill("Google Play Release Management", "android", "End-to-end Google Play releases."), skill("Authentication Flows", "security", "Secure account-access journeys."), skill("Secure Payment Integration", "security", "Careful payment gateway implementation."), skill("Secure Coding Practices", "security", "Security-conscious application development."),
    ] },
    { name: "Cloud", skills: [
      skill("AWS", "cloud", "Cloud services for application delivery."), skill("CloudFront", "cloud", "Content delivery configuration and support."), skill("S3", "cloud", "Object storage for application assets."), skill("CloudWatch", "cloud", "Cloud monitoring and production visibility."),
    ] },
    { name: "Testing & Quality", skills: [
      skill("Jest", "testing", "JavaScript application testing."), skill("Functional Testing", "testing", "Feature behavior validation."), skill("Regression Testing", "testing", "Protecting established functionality."), skill("UAT Testing", "testing", "Release validation with stakeholders."),
    ] },
    { name: "AI-Assisted Development", skills: [
      skill("Claude", "ai", "AI-assisted development workflows."), skill("GitHub Copilot", "ai", "AI-assisted development workflows."), skill("Cursor", "ai", "AI-assisted development workflows."), skill("ChatGPT", "ai", "AI-assisted development workflows."), skill("Codex", "ai", "AI-assisted development workflows."),
    ] },
  ],
  experience: [
    { role: "Senior Software Engineer", company: "Konstant Infosolutions", location: "Jaipur, Rajasthan", dates: "May 2025 – Jul 2026", highlights: ["Owned frontend architecture, solution design, and delivery of scalable React Native and React applications for international clients.", "Established reusable patterns to maintain performance and consistency across web and mobile codebases.", "Led REST API integrations for production releases and improved code review and testing practices.", "Served as the primary technical point of contact, translating client requirements into production-ready features."] },
    { role: "React / React Native Developer — Freelance", company: "Freelance", location: "Remote", dates: "Oct 2024 – May 2025", highlights: ["Delivered production-ready web and cross-platform React Native applications for international clients.", "Owned the complete lifecycle from requirements gathering through App Store and Google Play deployment.", "Acted as the primary technical decision-maker for architecture, tooling, and delivery timelines."] },
    { role: "React.js / React Native Programmer", company: "Dotsquares Technologies", location: "Jaipur, Rajasthan", dates: "May 2023 – Oct 2024", highlights: ["Led React Native application development and created reusable components for Android and iOS interfaces.", "Integrated Firebase authentication, real-time data, push notifications, and third-party services.", "Improved performance with lazy loading, code splitting, and memoization, including on lower-end devices."] },
    { role: "React Native Developer", company: "Arka Softwares Pvt Ltd", location: "Jaipur, Rajasthan", dates: "Feb 2022 – Mar 2023", highlights: ["Built cross-platform mobile features in collaboration with UX/UI designers while maintaining design fidelity.", "Integrated third-party APIs, SDKs, Firebase, and Axios, improving data-management and API workflows."] },
    { role: "React.js / React Native Developer", company: "Dev Technosys Pvt Ltd", location: "Jaipur, Rajasthan", dates: "Nov 2019 – Feb 2022", highlights: ["Delivered responsive React.js web and React Native applications for global clients.", "Provided production support, resolved client-reported issues, and partnered with backend developers on REST APIs.", "Incorporated client feedback while maintaining reliable data flows."] },
    { role: "Quality Analyst", company: "Bill Gosling Outsourcing (formerly MattsenKumar Pvt. Ltd.)", location: "Jaipur, Rajasthan", dates: "May 2018 – Sep 2019", highlights: ["Created and executed test cases, scenarios, and test data.", "Performed functional, regression, smoke, sanity, and UAT testing while identifying defects and verifying requirements."] },
  ],
  projects: [
    { name: "Metalete", description: "Pre-launch 3D avatar customization application for a US sports organization. Integrated Three.js within React Native to render interactive real-time 3D athlete avatars and built custom avatar and gear customization flows.", technologies: ["React Native", "Three.js"], outcomes: ["Built interactive real-time 3D avatar and gear customization flows."] },
    { name: "NASM EDGE", description: "Fitness management platform for personal trainers. Built trainer and client-facing features across web and iOS/Android from a shared codebase, covering workout programming, client management, and progress tracking.", technologies: ["React.js", "React Native"], outcomes: ["Delivered trainer and client-facing web and mobile experiences."], liveUrl: "https://edge.nasm.org", androidUrl: "https://play.google.com/store/apps/details?id=com.nasm.edge", iosUrl: "https://apps.apple.com/us/app/nasm-edge-personal-trainers" },
    { name: "Medara Health", description: "Pre-launch healthcare platform spanning four surfaces: patient mobile app, patient web app, doctor portal, and lab portal. Developed appointment, consultation, and diagnostic-report workflows connecting patients, doctors, and labs.", technologies: ["React Native", "React.js", "Next.js"], outcomes: ["Built connected appointment, consultation, and diagnostic-report workflows."] },
    { name: "Bonify", description: "German fintech platform providing free SCHUFA credit scores. Built web and mobile experiences sharing logic across platforms, delivering personalized financial insights and credit-optimization recommendations.", technologies: ["React Native", "React.js", "Next.js"], outcomes: ["Delivered web and mobile experiences with shared cross-platform logic."], liveUrl: "https://www.bonify.de", androidUrl: "https://play.google.com/store/apps/details?id=de.bonify.app", iosUrl: "https://apps.apple.com/de/app/bonify/id1122536146" },
    { name: "Glimpse It", description: "Australian mobile application for discovering and purchasing low-tox household products. Built the application end-to-end across product discovery, browsing, and purchase flows.", technologies: ["React Native"], outcomes: ["Built product discovery, browsing, and purchase flows."], androidUrl: "https://play.google.com/store/apps/details?id=com.glimpse.it", iosUrl: "https://apps.apple.com/au/app/glimpse-it/id6476137712" },
    { name: "Clinical Trial Link", description: "Platform for managing clinical trial participation. Built patient registration flows in React Native and a Next.js portal for hospitals and clinics, simplifying recruitment and coordination.", technologies: ["React Native", "Next.js"], outcomes: ["Supported patient registration, recruitment, and clinic coordination."], liveUrl: "http://clinicaltriallink.org" },
    { name: "Luqman", description: "Arabic education application with real-time calling. Integrated the Agora calling SDK for reliable voice connectivity, used Firebase for backend data, and built a post-call rating system.", technologies: ["React Native", "Firebase", "Agora"], outcomes: ["Delivered real-time calling and post-call rating features."], iosUrl: "https://apps.apple.com/in/app/luqman/id1594846756" },
    { name: "Blue Sky Peptides", description: "US pharmacy e-commerce platform. Implemented Redux-based cart and checkout functionality and integrated payment gateways.", technologies: ["React.js", "Next.js", "Redux"], outcomes: ["Implemented Redux cart, checkout, and payment gateway functionality."], liveUrl: "https://blueskypeptide.com/" },
    { name: "MetaMerch", description: "UK 3D product customization platform. Integrated Three.js for real-time 3D rendering and built interactive controls for personalizing merchandise before purchase.", technologies: ["React.js", "Next.js", "Three.js"], outcomes: ["Built real-time 3D rendering and merchandise personalization controls."], liveUrl: "https://meta-merch.io/" },
    { name: "Dehurdle", description: "Meditation app with mood-based music and guided meditation recommendations.", technologies: ["React Native"], outcomes: ["Provided mood-based music and guided meditation recommendations."], androidUrl: "https://play.google.com/store/apps/details?id=com.mobileapp.dehurdle&hl=en_IN", iosUrl: "https://apps.apple.com/pl/app/dehurdle/id6450671698" },
    { name: "Coffee Hub", description: "UAE coffee and bakery ordering app covering menu, cart, and order placement.", technologies: ["React Native"], outcomes: ["Built menu, cart, and ordering flows."], iosUrl: "https://apps.apple.com/in/app/coffeehub-%D9%83%D9%88%D9%81%D9%8A%D9%87%D8%A8/id1611114898" },
    { name: "CarpetRight UK", description: "Store locator and directory management platform.", technologies: ["React.js", "Yext"], outcomes: ["Worked on store locator and directory management features."], liveUrl: "https://www.carpetright.co.uk/" },
    { name: "86 Agency", description: "Marketing website with interactive Three.js visuals.", technologies: ["React.js", "Next.js", "Three.js"], outcomes: ["Delivered interactive Three.js marketing website visuals."], liveUrl: "https://weare86.com/" },
    { name: "StudyGoGo", description: "Education platform for quizzes, homework, and assignments.", technologies: ["React.js", "Next.js"], outcomes: ["Built education features for quizzes, homework, and assignments."] },
    { name: "NAS Freight Solutions Ltd.", description: "Kenyan logistics platform for posting, assigning, and tracking orders.", technologies: ["React.js"], outcomes: ["Supported order posting, assignment, and tracking workflows."] },
    { name: "Ozeki Sake", description: "Product comparison website for a Japanese-American brewery.", technologies: ["React.js"], outcomes: ["Enabled product comparison for brewery customers."], liveUrl: "https://www.ozekisake.com/" },
  ] satisfies PortfolioProject[],
  achievements: [
    "Launched and maintained applications on the Apple App Store and Google Play, and mentored junior and mid-level developers.",
    "Worked with international clients across the US, Europe, UAE, Australia, and India.",
  ],
} as const;

export const socialProfiles = [
  { platform: "linkedin", label: "LinkedIn — Sumit Pramanik", url: portfolio.linkedinUrl },
  { platform: "github", label: "GitHub — Sumit Pramanik", url: "https://github.com/sumitaasur" },
  { platform: "instagram", label: "Instagram — Sumit Pramanik", url: "https://www.instagram.com/sumitaasur/" },
  { platform: "x", label: "X — Sumit Pramanik", url: "https://x.com/sumitaasur" },
  { platform: "facebook", label: "Facebook — Sumit Pramanik", url: "https://www.facebook.com/sumitaasur" },
] as const;
export type SocialPlatform = (typeof socialProfiles)[number]["platform"];

const featuredProjectNames = ["NASM EDGE", "Medara Health", "Bonify", "Blue Sky Peptides", "MetaMerch", "Clinical Trial Link", "Metalete", "86 Agency", "Glimpse It"];
export const featuredProjects = featuredProjectNames.map((name) => portfolio.projects.find((project) => project.name === name)!);
export const moreProjects = portfolio.projects.filter((project) => !featuredProjectNames.includes(project.name));

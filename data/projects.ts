export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  challenges: string;
  image?: string;
  tech: string[];
  link: string;
  github?: string;
  liveDemo?: string;
  isContributed?: boolean;
  role?: string;
}

export const projects: Project[] = [
  {
    id: "kapruka-ai-agent",
    title: "Kapruka Conversational AI Agent",
    description:
      "Production ready conversational e-commerce agent built for the Kapruka Agent Challenge 2026.",
    longDescription:
      "A conversational shopping agent that guides users from discovery to live payment gateway checkout entirely via chat. Integrated directly with Kapruka's Model Context Protocol (MCP) infrastructure, the system features a generative UI with visually rich animations, real time stock verification, and dynamic voice interaction.",
    features: [
      "Native multilingual support processing Sinhala, Singlish, English, and Tanglish.",
      "Lightweight intent dispatcher to eliminate hallucinations before querying the LLM.",
      "Real time delivery date and inventory validation against Kapruka's MCP endpoints.",
      "Stateless cart memory persisting context via localStorage without costly session DBs.",
      "Integrated browser compatible voice input (STT) and natural voice output (TTS).",
    ],
    challenges:
      "The main challenge was handling mixed local languages (like Singlish) and out-of-stock items during a chat. I solved this by building a simple intent filter before calling the AI, and checking product availability directly with Kapruka's MCP.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemma 4",
      "MCP",
      "DigitalOcean",
    ],
    link: "/projects/kapruka-ai-agent",
    github: "https://github.com/mihiranga-dev/kapruka-ai-workspace",
  },

  {
    id: "getquicksubs",
    title: "GetQuickSubs.app",
    description:
      "Cloud native, context aware full-stack SaaS platform for fast subtitle translation.",
    longDescription:
      "A production SaaS application that translates subtitle files while preserving mathematically accurate timestamps. It features a memory first backend pipeline in FastAPI and integrates Google Translation and Gemini AI to maintain natural scene context across 80+ languages.",
    features: [
      "Custom timestamp parsing engine ensuring zero video audio desync across translated files.",
      "In memory processing architecture operating without persistent database storage for user privacy and speed.",
      "Asynchronous background workers handling heavy translation tasks without browser timeouts.",
      "Dual translation engine: Fast API translation with optional Gemini AI fallback for complex context.",
      "Full cloud native deployment with Dockerized backend and custom DNS/SSL configuration.",
    ],
    challenges:
      "Preventing timestamp drifting during translation and avoiding HTTP request timeouts on large 60+ minute subtitle files. I resolved this by designing a custom regex timestamp parser and implementing asynchronous task workers for non blocking file processing.",
    tech: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "Docker",
      "Tailwind CSS",
      "Gemini AI",
      "Cloudflare",
    ],
    link: "/projects/getquicksubs",
    liveDemo: "https://www.getquicksubs.app",
  },

  {
    id: "ems",
    title: "Employee Management System",
    description:
      "Full-stack enterprise solution for managing large-scale workforce data with high-performance query capabilities.",
    longDescription:
      "A comprehensive management suite designed for HR departments to track employee lifecycles, payroll integration, and department hierarchies. Built with a focus on ACID compliance and performant relational queries.",
    features: [
      "Role-based Access Control (RBAC) for different user tiers.",
      "Optimized Oracle SQL queries for fast report generation.",
      "Interactive dashboard for department-wise analytics.",
      "Automated PDF generation for employee contracts.",
    ],
    challenges:
      "The primary challenge was managing complex relational data between departments and employees without sacrificing speed. I solved this by implementing efficient indexing strategies in Oracle and using DTOs in Spring Boot to minimize data transfer.",
    tech: ["React", "Spring Boot", "Oracle DB", "Java"],
    link: "/projects/ems",
    github: "https://github.com/mihiranga-dev/Apex-EMS",
  },

  {
    id: "podpal",
    title: "PodPal",
    description:
      "AI enhanced autonomous gardening system with a 3 layer architecture.",
    longDescription:
      "An autonomous gardening system developed with a dual brain architecture combining cloud based AI strategy with real time offline hardware instincts. Features a companion Flutter app and hardware level power isolation.",
    features: [
      "Dual brain hardware pipeline linking Arduino Due and ESP8266 via high stability Serial Bridge.",
      "Power isolation eliminating motor noise and servo jitter using LM2596 buck converters.",
      "Cross platform companion application built in Flutter with the Repository Pattern.",
    ],
    challenges:
      "Resolving severe servo motor jitter caused by electrical noise across shared rails. I solved this by implementing physical power rail isolation and voltage regulation via buck converters.",
    tech: ["Arduino Due", "ESP8266", "Flutter", "C++", "IoT"],
    link: "/projects/podpal",
    github:
      "https://github.com/mihiranga-dev/podpal-autonomous-gardening-system",
    isContributed: true,
    role: "Hardware & Power Systems Contributor",
  },

  {
    id: "subflick",
    title: "SubFlick AI",
    description:
      "SaaS platform that automates the process of creating and translating subtitles for video content.",
    longDescription:
      "A cloud-native SaaS platform designed to automate subtitle generation and translation without requiring heavy local hardware. Built on a serverless architecture, it leverages the Groq Cloud API (Whisper Large v3) for near-instant transcription and Google Gemini 1.5 Flash for context-aware translations.",
    features: [
      "Powered by Groq's LPU inference engine for speech-to-text (approx. 30x faster than real-time).",
      "Context-aware translation into 60+ languages (Sinhala, French, Spanish, etc.) via Google Gemini.",
      "Auto-generation of valid .SRT files with precise timestamp alignment.",
      "Bandwidth-optimized architecture with client/server-side audio extraction.",
      "Zero-GPU requirement; runs entirely on free-tier cloud infrastructure.",
    ],
    challenges:
      "The primary hurdle was migrating from local inference to a serverless cloud architecture, which exposed strict API payload limitations. I initially faced errors when injecting raw transcript strings directly into the Gemini API due to token constraints. I resolved this by re-architecting the pipeline to handle transcripts as file-based inputs (.SRT) rather than raw text. This not only bypassed the character limitations but also ensured that timestamp formatting remained intact during the translation process.",
    image: "/projects/SubFlick_AI_dashboard.png",
    tech: ["Python", "FastAPI", "Next.js"],
    link: "projects/subflick",
    github: "https://github.com/mihiranga-dev/subflick-ai",
    liveDemo: "https://subflick-ai.netlify.app",
  },

  {
    id: "sms",
    title: "Student Management System",
    description:
      "Desktop application built with Java Swing to streamline the administration of student records, courses, fees, and attendance.",
    longDescription:
      "This desktop application streamlines the entire administrative lifecycle of an educational institute. Built with Java Swing and MySQL, it replaces manual record-keeping with a centralized digital system. The application features a user-friendly dashboard for managing student profiles, course modules, and fee structures, while providing administrators with real-time data on attendance percentages and payment statuses.",
    features: [
      "Interactive Dashboard: Visualizes system statistics for quick administrative decision-making.",
      "End-to-End Student Management: Handles registration, profile updates, and personal data archival.",
      "Dynamic Fee Tracking: Monitors payment status (Paid/Unpaid) and manages enrollment fees.",
      "Attendance Monitoring: Calculates and records attendance percentages per module.",
      "Automated Reporting: Generates summary reports for courses and student performance.",
    ],
    challenges:
      "The main complexity lay in designing a normalized relational database schema to handle the many-to-many relationships between students, courses, and their respective modules. Early iterations suffered from data redundancy, particularly when tracking fee payments across different course durations. I resolved this by restructuring the MySQL database to Third Normal Form (3NF) and writing optimized JOIN queries to accurately calculate 'Paid/Unpaid' statuses dynamically without impacting application performance.",
    image: "/projects/sms_dashboard.png",
    tech: ["Java", "MySQL"],
    link: "projects/sms",
    github: "https://github.com/mihiranga-dev/student-management-system",
  },

  {
    id: "rakshanet",
    title: "RakshaNet",
    description:
      "IoT based disaster management and early warning network with tamper proof data logging.",
    longDescription:
      "An IoT disaster management and early warning platform engineered for rapid emergency response. The system collects telemetry from decentralized sensor clusters and guarantees data immutability through a dedicated blockchain layer.",
    features: [
      "Decentralized telemetry collection via distributed ESP32 sensor nodes.",
      "Tamper proof environmental log auditing utilizing custom blockchain integration.",
      "Hardware power failover and resilience under low connectivity disaster scenarios.",
      "Emergency alert dispatch triggered when sensor thresholds breach safety limits.",
    ],
    challenges:
      "Ensuring low latency sensor packet transmission over constrained hardware while preventing data tampering. I addressed this by isolating the blockchain ledger integration and fine-tuning hardware serial communication on the node level.",
    tech: ["ESP32", "Blockchain", "C++", "IoT"],
    link: "/projects/rakshanet",
    github: "https://github.com/darkscript-dev/RakshaNet-IoT",
    isContributed: true,
    role: "Blockchain & Hardware Contributor",
  },

  {
    id: "tms",
    title: "Task Management System",
    description:
      "Full-stack application designed to help users organize their daily tasks securely.",
    longDescription:
      "Designed to demonstrate deep core web fundamentals, this full-stack application drop modern frontend frameworks in favor of raw performance and control. The frontend is a Single Page Application (SPA) built entirely with Vanilla JavaScript, HTML5, and CSS3, interacting with a robust Spring Boot 3 backend. The system implements stateless authentication via JWT and is deployed in a decoupled environment (Netlify for frontend, Dockerized Hugging Face Space for backend).",
    features: [
      "Pure JavaScript SPA: Custom-built client-side router for seamless navigation without page reloads.",
      "Stateless Security: Spring Security backend implementing JWT (JSON Web Token) for secure, scalable authentication.",
      "RESTful Architecture: Fully documented API endpoints for CRUD operations on tasks.",
      "Containerized Deployment: Backend is wrapped in Docker and hosted on Hugging Face Spaces for consistent runtime.",
      "Responsive Design: Mobile-first UI built with custom CSS, ensuring functionality across all device sizes.",
    ],
    challenges:
      "The primary challenge was building a reactive Single Page Application without libraries like React or Vue. I had to manually manipulate the DOM to update task lists dynamically and write a custom utility to handle JWT token injection in headers for every 'fetch' request. Additionally, configuring CORS policies to allow secure, authenticated communication between the Netlify-hosted frontend and the Dockerized backend on a different domain required precise filter chain configuration in Spring Security.",
    image: "/projects/TaskMaster_dashboard.png",
    tech: ["Spring Boot", "HTML", "CSS", "JavaScript"],
    link: "projects/tms",
    github: "https://github.com/mihiranga-dev/taskflow-frontend",
    liveDemo: "https://task-master-lite.netlify.app",
  },
];

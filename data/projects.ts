export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    challenges: string;
    tech: string[];
    link: string;
    github?: string;
    liveDemo?: string;
}

export const projects: Project[] = [
    {
        id: "ems",
        title: "Employee Management System",
        description: "Full-stack enterprise solution for managing large-scale workforce data with high-performance query capabilities.",
        longDescription: "A comprehensive management suite designed for HR departments to track employee lifecycles, payroll integration, and department hierarchies. Built with a focus on ACID compliance and performant relational queries.",
        features: 
        [
            "Role-based Access Control (RBAC) for different user tiers.",
            "Optimized Oracle SQL queries for fast report generation.",
            "Interactive dashboard for department-wise analytics.",
            "Automated PDF generation for employee contracts."
        ],
        challenges: "The primary challenge was managing complex relational data between departments and employees without sacrificing speed. I solved this by implementing efficient indexing strategies in Oracle and using DTOs in Spring Boot to minimize data transfer.",
        tech: ["React", "Spring Boot", "Oracle DB", "Java"],
        link: "/projects/ems",
        github: "https://github.com/mihiranga-dev/Apex-EMS",
    },

    {
        id: "subflick",
        title: "SubFlick AI",
        description: "SaaS platform that automates the process of creating and translating subtitles for video content.",
        longDescription: "A cloud-native SaaS platform designed to automate subtitle generation and translation without requiring heavy local hardware. Built on a serverless architecture, it leverages the Groq Cloud API (Whisper Large v3) for near-instant transcription and Google Gemini 1.5 Flash for context-aware translations.",
        features: 
        [
            "Powered by Groq's LPU inference engine for speech-to-text (approx. 30x faster than real-time).",
            "Context-aware translation into 60+ languages (Sinhala, French, Spanish, etc.) via Google Gemini.",
            "Auto-generation of valid .SRT files with precise timestamp alignment.",
            "Bandwidth-optimized architecture with client/server-side audio extraction.",
            "Zero-GPU requirement; runs entirely on free-tier cloud infrastructure."
        ],
        challenges: "The primary hurdle was migrating from local inference to a serverless cloud architecture, which exposed strict API payload limitations. I initially faced errors when injecting raw transcript strings directly into the Gemini API due to token constraints. I resolved this by re-architecting the pipeline to handle transcripts as file-based inputs (.SRT) rather than raw text. This not only bypassed the character limitations but also ensured that timestamp formatting remained intact during the translation process.",
        tech: ["Python", "FastAPI", "Next.js"],
        link: "projects/subflick",
        github: "https://github.com/mihiranga-dev/subflick-ai",
        liveDemo: "https://subflick-ai.netlify.app",
    },

    {
        id: "sms",
        title: "Student Management System",
        description: "Desktop application built with Java Swing to streamline the administration of student records, courses, fees, and attendance.",
        longDescription: "This desktop application streamlines the entire administrative lifecycle of an educational institute. Built with Java Swing and MySQL, it replaces manual record-keeping with a centralized digital system. The application features a user-friendly dashboard for managing student profiles, course modules, and fee structures, while providing administrators with real-time data on attendance percentages and payment statuses.",
        features: 
        [
            "Interactive Dashboard: Visualizes system statistics for quick administrative decision-making.",
            "End-to-End Student Management: Handles registration, profile updates, and personal data archival.",
            "Dynamic Fee Tracking: Monitors payment status (Paid/Unpaid) and manages enrollment fees.",
            "Attendance Monitoring: Calculates and records attendance percentages per module.",
            "Automated Reporting: Generates summary reports for courses and student performance."
        ],
        challenges: "The main complexity lay in designing a normalized relational database schema to handle the many-to-many relationships between students, courses, and their respective modules. Early iterations suffered from data redundancy, particularly when tracking fee payments across different course durations. I resolved this by restructuring the MySQL database to Third Normal Form (3NF) and writing optimized JOIN queries to accurately calculate 'Paid/Unpaid' statuses dynamically without impacting application performance.",
        tech: ["Java", "MySQL"],
        link: "projects/sms",
        github: "https://github.com/mihiranga-dev/student-management-system",
    },
    
    {
        id: "tms",
        title: "Task Management System",
        description: "Full-stack application designed to help users organize their daily tasks securely.",
        longDescription: "Designed to demonstrate deep core web fundamentals, this full-stack application drop modern frontend frameworks in favor of raw performance and control. The frontend is a Single Page Application (SPA) built entirely with Vanilla JavaScript, HTML5, and CSS3, interacting with a robust Spring Boot 3 backend. The system implements stateless authentication via JWT and is deployed in a decoupled environment (Netlify for frontend, Dockerized Hugging Face Space for backend).",
        features: 
        [
            "Pure JavaScript SPA: Custom-built client-side router for seamless navigation without page reloads.",
            "Stateless Security: Spring Security backend implementing JWT (JSON Web Token) for secure, scalable authentication.",
            "RESTful Architecture: Fully documented API endpoints for CRUD operations on tasks.",
            "Containerized Deployment: Backend is wrapped in Docker and hosted on Hugging Face Spaces for consistent runtime.",
            "Responsive Design: Mobile-first UI built with custom CSS, ensuring functionality across all device sizes."
        ],
        challenges: "The primary challenge was building a reactive Single Page Application without libraries like React or Vue. I had to manually manipulate the DOM to update task lists dynamically and write a custom utility to handle JWT token injection in headers for every 'fetch' request. Additionally, configuring CORS policies to allow secure, authenticated communication between the Netlify-hosted frontend and the Dockerized backend on a different domain required precise filter chain configuration in Spring Security.",
        tech: ["Spring Boot", "HTML", "CSS", "JavaScript"],
        link: "projects/tms",
        github: "https://github.com/mihiranga-dev/taskflow-frontend",
        liveDemo: "https://task-master-lite.netlify.app",
    },
];
export interface JourneyItem {
    id: string;
    date: string;
    title: string;
    location: string;
    description: string[];
    tags: string[];
    category: "education" | "professional" | "content" | "independent";
}

export const journey: JourneyItem[] = [
    {
        id: "hnd",
        date: "2024 - Present",
        title: "Higher National Diploma in Software Engineering (Ongoing)",
        location: "NIBM - National Institute of Business Management",
        description: [
            "Advanced Enterprise App Development (Java EE) & Robotics architecture.",
            "Data Warehousing & Business Intelligence using IBM DB2.",
            "Developing high-performance alogorithms and complex data structures.",
            "Emerging technologies research and IT management practices."
        ],
        tags: ["Enterprise Java", "React", "DB2", "IOT", "PDSA", "DWBI"],
        category: "education",
    },

    {
        id: "diploma",
        date: "2023 - 2024",
        title: "Diploma in Software Engineering (Completed)",
        location: "NIBM - National Institute of Business Management",
        description: [
            "Graduated with a GPA of 3.8+",
            "Core focus on Object Oriented Programming (Java), GUI Development, and Networking.",
            "Built a Student System (Java/MySQL) as a flagship project.",
            "Mastered Database Management Systems and Modern Web development fundamentals.",
        ],
        tags: ["Java Swing", "MySQL", "Web Dev", "OOP", "Networking"],
        category: "education",
    },

    {
        id: "self-taught-mastery",
        date: "2021 — Present",
        title: "Self-Directed Software Engineering Mastery",
        location: "Independent Research & Development",
        description: [
            "Bridging the gap between academic theory and modern industrial standards through continuous, self-directed research.",
            "Foundations: Independent study of PC Hardware Architecture and System Internals to understand software-hardware interaction.",
            "Programming: Mastered Core Java and OOP principles through self-study prior to formal enrollment.",
            "Modern Stack: Deep-diving into the Next.js ecosystem, Tailwind CSS, and Cloudflare deployment—technologies beyond the standard academic syllabus.",
            "Enterprise Research: Currently exploring Microservices architecture and Spring Security to supplement HND-level enterprise studies."
        ],
        tags: ["Next.js", "System Architecture", "Self-Learning", "Enterprise Patterns"],
        category: "independent",
    },

    {
        id: "content",
        date: "2019 — Present",
        title: "Technical Content Creator",
        location: "YouTube / Community",
        description: [
        "Produced 20+ Sinhala-language technical videos simplifying complex engineering concepts.",
        "Researched hardware architecture and software systems for a growing audience.",
        "Built a technical community focused on modern technology trends."
        ],
        tags: ["Technical Writing", "Presentation", "Video Production", "Community"],
        category: "content",
    },

  {
        id: "freelance",
        date: "2021 — Present",
        title: "Freelance Project Management (Fiverr)",
        location: "Remote / International Clients",
        description: [
        "Managed and successfully delivered 100+ projects for international clients.",
        "Developed high-level professional communication and time-critical delivery skills.",
        "Handled client requirements, feedback loops, and project scoping independently."
        ],
        tags: ["Client Relations", "Time Management", "Project Delivery", "Global Scalability"],
        category: "professional",
    },
]
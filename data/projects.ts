export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
}

export const projects: Project[] = [
    {
        id: "ems",
        title: "Employee Management System",
        description: "Full-stack enterprise solution for managing large-scale workforce data with high-performance query capabilities.",
        tech: ["React", "Spring Boot", "Oracle DB", "Java"],
        link: "/projects/ems",
    },

    {
        id: "subflick",
        title: "SubFlick AI",
        description: "SaaS platform that automates the process of creating and translating subtitles for video content.",
        tech: ["Python", "FastAPI", "Next.js"],
        link: "projects/subflick",
    },

    {
        id: "sms",
        title: "Student Management System",
        description: "Desktop application built with Java Swing to streamline the administration of student records, courses, fees, and attendance.",
        tech: ["Java", "MySQL"],
        link: "projects/sms",
    },
    
    {
        id: "tms",
        title: "Task Management System",
        description: "Full-stack application designed to help users organize their daily tasks securely.",
        tech: ["Spring Boot", "HTML", "CSS", "JavaScript"],
        link: "projects/tms",
    },
];
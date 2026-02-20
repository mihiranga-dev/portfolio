export interface TechnicalChallenge {
  title: string;
  tasks: string[];
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  noteUrl?: string;
  challenge: TechnicalChallenge;
  isPublished: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: "html-mastery",
    title: "Modern HTML5 for Engineers",
    description:
      "A professional roadmap to mastering semantic structures, accessibility, and modern web standards.",
    thumbnail: "/academy/html-thum.jpg",
    lessons: [
      {
        id: "v1",
        title: "01. What is HTML? (Theory)",
        videoUrl: "https://youtu.be/URgcwQ9hjIg",
        isPublished: true,
        challenge: {
          title: "Architecture Analysis",
          tasks: [
            "Explain the analogy of HTML vs CSS vs JS in your own words.",
            "Visit a website and use 'View Source' to identify where the HTML ends and CSS begins.",
          ],
        },
      },
      {
        id: "v2",
        title: "02. Best Tools for 2026",
        videoUrl: "https://youtu.be/FzBYDCb7-WA",
        isPublished: true,
        challenge: {
          title: "Environment Setup",
          tasks: [
            "Install VS Code and Google Chrome.",
            "Verify your installation by launching VS Code from the terminal/command prompt. { Check version: code --version } | { Launch VS Code: code }",
          ],
        },
      },
      {
        id: "v3",
        title: "03. The Pro Environment",
        videoUrl: "https://youtu.be/IBS5YryHZJ0",
        isPublished: true,
        challenge: {
          title: "Efficiency Optimization",
          tasks: [
            "Install the 'Prettier' and 'Live Server' extensions.",
            "Configure 'Auto Save' to 'onFocusChange' in VS Code settings.",
          ],
        },
      },
      {
        id: "v4",
        title: "04. Your First HTML File",
        videoUrl: "https://youtu.be/YtX1nIscmZM",
        isPublished: true,
        challenge: {
          title: "The Hello World Build",
          tasks: [
            "Create a folder named 'HTML-Course' and initialize an index.html file.",
            "Launch the file using Live Server and confirm it updates in real-time.",
          ],
        },
      },
      {
        id: "v5",
        title: "05. The Boilerplate (Skeleton)",
        videoUrl: "",
        isPublished: false,
        challenge: { title: "Locked", tasks: [] },
      },
    ],
  },
];

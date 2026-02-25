export interface SubChallenge {
  title: string;
  description: string;
  tasks: string[];
  codeSnippet?: string;
  solution?: {
    explanation: string;
    fixedCode?: string;
  };
}

export interface TechnicalChallenge {
  episode: string;
  intro: string;
  challenges: SubChallenge[];
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
        title: "What is HTML? (Theory)",
        videoUrl: "https://youtu.be/URgcwQ9hjIg",
        isPublished: true,
        challenge: {
          episode: "01",
          intro:
            "Understand the high-level architecture of the web before writing code.",
          challenges: [
            {
              title: "Architecture Analysis",
              description:
                "Let's test your understanding of how the web works.",
              tasks: [
                "Explain the analogy of HTML vs CSS vs JS in your own words.",
                "Visit a website and use 'View Source' to identify where the HTML ends and CSS begins.",
              ],
            },
          ],
        },
      },
      {
        id: "v2",
        title: "Best Tools for 2026",
        videoUrl: "https://youtu.be/FzBYDCb7-WA",
        isPublished: true,
        challenge: {
          episode: "02",
          intro: "Prepare your professional development environment.",
          challenges: [
            {
              title: "Environment Setup",
              description:
                "Installing the core tools used by software engineers globally.",
              tasks: [
                "Install VS Code and Google Chrome.",
                "Verify your installation by launching VS Code from the terminal/command prompt. { Check version: code --version } | { Launch VS Code: code }",
              ],
            },
          ],
        },
      },
      {
        id: "v3",
        title: "The Pro Environment",
        videoUrl: "https://youtu.be/IBS5YryHZJ0",
        isPublished: true,
        challenge: {
          episode: "03",
          intro: "Optimize your workflow for speed and accuracy.",
          challenges: [
            {
              title: "Efficiency Optimization",
              description: "Configure your editor to work for you.",
              tasks: [
                "Install the 'Prettier' and 'Live Server' extensions.",
                "Configure 'Auto Save' to 'onFocusChange' in VS Code settings.",
              ],
            },
          ],
        },
      },
      {
        id: "v4",
        title: "Your First HTML File",
        videoUrl: "https://youtu.be/YtX1nIscmZM",
        isPublished: true,
        challenge: {
          episode: "04",
          intro: "Create your very first live web document.",
          challenges: [
            {
              title: "The Hello World Build",
              description:
                "Starting your project folder and launching the server.",
              tasks: [
                "Create a folder named 'HTML-Course' and initialize an index.html file.",
                "Launch the file using Live Server and confirm it updates in real-time.",
              ],
            },
          ],
        },
      },
      {
        id: "v5",
        title: "The Boilerplate (Skeleton)",
        videoUrl: "https://youtu.be/4JAvkZJNLlc",
        noteUrl: "/lessonNotes/html-notes/html-video-005-note.pdf",
        isPublished: true,
        challenge: {
          episode: "05",
          intro:
            "Put your new knowledge to the test! Complete these three challenges before moving on to the next video.",
          challenges: [
            {
              title: "Challenge 1: The Muscle Memory Test",
              description:
                "Professional developers use shortcuts, but they also know the code by heart.",
              tasks: [
                "Create a new file named manual.html.",
                "Type out the entire basic HTML boilerplate manually without using shortcuts.",
                "Inside the <body>, write an <h1> tag: 'I typed this from scratch!'",
              ],
            },
            {
              title: "Challenge 2: The Localized Webpage",
              description:
                "Learn how attributes and meta tags handle different languages.",
              tasks: [
                "Change the lang attribute from 'en' to 'si'.",
                "Change the <title> to 'මගේ වෙබ් අඩවිය'",
                "Inside the <body>, add an <h1> tag that says 'ආයුබෝවන්'.",
              ],
            },
            {
              title: "Challenge 3: The Debugger",
              description:
                "Spot the 3 major mistakes a junior developer made in the code below.",
              tasks: [
                "Identify the missing DOCTYPE declaration.",
                "Fix the nesting error (Body is inside Head).",
                "Add the missing Viewport meta tag for responsiveness.",
              ],
              codeSnippet: `<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>My Broken Website</title>\n    <body>\n        <h1>Welcome to my page!</h1>\n    </body>\n</head>\n</html>`,
              solution: {
                explanation:
                  "1. Missing <!DOCTYPE html>.\n2. <body> cannot be inside <head>.\n3. Missing viewport <meta>.",
                fixedCode: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Fixed Website</title>\n</head>\n<body>\n    <h1>Welcome to my page!</h1>\n</body>\n</html>`,
              },
            },
          ],
        },
      },
      {
        id: "v6",
        title: "Headings & Paragraphs",
        videoUrl: "https://youtu.be/tHE-QL_WMMI",
        noteUrl: "/lessonNotes/html-notes/html-video-006-note.pdf",
        isPublished: true,
        challenge: {
          episode: "06",
          intro:
            "Put your new knowledge to the test! Complete these three challenges before moving on to the next video.",
          challenges: [
            {
              title: "Challenge 1: The Article Structure",
              description:
                "Let's build a mini-article structure following professional standards.",
              tasks: [
                "Create a new file named article.html and generate the boilerplate.",
                "Add a main heading (<h1>): 'The Future of Web Development'.",
                "Add a sub-heading (<h2>): 'Why HTML is Still Important'.",
                "Add a paragraph (<p>) containing exactly 30 words of dummy text (Tip: type lorem30 and press Tab).",
              ],
            },
            {
              title: "Challenge 2: The SEO Fixer",
              description:
                "A junior developer broke the Golden Rule of SEO! Rewrite the code below so it is fully optimized for search engines.",
              tasks: [
                "Identify why having multiple <h1> tags is bad for SEO.",
                "Fix the hierarchy so only one <h1> remains.",
                "Ensure sub-topics use secondary heading levels.",
              ],
              codeSnippet: `<body>\n    <h1>My Tech Blog</h1>\n    <p>Welcome to my daily blog about coding.</p>\n    \n    <h1>Today's Topic: VS Code Shortcuts</h1>\n    <p>Shortcuts save a lot of time.</p>\n\n    <h1>Conclusion</h1>\n    <p>Always learn your keyboard shortcuts.</p>\n</body>`,
              solution: {
                explanation:
                  "The page should only have one <h1> (the main title of the document). All other main sub-sections should be <h2>, and their sub-sections <h3>.",
                fixedCode: `<body>\n    <h1>My Tech Blog</h1>\n    <p>Welcome to my daily blog about coding.</p>\n    \n    <h2>Today's Topic: VS Code Shortcuts</h2>\n    <p>Shortcuts save a lot of time.</p>\n\n    <h2>Conclusion</h2>\n    <p>Always learn your keyboard shortcuts.</p>\n</body>`,
              },
            },
            {
              title: "Challenge 3: Word Wrap Mastery",
              description:
                "Practice handling massive blocks of text within your IDE.",
              tasks: [
                "Inside your <body>, type lorem500 and press Tab to generate a massive block.",
                "Practice using Alt + Z (or Option + Z) to toggle 'Word Wrap' on and off.",
                "Confirm that you can read the text without horizontal scrolling.",
              ],
            },
          ],
        },
      },
      {
        id: "v7",
        title: "Text Formatting",
        videoUrl: "https://youtu.be/ZyQImeMB6_A",
        noteUrl: "/lessonNotes/html-notes/html-video-007-note.pdf",
        isPublished: true,
        challenge: {
          episode: "07",
          intro:
            "Put your new formatting skills to the test! Complete these three challenges before moving on.",
          challenges: [
            {
              title: "Challenge 1: The Formatted Sentence",
              description: "Practice using visual formatting tags correctly.",
              tasks: [
                "Write a paragraph: 'HTML is the standard markup language for documents designed to be displayed in a web browser.'",
                "Make 'HTML' bold (<b>).",
                "Make 'standard markup language' italic (<i>).",
                "Make 'web browser' underlined (<u>).",
              ],
            },
            {
              title: "Challenge 2: The SEO Fixer",
              description:
                "Semantic vs Visual formatting. Help a client optimize their keywords for Google.",
              tasks: [
                "Identify the difference between <b> and <strong>.",
                "Rewrite the marketing text using semantic tags.",
              ],
              codeSnippet: `<p>Buy our new <b>SuperFast Laptop 5000</b> today!\nIt is the <b>best gaming laptop</b>\nof the year.</p>`,
              solution: {
                explanation:
                  "Search engines prioritize <strong> over <b>. Use <strong> for important keywords.",
                fixedCode: `<p>Buy our new <strong>SuperFast Laptop 5000</strong> today!\nIt is the <strong>best gaming laptop</strong>\nof the year.</p>`,
              },
            },
            {
              title: "Challenge 3: The Poem Structure",
              description: "Mastering line breaks and horizontal dividers.",
              tasks: [
                "Write a 4-line poem inside a single <p> tag.",
                "Use <br> tags to force each line to drop down.",
                "Use an <hr> tag below the poem to create a visual break.",
              ],
            },
          ],
        },
      },
      {
        id: "v8",
        title: "Comments in HTML",
        videoUrl: "https://youtu.be/4YhpH0w3Z6k",
        noteUrl: "/lessonNotes/html-notes/html-video-008-note.pdf",
        isPublished: true,
        challenge: {
          episode: "08",
          intro:
            "Put your new developer habits to the test! Complete these three challenges before moving on.",
          challenges: [
            {
              title: "Challenge 1: The Documenter",
              description:
                "Practice the industry standard of documenting your code files.",
              tasks: [
                "Create about.html with a main <h1> and a goals <p>.",
                "Add a comment at the very top: 'Author: [Name] - Created on [Date]'.",
                "Verify that the comment is invisible in the browser but visible in 'View Source'.",
              ],
            },
            {
              title: "Challenge 2: The Organizer",
              description:
                "Using 'Visual Dividers' to make long code files readable.",
              tasks: [
                "Create a 'Skills Section' starting with an <h2>.",
                "Wrap the section in divider comments using equal signs (e.g., <!-- === Skills === -->).",
              ],
            },
            {
              title: "Challenge 3: The Debugger",
              description:
                "Use shortcuts to 'hide' broken code without deleting it.",
              tasks: [
                "Identify the line causing the error message.",
                "Use the Ctrl + / (or Cmd + /) shortcut to comment out the error.",
                "Confirm the error message is no longer visible to the user.",
              ],
              codeSnippet: `<body>\n    <h1>My Website</h1>\n    <p>ERROR: Database connection failed. Cannot load user profile.</p>\n    <p>Please contact support.</p>\n</body>`,
              solution: {
                explanation:
                  "Highlight the error paragraph and press the comment shortcut. This wraps the line in <!-- and -->.",
                fixedCode: `<body>\n    <h1>My Website</h1>\n    <!-- <p>ERROR: Database connection failed.</p> -->\n    <p>Please contact support.</p>\n</body>`,
              },
            },
          ],
        },
      },
    ],
  },

  // Java Course
  {
    id: "java-mastery",
    title: "Enterprise Java Mastery 2026",
    description:
      "A deep dive into the world's most robust language. From foundations to enterprise-grade architecture.",
    thumbnail: "/academy/java-thum.jpg",
    lessons: [
      {
        id: "java-v1",
        title: "01. Introduction & History of Java",
        videoUrl: "https://youtu.be/97n5s45eYnc",
        noteUrl: "/lessonNotes/java-notes/java-video-001-note.pdf",
        isPublished: true,
        challenge: {
          episode: "01",
          intro:
            "Test your foundational knowledge before moving on to the next video!",
          challenges: [
            {
              title: "Challenge 1: The Acronym Master",
              description: "Industry standards rely on core terminology.",
              tasks: [
                "Define exactly what the acronym 'WORA' stands for.",
                "Explain why this concept changed the software industry in the 90s.",
              ],
            },
            {
              title: "Challenge 2: The History Quiz",
              description:
                "Identify if the following statements are True or False:",
              tasks: [
                "Java was originally named 'Pine' after a tree outside the office.",
                "Java was created by James Gosling and the 'Green Team'.",
                "Today, Java is owned and maintained by Microsoft.",
              ],
            },
            {
              title: "Challenge 3: Spot the Bug (The Skeleton)",
              description:
                "A junior developer wrote their first Java program, but it won't compile. Find and fix the 2 major errors.",
              tasks: [
                "Check for case-sensitivity in keywords.",
                "Verify the method signature for the entry point.",
              ],
              codeSnippet: `Public class Main {\n    public void main(String[] args) {\n        System.out.println("I am learning Java!");\n    }\n}`,
              solution: {
                explanation:
                  "1. Java is case-sensitive: 'Public' must be lowercase 'public'.\n2. The main method must be 'static' so the JVM can run it without creating an instance.",
                fixedCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("I am learning Java!");\n    }\n}`,
              },
            },
          ],
        },
      },
    ],
  },
];

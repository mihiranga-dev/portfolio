import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foregorund)",
                dark: "#080f19",
                primary: "#7C3AED",
                secondary: "#00F0FF",    
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                mono: ["var(--font-jetbrains)"],
            },
        },
    },
    plugins: [],
};
export default config;
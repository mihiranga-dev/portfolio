import type { Metadata } from "next";
import {Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Software Engineer | Portfolio",
  description: "Full-Stack Developer specializing in Java, React and DB2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased bg-white dark:bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            <main className="max-w-7xl mx-auto px-6 py-10">
              {children}
            </main> 
        </ThemeProvider>
      </body>
    </html>
  );
}



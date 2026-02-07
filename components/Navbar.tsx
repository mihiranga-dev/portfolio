"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/"},
    { name: "Projects", href: "/projects"},
    { name: "Journey", href: "/journey"},
    { name: "Contact", href: "/contact"},
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    const handleNavClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    if (!mounted) return null;

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a 
                    href="/" 
                    className="font-outfit text-xl font-bold tracking-tight hover:text-primary transition-colors">
                    mihiranga<span className="text-primary">.dev</span>
                </a>

                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => {
                            setIsOpen(false);
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                            }}
                            className="text-sm font-medium hover:text-primary transition-colors font-sans"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-primary" />
                        )}
                    </button>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-primary" />}
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark absolute w-full left-0">
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={handleNavClick}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
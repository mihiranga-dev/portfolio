import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL('https://mihiranga.dev'), 

  title: {
    default: "Mihiranga Dissanayake | Full-Stack Software Engineer",
    template: "%s | Mihiranga Dissanayake"
  },
  description: "Official portfolio of Mihiranga Dissanayake. Specializing in Java, Spring Boot, and React enterprise solutions.",
  keywords: ["Mihiranga Dissanayake", "Software Engineer Sri Lanka", "Java Developer", "React Developer"],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Mihiranga Dissanayake | Portfolio",
    description: "Full-Stack Software Engineer specializing in Java and React.",
    url: "https://mihiranga.dev",
    siteName: "Mihiranga Dissanayake Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} ${outfit.variable} antialiased bg-background text-foreground transition-colors duration-300`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-10">
              <PageTransition>
                  {children}
              </PageTransition>
            </main>
            
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "Sweety | Full Stack Developer",
  description: "Sweety's personal portfolio showcasing projects, skills and development journey.",
  openGraph: {
    title: "Sweety Portfolio",
    description: "Full Stack Developer Portfolio",
    url: "https://your-vercel-url.vercel.app",
    siteName: "Sweety Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative overflow-x-hidden transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Animated Background Orbs */}
          <div className="fixed top-0 left-0 w-96 h-96 bg-purple-600/20 blur-[100px] animate-pulse -z-10"></div>
          <div className="fixed bottom-0 right-0 w-96 h-96 bg-pink-600/20 blur-[100px] animate-pulse -z-10 delay-1000"></div>
  
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

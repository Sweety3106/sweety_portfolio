import "./globals.css";

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
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <div className="fixed top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl animate-pulse -z-10"></div>
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-pink-600 opacity-20 blur-3xl animate-pulse -z-10"></div>

        {children}
      </body>
    </html>
  );
}

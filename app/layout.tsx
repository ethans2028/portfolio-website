import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Ethan Sue Portfolio",
  description: "Learn more about my experience in full-stack, cloud engineering, and project management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Admin Dashboard | Internship Applications",
  description: "Modern minimalist admin dashboard for managing internships",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">
        <div className="flex min-h-screen bg-[#fafafa]">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Header />
            <div className="p-8 max-w-7xl mx-auto w-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

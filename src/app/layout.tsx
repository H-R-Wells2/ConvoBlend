import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConvoBlend",
  description:
    "ConvoBlend: A vibrant community where discussions flourish, connecting diverse voices to shape shared content and opinions. Engage, interact, and be part of the fusion of ideas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Navbar />
        <div className="container max-w-7xl mx-auto h-full pt-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

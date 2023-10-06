import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TanstackProvider from "@/components/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codana News",
  description:
    "This is an assessment for my position as a frontend developer at Codana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}

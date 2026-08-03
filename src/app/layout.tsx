import type { Metadata } from "next";
import "./globals.css";
import AOSInit from "@/components/AOSInit"; // <--- 1. Tambahkan Import ini

export const metadata: Metadata = {
  title: "Antrian Online",
  description: "Sistem Antrian Terpadu",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <AOSInit /> {/* <--- 2. Letakkan di sini */}
        {children}
      </body>
    </html>
  );
}

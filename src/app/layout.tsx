import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/presentation/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Learning APP",
  description: "Simple e-learning app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavbarComponent />
        <main className="container max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

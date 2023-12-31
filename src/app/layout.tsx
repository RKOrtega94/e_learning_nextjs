import type { Metadata } from "next";
import "./globals.css";
import { NavbarComponent } from "@/presentation/components";

import { inter } from "@/config/fonts";

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
        <main className="w-full h-screen">{children}</main>
      </body>
    </html>
  );
}

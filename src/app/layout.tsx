import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rifas Operação Felicidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto xl:max-w-5xl mb-24">
          <div className="h-72 flex flex-row items-center justify-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Operação Felicidade"
                width={200}
                height={48}
                priority
              />
            </Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

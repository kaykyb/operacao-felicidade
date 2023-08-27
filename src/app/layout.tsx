import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Operação Felicidade",
};

export const fetchCache = "force-no-store";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 px-2 mb-8">
            <a
              href="https://bit.ly/OAjrkemsdo2937yadjh273234adsK"
              target="_blank"
              className="bg-pink-600 border text-white p-3 rounded-full text-center text-lg font-bold flex flex-row items-center justify-center"
            >
              <Image
                src="/whatsapp.svg"
                alt="Whatsapp"
                className="mr-2"
                width={24}
                height={24}
                priority
              />
              Comprar aqui
            </a>
            <a
              href="https://nubank.com.br/pagar/cp5bs/t62DXbg9hl"
              target="_blank"
              className="bg-blue-600 text-white p-3 rounded-full text-center text-lg font-bold flex flex-row items-center justify-center"
            >
              <Image
                src="/pix.svg"
                alt="Pix"
                className="mr-2"
                width={24}
                height={24}
                priority
              />
              Pagamento PIX
            </a>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spider-Verse",
  description:
    "Criando um carrosel parallax usando React, Next.js e Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Opções de menu"
            width={36}
            height={25}
          />
          <Link href={"/"}>
          <Image
            src="/spider-logo.svg"
            alt="Spiderman logo"
            width={260}
            height={70}
          />
          </Link>
          <Image src="/icons/user.svg" 
          alt="Login" 
          width={36} 
          height={25} 
          />
        </header>
        {children}
      </body>
    </html>
  );
}

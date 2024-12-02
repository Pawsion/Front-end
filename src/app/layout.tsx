'use client';

import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import { usePathname } from "next/navigation";  

const open = Open_Sans({ subsets: ["latin"] });

import { metadata as pageMetadata } from "../../public/metadata";
import BackToTopButton from "@/components/Back/BackToTheTop";

type MetadataKeys = "/" | "/blog/citati" | "/blog/shelters"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();  

  const currentMetadata = pageMetadata[pathname as MetadataKeys] || pageMetadata["/"]; 

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>{currentMetadata.title}</title>
        <meta name="description" content={currentMetadata.description} />
      </head>
      <body className={open.className}>
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}

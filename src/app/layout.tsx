import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

const open = Open_Sans({subsets: ["latin"]});

export const metadata = {
  title: "Pethub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

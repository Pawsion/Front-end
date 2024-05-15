import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/Header/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pethub",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        </body>
    </html>
  );
}
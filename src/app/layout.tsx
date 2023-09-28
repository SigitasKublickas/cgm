import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import NavBar from "@/layout/navbar";
import Footer from "@/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GRS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

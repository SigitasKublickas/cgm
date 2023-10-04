import "../styles/global.css";
import "../styles/responsive.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import NavBar from "@/layout/navbar";
import Footer from "@/layout/footer";

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
      <body>
        <NavBar login={true} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

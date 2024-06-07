import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StickNoBills } from "./assets/fonts/fonts";
import LenisScroll from "@/components/LenisScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Builders",
  description: "Where coding meets creativity, and community thrives. Hero Image.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LenisScroll>
      <body className={inter.className}>
        <div className={`${StickNoBills.variable}`}>
        <Navbar/>
          {children}
        </div>
        <Footer/>
        </body>
      </LenisScroll>
    </html>
  );
}

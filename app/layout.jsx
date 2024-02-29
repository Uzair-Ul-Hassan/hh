import { Montserrat } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Stats } from "@/components/Stats";

import "./globals.css";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "H&H Power",
  description:
    "H&H ENGINEERING PROVIDES QUALITY AND COMPREHENSIVE SERVICES FOR COMMERCIAL AND RESIDENTIAL BUILDING MECHANICAL, ELECTRICAL AND PLUMBING SYSTEMS AT AFFORDABLE RATES. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monsterrat.className} h-full`}>
        <Navbar />
        <main className="pt-32">{children}</main>
        <Stats />
        <Footer />
      </body>
    </html>
  );
}

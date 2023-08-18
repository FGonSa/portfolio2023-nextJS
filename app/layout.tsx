import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import FAB from "../components/FAB";
import Skills from "../components/Skills";

import Empresas from "@/components/Empresas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F5antos Portfolio",
  description: "Frank Santos Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-900">
        <Navbar />
        <div className="">
          <Hero />
          <About />
          <Empresas />
          <Projects />
          <Skills />
          {children}
          {/* <Contact /> */}
          <FAB />
        </div>
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js" async></script>
      </body>
    </html>
  );
}

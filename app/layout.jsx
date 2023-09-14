import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OjekPrint",
  description: "Kami Siap Tanggap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <main className="flex flex-col justify-center items-center w-full">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

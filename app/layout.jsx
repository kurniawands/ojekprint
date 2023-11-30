import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
// import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OjekPrint",
  description: "Kami Siap Tanggap",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="id">
      <body className={inter.className}>
        <main className="flex flex-col justify-center items-center w-full">
          {/* <Provider> */}
          <NavBar session={session} />
          {children}
          <Footer />
          {/* </Provider> */}
        </main>
      </body>
    </html>
  );
}

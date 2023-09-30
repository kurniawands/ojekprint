"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [session, setSession] = useState(true);

  return (
    <nav className="flex justify-between items-center w-full px-[7%] h-20 bg-black">
      <Link href="/" className="text-green-600 text-4xl font-bold">
        OJEK ONLINE
      </Link>

      <div className="flex flex-row justify-between gap-10 text-3xl font-normal">
        <Link href="/about">Tentang Kami</Link>
        <Link href="/provider">Toko</Link>
        <Link href="/service">Layanan</Link>
      </div>

      <div className="flex flex-row gap-5">
        {session ? (
          <div className="flex gap-3 md:gap-5 items-center">
            <Link href="/transaction">
              <Image src="/cart.png" width={40} height={40} alt="cart" />
            </Link>
            <Link
              href="/"
              className="rounded-full border-4 border-green-600 bg-black py-1.5 px-5 text-green-600 transition-all hover:bg-white hover:text-green-600 text-center text-2xl flex items-center justify-center"
              onClick={() => setSession(false)}
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <>
            {/* {providers &&
              Object.values(providers).map((provider) => ( */}
            <Link
              href="/login"
              // key={provider.name}
              // onClick={() => signIn(provider.id)}
              className="rounded-full border-4 border-green-600 bg-black py-1.5 px-5 text-green-600 transition-all hover:bg-white hover:text-green-600 text-center text-2xl flex items-center justify-center"
              onClick={() => setSession(true)}
            >
              Masuk
            </Link>
            <Link
              href="/register"
              // key={provider.name}
              // onClick={() => signIn(provider.id)}
              className="rounded-full bg-green-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-green-600 text-center text-2xl flex items-center justify-center"
              onClick={() => setSession(true)}
            >
              Daftar
            </Link>
            {/* ))} */}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

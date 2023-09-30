"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const HomeShop = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProvider = async () => {
      const response = await fetch("/api/provider", {
        method: "POST",
        body: JSON.stringify({
          limit: "4",
        }),
      });
      const data = await response.json();

      setProviders(data);
    };

    fetchProvider();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-x-10 gap-y-20">
      {providers.map((provider) => (
        <div
          key={provider.providerid}
          className="bg-neutral-300 text-black font-bold rounded-3xl"
        >
          <h3 className="my-1 mx-3 text-lg">{provider.providername}</h3>
          <Image
            src="/printing-profile.png"
            width={360}
            height={270}
            alt="print profile"
          />
          <div className="flex flex-row mx-2 my-2 items-center gap-2">
            <Image
              src="/map-point-black.svg"
              width={16}
              height={23}
              style={{ width: "auto", height: "auto" }}
              alt="map"
            />
            <p className="text-sm">{provider.address}</p>
          </div>
          <div className="flex justify-center mx-3 mb-3">
            <Link
              href="/"
              className="rounded-full bg-green-500 w-full px-4 py-1 text-xl text-center text-white"
            >
              Cek Informasi
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeShop;

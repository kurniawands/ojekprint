"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ServiceBox from "./ServiceBox";

const ShopCardList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProvider = async () => {
      const response = await fetch("/api/providerserv", {
        method: "POST",
        body: JSON.stringify({
          limit: "100",
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
          className="flex flex-col justify-center bg-white text-black font-bold rounded-3xl"
        >
          <h3 className="mt-1 mx-3 text-xl text-center">
            {provider.providername}
          </h3>
          <div className="flex flex-row mx-2 justify-center items-center gap-2">
            <Image
              src="/map-point-black.svg"
              width={16}
              height={23}
              style={{ width: "auto", height: "auto" }}
              alt="map"
            />
            <p className="text-sm">{provider.address}</p>
          </div>
          <Image
            src="/print-provider.png"
            width={360}
            height={270}
            alt="print profile"
            className="my-4"
          />
          <div className="flex flex-col justify-center items-center">
            <p className="">Layanan Rekomendasi</p>
            {/* <ServiceBox id={provider.providerid} /> */}
            {provider.service.map((service) => (
              <div
                key={service.serviceid}
                className="flex flex-row w-full px-3 py-3 gap-1 bg-[#e7c89c] border-y-2 border-white"
              >
                <Image
                  src="/printer.png"
                  width={49}
                  height={49}
                  alt="Printer"
                />
                <div className="flex flex-col w-full">
                  <p className="text-left">{service.name}</p>
                  <p className="text-right">{service.price}</p>
                </div>
              </div>
            ))}
            {/* <div className="flex flex-row w-full px-3 py-3 gap-1 bg-[#e7c89c]">
              <Image src="/printer.png" width={49} height={49} alt="Printer" />
              <div className="flex flex-col w-full">
                <p className="text-left">Print Hitam Putih</p>
                <p className="text-right">Rp25000/Lembar</p>
              </div>
            </div>
            <div className="flex flex-row w-full px-3 py-3 gap-1 bg-[#a2c7c6]">
              <Image src="/printer.png" width={49} height={49} alt="Printer" />
              <div className="flex flex-col w-full">
                <p className="text-left">Print Warna</p>
                <p className="text-right">Rp50000/Lembar</p>
              </div>
            </div>
            <div className="flex flex-row w-full px-3 py-3 gap-1 bg-[#b7dabd]">
              <Image src="/printer.png" width={49} height={49} alt="Printer" />
              <div className="flex flex-col w-full">
                <p className="text-left">Print Hitam Putih</p>
                <p className="text-right">Rp100000/Lembar</p>
              </div>
            </div> */}
            <p className="py-1">Selengkapnya...</p>
          </div>
          <div className="flex justify-center mx-3 mb-3">
            <Link
              href={`/provider/${provider.providerid}`}
              className="rounded-full bg-green-500 w-full px-4 py-1 text-xl text-center text-white"
            >
              Belanja Sekarang
            </Link>
          </div>
          <div className="flex flex-row gap-2 py-2 justify-center items-center text-white bg-green-500 rounded-b-3xl">
            <Image src="/star.png" width={39} height={34} alt="star" />
            <div>4.9/5.0</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCardList;

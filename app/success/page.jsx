import React from "react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="relative bg-hero-image bg-no-repeat bg-cover bg-center flex justify-center items-center min-w-full min-h-screen">
      <div className="flex flex-col gap-8 w-[700px] border rounded-[48px] bg-white px-8 py-8 font-bold text-center">
        <h1 className="text-6xl text-green-500">Terima Kasih</h1>
        <p className="text-4xl text-gray-500">
          Telah bertransaksi bersama kami
          <br />
          <br />
          Silakan tunggu sesuai dengan estimasi yang telah diberikan
        </p>
        <Link
          href="/"
          className="inline-block w-96 self-center rounded-full bg-green-500 mt-4 px-12 py-4 text-2xl"
        >
          Ok
        </Link>
      </div>
    </div>
  );
};

export default Success;

"use client";

import { useState } from "react";

const FormPenjual = () => {
  const [providerUsername, setProviderUsername] = useState("");
  const [providerName, setProviderName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/register/provider", {
        method: "POST",
        body: JSON.stringify({
          username: providerUsername,
          name: providerName,
          password: password,
          phone: phone,
          address: address,
          email: email,
        }),
      });
    } catch (error) {
      console.log(error);
    }

    location.href = "/";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[580px] flex flex-col items-center px-12 py-6 bg-white text-[#898989] font-bold rounded-3xl"
    >
      <div className="text-center">
        <div className="font-bold text-4xl">Daftar Sekarang</div>
        <div className="text-xl">Anda harus daftar terlebih dahulu</div>
        <div className="text-xl">Silakan isi data di bawah ini</div>
      </div>
      <div className="flex flex-col w-[480px] gap-4 my-4 text-xl">
        <div>
          <div className="px-2">Nama Pengguna Penyedia</div>
          <div className="h-10 items-center rounded-2xl border border-gray-600">
            <input
              type="text"
              value={providerUsername}
              onChange={(e) => setProviderUsername(e.target.value)}
              className="w-full h-full px-3 rounded-2xl"
            />
          </div>
        </div>
        <div>
          <div className="px-2">Nama Penyedia</div>
          <div className="h-10 items-center rounded-2xl border border-gray-600">
            <input
              type="text"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
              className="w-full h-full px-3 rounded-2xl"
            />
          </div>
        </div>
        <div>
          <div className="px-2">Kata Sandi</div>
          <div className="h-10 items-center rounded-2xl border border-gray-600">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full px-3 rounded-2xl"
            />
          </div>
        </div>
        <div>
          <div className="px-2">Nomor Telepon</div>
          <div className="h-10 items-center rounded-2xl border border-gray-600">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-full px-3 rounded-2xl"
            />
          </div>
        </div>
        <div>
          <div className="px-2">Alamat Penyedia Layanan</div>
          <div className="h-10 items-center rounded-2xl border border-gray-600">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full h-full px-3 rounded-2xl"
            />
          </div>
        </div>
        <div>
          <div className="px-2">Email</div>
          <div className="h-10 items-center rounded-2xl border border-gray-600">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-full px-3 rounded-2xl"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-4/5 h-16 my-4 bg-green-500 font-bold text-white text-4xl rounded-2xl border"
      >
        Daftar
      </button>
    </form>
  );
};

export default FormPenjual;

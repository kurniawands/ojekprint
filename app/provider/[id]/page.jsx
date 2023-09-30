"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ProviderID = ({ params }) => {
  const [providers, setProviders] = useState([]);
  const [services, setServices] = useState([]);
  const [counter, setCounter] = useState(0);

  const biaya = 5000;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      const response = await fetch("/api/service", {
        method: "POST",
        body: JSON.stringify({
          providerid: params.id,
        }),
      });
      const data = await response.json();

      setServices(data);
    };

    fetchService();
  }, []);

  useEffect(() => {
    const fetchProvider = async () => {
      const response = await fetch("/api/provider/id", {
        method: "POST",
        body: JSON.stringify({
          providerid: params.id,
        }),
      });
      const data = await response.json();
      console.log(data);
      setProviders(data);
    };

    fetchProvider();
  }, []);

  function totalPrice(service, quantity) {
    let sum = 0;

    for (let i = 0; i < service.length; i++) {
      sum += service[i].price * quantity;
    }

    return sum;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/orders/insert", {
        method: "POST",
        body: JSON.stringify({
          serviceid: services[1].serviceid,
          address: address,
          status: "Dalam Proses",
        }),
      });
    } catch (error) {
      console.log(error);
    }

    location.href = "/transaction";
  };

  return (
    <section className="flex flex-row justify-center gap-16 w-full my-8 px-8 font-bold text-black">
      <div className="w-[960px] px-8 py-3 bg-white rounded-3xl">
        <div className="text-2xl">Pilihan Layanan</div>
        <div className="flex flex-col gap-2 my-4 justify-center">
          {services.map((service) => (
            <div
              key={service.serviceid}
              className="flex flex-col gap-4 px-6 py-3 bg-[#dadada]"
            >
              <div className="flex flex-row gap-2 justify-center items-center">
                <Image
                  src="/printer.png"
                  width={80}
                  height={80}
                  alt="Printer"
                />
                <div className="flex flex-col gap-2 basis-1/2">
                  <p className="text-3xl">{service.name}</p>
                  <p className="text-2xl">Rp{service.price}/Lembar</p>
                </div>
                <form className="">
                  <div>File</div>
                  <input type="file" className="w-[240px]" />
                </form>
              </div>
              <div className="flex flex-row gap-4 justify-center items-center">
                <p>Note :</p>
                <input type="text" className="basis-4/6 h-8 px-2" />
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/dec-button.png"
                    width={30}
                    height={30}
                    alt="decrease button"
                    onClick={() => setCounter((prev) => prev - 1)}
                  />
                  <div>{counter}</div>
                  <Image
                    src="/inc-button.png"
                    width={30}
                    height={30}
                    alt="increase button"
                    onClick={() => setCounter((prev) => prev + 1)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[560px] px-12 py-4 bg-white rounded-3xl">
        {providers.map((provider) => (
          <div key={provider.providername} className="text-4xl">
            {provider.providername}
          </div>
        ))}
        <form className="flex flex-col gap-4">
          <p className="text-xl">Masukan Kode Promo</p>
          <input
            type="text"
            className="w-full h-14 rounded-full border border-gray-400"
          />
        </form>
        <div className="flex flex-col gap-4 text-2xl">
          <div>Ringkasan Belanja</div>
          <div className="flex flex-row justify-between">
            <div>Total Harga</div>
            <div>{totalPrice(services, counter)}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Biaya Tambahan</div>
            <div>{biaya}</div>
          </div>
          <div className="border-black border-2"></div>
          <div className="flex flex-row justify-between">
            <div>Total Pesanan</div>
            <div>{totalPrice(services, counter) + biaya}</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-4 my-4 text-xl">
            <div>
              <div className="px-2">Nama Penerima</div>
              <div className="h-10 items-center rounded-2xl border border-gray-600">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-full px-3 rounded-2xl"
                ></input>
              </div>
            </div>
            <div>
              <div className="px-2">Alamat Pengirim</div>
              <div className="h-10 items-center rounded-2xl border border-gray-600">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full h-full px-3 rounded-2xl"
                ></input>
              </div>
            </div>
            <div>
              <div className="px-2">Pembayaran</div>
              <div className="h-10 items-center rounded-2xl border border-gray-600">
                <input
                  type="text"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="w-full h-full px-3 rounded-2xl"
                ></input>
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
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-4/5 h-16 my-4 bg-green-500 font-bold text-white text-4xl rounded-2xl border"
            >
              Bayar Sekarang
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProviderID;

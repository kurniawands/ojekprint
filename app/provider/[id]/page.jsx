"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ProviderID = ({ params }) => {
  const [providers, setProviders] = useState([]);
  const [services, setServices] = useState([]);
  const [counter, setCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const biaya = 5000;

  const [promo, setPromo] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");

  let foundProduct;
  let index;

  // useEffect(() => {
  //   const log = () => {
  //     console.log(option);
  //   };

  //   log();
  // }, [option]);

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
      // console.log(data);
      setProviders(data);
    };

    fetchProvider();
  }, []);

  const toggleQuantity = (id, value) => {
    foundProduct = services.find((item) => item.serviceid === id);
    index = services.findIndex((product) => product.serviceid === id);
    // const newServices = services.filter((item) => item.serviceid !== id);
    const newServices = [...services];

    if (value === "inc") {
      // setServices([
      //   ...newServices,
      //   { ...foundProduct, quantity: foundProduct.quantity + 1 },
      // ]);
      foundProduct.quantity += 1;
      newServices[index] = foundProduct;
      setServices(newServices);
      setTotalPrice((prev) => prev + Number(foundProduct.price));
    } else if (value === "dec") {
      if (foundProduct.quantity > 0) {
        // setServices([
        //   ...newServices,
        //   { ...foundProduct, quantity: foundProduct.quantity - 1 },
        // ]);
        foundProduct.quantity -= 1;
        newServices[index] = foundProduct;
        setServices(newServices);
        setTotalPrice((prev) => prev - Number(foundProduct.price));
      }
    }
  };

  // function totalPrice(service, quantity) {
  //   let sum = 0;

  //   for (let i = 0; i < service.length; i++) {
  //     sum += service[i].price * quantity;
  //   }

  //   return sum;
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/api/orders/insert", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         serviceid: services[1].serviceid,
  //         address: address,
  //         status: "Dalam Proses",
  //       }),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   location.href = "/transaction";
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        body: JSON.stringify({
          orderid: Math.floor(Math.random() * 100000),
          total_price: totalPrice + biaya,
        }),
      });

      const url = await response.json();

      // console.log(url);

      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
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
                  <p className="text-2xl">Rp {Number(service.price)}/Lembar</p>
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
                    // onClick={() => setCounter((prev) => prev - 1)}
                    onClick={() => toggleQuantity(service.serviceid, "dec")}
                  />
                  <div>{service.quantity}</div>
                  <Image
                    src="/inc-button.png"
                    width={30}
                    height={30}
                    alt="increase button"
                    // onClick={() => setCounter((prev) => prev + 1)}
                    onClick={() => toggleQuantity(service.serviceid, "inc")}
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
            value={promo.toUpperCase()}
            className="w-full h-12 px-3 rounded-full border border-gray-400"
            onChange={(e) => setPromo(e.target.value)}
          />
        </form>
        <div className="flex flex-col gap-2 text-2xl">
          {/* <div>Ringkasan Belanja</div> */}
          <div className="flex flex-row justify-between">
            <div>Total Harga</div>
            <div>Rp {totalPrice}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Biaya Layanan</div>
            <div>Rp {biaya}</div>
          </div>
          <div className="border-black border-2"></div>
          <div className="flex flex-row justify-between">
            <div>Total Pesanan</div>
            <div>Rp {totalPrice + biaya}</div>
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
            <div className="flex flex-row justify-between">
              <p>Estimasi Pengambilan :</p>
              <p>20 Menit</p>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p>Opsi Pengambilan :</p>
              </div>
              <div className="flex flex-row gap-2">
                <input
                  type="radio"
                  id="ditempat"
                  name="option"
                  value="Ditempat"
                  onChange={(e) => setOption(e.target.value)}
                ></input>
                <label for="ditempat">Ditempat</label>
              </div>
              <div className="flex flex-row gap-2">
                <input
                  type="radio"
                  id="dikirim"
                  name="option"
                  value="Dikirim"
                  onChange={(e) => setOption(e.target.value)}
                ></input>
                <label for="dikirim">Dikirim</label>
              </div>
            </div>
            <div className="h-40">
              {(option === "" || option === "Dikirim") && (
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="px-2">Alamat Pengiriman</div>
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
                    <div className="flex flex-row justify-between">
                      <div className="">Pengambilan via GoSend</div>
                      <div>Rp 5000</div>
                    </div>
                    {/* <div className="h-10 items-center rounded-2xl border border-gray-600">
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full h-full px-3 rounded-2xl"
                      ></input>
                    </div> */}
                  </div>
                  <div className="border-black border-2"></div>
                  <div className="flex flex-row justify-between text-2xl">
                    <div>Total Biaya</div>
                    <div>Rp {totalPrice + biaya + 5000}</div>
                  </div>
                </div>
              )}
              {option === "Ditempat" && (
                <div className="flex flex-col gap-2">
                  {/* <div className="flex flex-row justify-between">
                    <div className="">Pengambilan via GoSend</div>
                    <div>Rp 10000</div>
                  </div> */}
                  <div className="flex flex-col gap-2 justify-between text-2xl">
                    <div>Lokasi Pengambilan :</div>
                    {providers.map((provider) => (
                      <div key={provider.providername} className="text-right">
                        {provider.address}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="px-2">Catatan</div>
                    <div className="h-10 items-center rounded-2xl border border-gray-600">
                      <input
                        type="text"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        className="w-full h-full px-3 rounded-2xl"
                      ></input>
                    </div>
                  </div>
                  {/* <div className="border-black border-2"></div>
                  <div className="flex flex-row justify-between text-2xl">
                    <div>Total Biaya</div>
                    <div>Rp {totalPrice + biaya + 10000}</div>
                  </div> */}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-4/5 h-16 my-4 bg-green-500 font-bold text-white text-4xl rounded-2xl border"
              onClick={(e) => handleSubmit(e)}
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

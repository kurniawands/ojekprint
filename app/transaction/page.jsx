import Image from "next/image";

const Transaction = () => {
  return (
    <section className="my-8 px-12 font-bold">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row w-[1600px] h-56 bg-white text-black rounded-3xl">
          <div className="flex flex-row items-center basis-1/5 px-8 bg-[#d7dd1c] text-white text-center text-5xl rounded-l-3xl">
            Sedang Diproses
          </div>
          <div className="flex flex-col basis-1/5 items-center">
            <div>Citra Warna</div>
            <div className="flex flex-row mx-2 justify-center items-center gap-2">
              <Image
                src="/map-point-black.svg"
                width={16}
                height={23}
                style={{ width: "auto", height: "auto" }}
                alt="map"
              />
              <p className="text-sm">Jl. Belimbing Sari, Sleman</p>
            </div>
            <Image
              src="/printing-profile.png"
              width={200}
              height={200}
              alt="print profile"
              className="my-4"
            />
          </div>
          <table className="basis-1/5 border border-black px-8 text-center">
            <tr className="border border-black">
              <th>Pesanan</th>
              <th>Jumlah</th>
            </tr>
            <tr>
              <td>Hitam Putih</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Warna</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Brosur</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Spanduk</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Banner</td>
              <td>10</td>
            </tr>
          </table>
          <div className="flex flex-col justify-center basis-1/5 px-8">
            <div>File</div>
            <div className="w-[185px] h-[175px] bg-[#d2d2d2]"></div>
          </div>
          <div className="flex flex-col justify-center basis-1/5 gap-4 pr-8 text-lg">
            <div>Ringkasan Harga Belanja</div>
            <div className="flex flex-row justify-between">
              <div>Total Harga</div>
              <div>Rp30500</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Biaya Tambahan</div>
              <div>5000</div>
            </div>
            <div className="border-black border-2"></div>
            <div className="flex flex-row justify-between">
              <div>Total Pesanan</div>
              <div>35500</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-[1600px] h-56 bg-white text-black rounded-3xl">
          <div className="flex flex-row items-center basis-1/5 px-16 bg-[#0df104] text-white text-center text-5xl rounded-l-3xl">
            Selesai
          </div>
          <div className="flex flex-col basis-1/5 items-center">
            <div>Citra Warna</div>
            <div className="flex flex-row mx-2 justify-center items-center gap-2">
              <Image
                src="/map-point-black.svg"
                width={16}
                height={23}
                style={{ width: "auto", height: "auto" }}
                alt="map"
              />
              <p className="text-sm">Jl. Belimbing Sari, Sleman</p>
            </div>
            <Image
              src="/printing-profile.png"
              width={200}
              height={200}
              alt="print profile"
              className="my-4"
            />
          </div>
          <table className="basis-1/5 border border-black px-8 text-center">
            <tr className="border border-black">
              <th>Pesanan</th>
              <th>Jumlah</th>
            </tr>
            <tr>
              <td>Hitam Putih</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Warna</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Brosur</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Spanduk</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Banner</td>
              <td>10</td>
            </tr>
          </table>
          <div className="flex flex-col justify-center basis-1/5 px-8">
            <div>File</div>
            <div className="w-[185px] h-[175px] bg-[#d2d2d2]"></div>
          </div>
          <div className="flex flex-col justify-center basis-1/5 gap-4 pr-8 text-lg">
            <div>Ringkasan Harga Belanja</div>
            <div className="flex flex-row justify-between">
              <div>Total Harga</div>
              <div>Rp133815</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Biaya Tambahan</div>
              <div>7500</div>
            </div>
            <div className="border-black border-2"></div>
            <div className="flex flex-row justify-between">
              <div>Total Pesanan</div>
              <div>141315</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center py-2 text-3xl bg-[#e9e9e9] text-black">
        <div>Beri Rating :</div>
        <div className="flex flex-row gap-1">
          <Image src="/star-null.png" width={39} height={34} alt="star" />
          <Image src="/star-null.png" width={39} height={34} alt="star" />
          <Image src="/star-null.png" width={39} height={34} alt="star" />
          <Image src="/star-null.png" width={39} height={34} alt="star" />
          <Image src="/star-null.png" width={39} height={34} alt="star" />
        </div>
        <div>Komentar :</div>
        <div>Pelayanan sangat memuasakan dan sangat baik</div>
      </div>
    </section>
  );
};

export default Transaction;

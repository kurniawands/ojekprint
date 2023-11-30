import Image from "next/image";
import Link from "next/link";
import HomeShop from "@/components/HomeShop";

export default function Home() {
  return (
    <section className="flex flex-col justify-center w-full">
      <div className="relative bg-hero-image bg-no-repeat bg-cover bg-center flex items-center min-h-screen">
        <div className="px-[7%] py-6 max-w-5xl">
          <h1 className="font-bold text-6xl leading-normal">
            Kamu Butuh Cepat
            <br />
            <span className="text-green-500">
              KAMI SIAP TANGGAP
              <br />
              OJEK ONLINE
            </span>
          </h1>
          <Link
            href="/provider"
            className="inline-block rounded-full bg-green-500 mt-4 px-12 py-4 text-2xl"
          >
            Beli Sekarang
          </Link>
        </div>
      </div>

      <div className="px-[7%] py-16">
        <h1 className="font-bold text-center text-6xl mb-12">
          <span className="text-green-500">Tentang</span> Kami
        </h1>
        <div className="flex flex-col xl:flex-row items-center xl:items-start">
          <div className="basis-2/5 grow shrink mx-5">
            <Image src="/about.png" width={700} height={500} alt="about" />
          </div>
          <div className="flex flex-col basis-3/5 px-5">
            <h3 className="font-bold text-green-500 text-3xl mb-4">
              Ojek Print
            </h3>
            <p className="font-semibold text-2xl">
              Ojek Print adalah layanan yang memungkinkan pengguna untuk
              mencetak dokumen dengan cepat dan mudah melalui platform daring.
              Dalam layanan ini, pengguna dapat mengirimkan berkas yang perlu
              dicetak, seperti tugas sekolah, dokumen bisnis, atau materi
              presentasi, melalui aplikasi atau situs web yang disediakan.
              Penyedia jasa Ojek Print kemudian mengambil berkas tersebut,
              mencetaknya, dan mengirimkannya kembali ke alamat yang ditentukan
              oleh pengguna. Konsep ini mirip dengan layanan ojek daring, tetapi
              fokusnya adalah pada kebutuhan pencetakan dokumen yang mendesak,
              memberikan kemudahan dan kecepatan dalam mengakses layanan
              pencetakan tanpa perlu pergi ke tempat pencetakan fisik.
            </p>
          </div>
        </div>
      </div>

      <div className="px-[7%] py-16">
        <h1 className="font-bold text-center text-6xl mb-12">
          <span className="text-green-500">Layanan</span> Percetakan
        </h1>
        <div className="w-full bg-zinc-800 p-8 rounded-3xl">
          <HomeShop />
        </div>
      </div>
    </section>
  );
}

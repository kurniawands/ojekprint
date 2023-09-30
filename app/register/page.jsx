import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <section className="flex flex-col justify-center w-full">
      <div className="relative bg-hero-image bg-no-repeat bg-cover bg-center flex flex-row justify-evenly items-center min-h-screen">
        <div className="">
          <h1 className="font-bold text-6xl leading-normal">
            AYO DAFTAR SEKARANG <br />
            Kamu Butuh Cepat
            <br />
            <span className="text-green-500">
              KAMI SIAP TANGGAP
              <br />
              OJEK ONLINE
            </span>
          </h1>
        </div>
        <div>
          <div className="w-[580px] flex flex-col items-center gap-4 px-12 py-6 bg-white text-[#898989] font-bold rounded-3xl">
            <div className="text-center">
              <div className="font-bold text-4xl">Daftar Sekarang</div>
              <div className="text-xl">Anda harus daftar terlebih dahulu</div>
              <div className="text-xl">
                Silakan pilih jenis pengguna di bawah
              </div>
            </div>
            <div className="flex flex-col items-center w-[480px] gap-4 my-4 font-bold text-white text-2xl text-center rounded-2xl">
              <Link
                href="/register/pengguna"
                className="w-4/5 h-16 my-4 leading-[64px] bg-cyan-500 border"
              >
                Daftar Sebagai Pengguna
              </Link>
              <div className="text-[#898989]">Atau</div>
              <Link
                href="/register/penjual"
                className="w-4/5 h-16 my-4 leading-[64px] bg-green-500 border"
              >
                Daftar Sebagai Penjual
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

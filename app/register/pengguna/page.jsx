import FormPengguna from "@/components/FormPengguna";

const Pengguna = () => {
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
          <FormPengguna />
        </div>
      </div>
    </section>
  );
};

export default Pengguna;
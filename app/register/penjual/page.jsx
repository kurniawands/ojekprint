import FormPenjual from "@/components/FormPenjual";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Penjual = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }

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
          <FormPenjual />
        </div>
      </div>
    </section>
  );
};

export default Penjual;

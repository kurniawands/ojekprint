import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const contacts = [
    {
      name: "whatsapp",
      src: "/whatsapp.svg",
      value: "+62 857 6411 2831",
    },
    {
      name: "gmail",
      src: "/gmail.png",
      value: "ojekprint@gmail.com",
    },
    {
      name: "instagram",
      src: "/instagram.png",
      value: "ojek.print",
    },
    {
      name: "facebook",
      src: "/facebook.png",
      value: "ojek print",
    },
  ];

  return (
    <footer className="flex flex-col w-full px-10 font-bold text-2xl">
      <div className="flex flex-row pb-4 border-neutral-500 border-b">
        <div className="flex flex-col basis-4/5">
          <div className="flex flex-row px-4 py-2 border-neutral-500 border-b border-r">
            <div className="flex flex-row py-2 basis-1/5 gap-4 border-neutral-500 border-r">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                style={{ width: "25%", height: "55%" }}
                alt="logo"
                className=" border-green-500 border"
              />
              <h1 className="font-bold text-3xl">
                OJEK <br />
                PRINT
              </h1>
            </div>
            <div className="flex flex-col px-8 basis-4/5 gap-4 border-neutral-500 border-l">
              <div className="flex flex-row items-center gap-4">
                <h1>OJEK PRINT</h1>
                <Image src="/logo.png" width={50} height={50} alt="logo" />
              </div>
              <p>
                Ojek Print adalah startup dibawah naungan PT Kurniawan lestari
                yang menyediakan layanan jasa pembelian dan print secara online
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-col px-4 basis-3/4 gap-2">
              <p>Kantor Pusat :</p>
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/map-point-white.svg"
                  width={30}
                  height={42}
                  style={{ width: "auto", height: "auto" }}
                  alt="map"
                />
                <p>Jl. Belimbing sari CT IV, Sleman, Yogyakarta, Indonesia</p>
              </div>
            </div>
            <div className="basis-1/4">
              <Link href="/help">Bantuan</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/5 justify-start px-3 py-2 gap-2 border-neutral-500 border-l">
          <div>Media Informasi :</div>
          {contacts.map((contact) => (
            <div key={contact.name} className="flex flex-row">
              <Image
                src={contact.src}
                width={28}
                height={28}
                alt={contact.name}
              />
              <div>{contact.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-evenly py-6 border-neutral-500 border-t">
        <div>
          Copyright &copy;2023 Ojek Print | PT. Percetakan Indonesia | Penyedia
          Jasa Terbaik
        </div>
        <Link href="/terms">Syarat dan Ketentuan</Link>
        <Link href="/privacy">Kebijakan Privasi</Link>
      </div>
    </footer>
  );
};

export default Footer;

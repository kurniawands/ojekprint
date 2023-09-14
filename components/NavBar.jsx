import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const session = false;

  return (
    <nav className="flex justify-between items-center w-full px-[7%] h-20 bg-black">
      <Link href="/" className="text-green-600 text-4xl font-bold">
        OJEK ONLINE
      </Link>

      <div className="flex flex-row justify-between gap-10 text-3xl font-normal">
        <Link href="/about">Tentang Kami</Link>
        <Link href="/product">Produk</Link>
        <Link href="/service">Layanan</Link>
      </div>

      <div className="flex flex-row gap-5">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {/* {providers &&
              Object.values(providers).map((provider) => ( */}
            <button
              type="button"
              // key={provider.name}
              // onClick={() => signIn(provider.id)}
              className="rounded-full border-4 border-green-600 bg-black py-1.5 px-5 text-green-600 transition-all hover:bg-white hover:text-green-600 text-center text-2xl flex items-center justify-center"
            >
              Masuk
            </button>
            <button
              type="button"
              // key={provider.name}
              // onClick={() => signIn(provider.id)}
              className="rounded-full bg-green-600 py-1.5 px-5 text-white transition-all hover:bg-white hover:text-green-600 text-center text-2xl flex items-center justify-center"
            >
              Daftar
            </button>
            {/* ))} */}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

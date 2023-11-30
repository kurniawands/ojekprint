"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(true);

  // useEffect(() => {
  //   console.log(password);
  // }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push("/");
      router.refresh();
    } else {
      setSession(false);
    }

    // try {
    //   const response = await fetch("/api/users/login", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       username: username,
    //       password: password,
    //     }),
    //   });
    // } catch (error) {
    //   console.log(error);
    // }

    // location.href = "/";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[580px] flex flex-col items-center px-12 py-6 bg-white text-[#898989] font-bold rounded-3xl"
    >
      <div className="text-center">
        <div className="font-bold text-4xl">Gabung</div>
        <div className="text-xl">Silakan login terlebih dahulu</div>
        <div className="text-xl">Silakan masukkan data di bawah ini</div>
      </div>
      <div className="flex flex-col w-[480px] gap-4 mt-4 mb-12 text-xl">
        {!session && (
          <div className="w-72 self-center bg-red-400 text-center text-white text-sm">
            Nama Pengguna atau Kata Sandi salah
          </div>
        )}
        <div>
          {/* <div className="px-2">Nama Pengguna</div> */}
          <label htmlFor="username" className="px-2">
            Nama Pengguna
          </label>
          <div className="h-10 items-center rounded-2xl border border-gray-600">
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-full px-3 rounded-2xl"
            ></input>
          </div>
        </div>
        <div>
          {/* <div className="px-2">Kata Sandi</div> */}
          <label htmlFor="password" className="px-2">
            Kata Sandi
          </label>
          <div className="h-10 items-center rounded-2xl border border-gray-600">
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full px-3 rounded-2xl"
            ></input>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-4/5 h-16 my-4 bg-green-500 font-bold text-white text-4xl rounded-2xl border"
      >
        Masuk
      </button>
    </form>
  );
};

export default LogForm;

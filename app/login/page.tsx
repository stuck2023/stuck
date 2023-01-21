"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, MouseEvent, useState } from "react";
import supabase from "../../public/config/supabase";

interface pageProps {}

type FormProps = {
  email: "";
  password: "";
};

const initialState: FormProps = {
  email: "",
  password: "",
};

const Login = ({}) => {
  const user = supabase.auth.getUser();

  const router = useRouter();

  const [form, setForm] = useState<FormProps>(initialState);

  const { email, password } = form;

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto ">
      <div className="w-full p-8 border rounded-lg shadow border-contrast bg-darker ">
        <h1 className="px-2 mb-2 text-2xl text-white tex-center ">Log In</h1>
        <p className="px-2 text-xs text-cf">Welcome back!</p>
        <div className="w-full rounded-lg">
          <div className="flex gap-2 mt-4">
            <div className="flex justify-center w-full gap-2 p-2 my-2 text-sm transition border rounded-md cursor-pointer items-cener border-contrast text-cf hover:bg-contrast hover:text-white">
              <div className="text-sm ">
                <button onClick={signInWithGoogle} className="">
                  Google
                </button>
              </div>
            </div>
          </div>
          <div className="py-4 ">
            <div className="relative w-full mb-5">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="border-1 peer block w-full appearance-none rounded-lg border border-[#3D4444] bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-white focus:border-main focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none rounded-lg bg-darker px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-main"
              >
                {" "}
                Email{" "}
              </label>
            </div>

            <div className="relative w-full mb-5">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="border-1 peer block w-full appearance-none rounded-lg border border-[#3D4444] bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-white focus:border-main focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none rounded-lg bg-darker px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-main"
              >
                {" "}
                Password{" "}
              </label>
            </div>

            <button
              onClick={async () => {
                const { error } = await supabase.auth.signInWithPassword({
                  email,
                  password,
                });
                if (error) alert(error.message);
                // push to home page
                router.push("/");
              }}
              className="main-btn"
            >
              <span className="inline-block mr-2">Log In</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-block w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
          <div className="py-2">
            <div className="grid grid-cols-2 gap-1">
              <div className="whitespace-nowrap">
                <button className="mx-5 text-sm font-normal transition duration-200 rounded-lg cursor-pointer text-cf ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block w-4 h-4 align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="inline-block ml-1 text-xs">
                    Forgot Password
                  </span>
                </button>
              </div>
              <div className="text-center whitespace-nowrap sm:text-right"></div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="whitespace-nowrap">
              <button className="mx-5 text-sm font-normal transition duration-200 rounded-lg cursor-pointer text-cf focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="inline-block w-4 h-4 align-text-top"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <Link href="/">
                  <span className="inline-block ml-1 text-xs">
                    Back to home
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

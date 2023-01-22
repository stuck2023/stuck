"use client";

import { useEffect, useState } from "react";
import supabase from "../public/config/supabase";
import { BiMouse } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";

export default function Home() {
  // const { data: projects }: any = await supabase
  //   .from("projects")
  //   .select("id, title");

  // if (!projects) return <p>no projects</p>;

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const user = await supabase.auth.getUser();
      console.log(user);
      if (user.data.user) {
        setUser(user);
      }
    }
    getUser();
  }, []);

  if (user) {
    return <p>{user.data.user?.email}</p>;
  }

  return (
    <div className="flex flex-col h-[70vh] w-full items-center justify-center ">
      <div className="text-center w-full xl:w-3/5 lg:w-3/5">
        <p className="tracking-widest mb-2 text-white text-xl">
          Welcome to Stuck
        </p>
        <h1 className="xl:text-7xl text-5xl 2xl:leading-[5.5rem] leading-[3.7rem] font-bold text-white">
          Manage Your Work Efficiently
        </h1>
        <p className=" mt-6 text-white w-3/5 lg:w-full mx-auto">
          Get you assignments done on cheapest rate in the market <br /> with
          full satisfaction
        </p>
      </div>

      <div className="cursor-pointer mt-12 w-fit h-fit p-2 rounded-full bg-[#ffffff32] flex items-center justify-center">
        <BiMouse className="text-[#ffffffa8] text-3xl" />
      </div>

      <div className="mt-8 cursor-pointer">
        <BsArrowDown className="text-[#ffffffa8] text-4xl" />
      </div>
    </div>
  );
}

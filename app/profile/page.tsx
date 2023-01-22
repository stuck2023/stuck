"use client";

import { getUnpackedSettings } from "http2";
import { useEffect, useState } from "react";
import supabase from "../../config/supabase";

export default function Account() {
  //   const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  //   const [bio, setbio] = useState(null);
  //   const [age, setAge] = useState(null);
  //   const [state, setState] = useState(null);
  //   const [city, setCity] = useState(null);

  useEffect(() => {
    async function getUser() {
      const user = await supabase.auth.getUser();
      console.log(user);
      setUser(user);
    }
    getUser();
  }, []);

  if (user) {
    return <p>{user.email}</p>;
  }

  return (
    <form className="flex flex-col justify-center max-w-2xl p-10 mx-auto border rounded-lg shadow border-contrast bg-darker sm:py-10">
      {" "}
      <div className="w-full sm:flex-col">
        <label
          className="flex-none mb-1 ml-1 text-sm font-semibold text-white"
          htmlFor="grid-first-name"
        >
          Username
        </label>
        <input
          className="main-input"
          type="text"
          placeholder="username"
          id="username"
          //   onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="sm:flex-col">
        <label
          className="block mb-1 ml-1 text-sm font-semibold text-white"
          htmlFor="grid-last-name"
        >
          Bio
        </label>
        <textarea
          className="main-input"
          placeholder="bio"
          name="bio"
          maxLength={500}
          //   onChange={(e) => setbio(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap mb-3 -mx-3"></div>
      <div className="flex flex-wrap mb-1 -mx-3">
        <div className="w-full px-3 mb-3 md:mb-0 md:w-1/3">
          <label
            className="block mb-1 ml-1 text-sm font-semibold text-white"
            htmlFor="grid-city"
          >
            City
          </label>
          <input
            className="main-input"
            id="grid-city"
            type="text"
            placeholder="Your city"
            name="city"
          />
        </div>
        <div className="w-full px-3 mb-3 md:mb-0 md:w-1/3">
          <label
            className="block mb-1 ml-1 text-sm font-semibold text-white"
            htmlFor="grid-state"
          >
            State
          </label>
          <div className="relative">
            <input
              className="main-input"
              type="select"
              id="grid-state"
              name="state"
              placeholder="Your state"
            />

            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-white pointer-events-none"></div>
          </div>
        </div>
        <div className="w-full px-3 mb-3 md:mb-0 md:w-1/3">
          <label
            className="block mb-1 ml-1 text-sm font-semibold text-white"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="main-input"
            id="age"
            type="number"
            placeholder="age"
            name="age"
          />
        </div>
      </div>
    </form>
  );
}

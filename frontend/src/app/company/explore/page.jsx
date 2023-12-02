"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";
import Foto from "../../../../public/assets/dev/iqbal.jpg";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function companyExplore() {
  const [userData, setUserData] = useState([]);
  function getLocalStorage() {
    const token = JSON.parse(localStorage.getItem("tokenCompany"));
    console.log(token);
    getUserExplore(token);
  }
  async function getUserExplore(token) {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    console.log(token.date);
    if (token.date === today) {
      const API = await fetch("https://backend.seekerjob.site/profileusercompany/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
      });
      const data = await API.json();
      console.log(data);
      setUserData(data);
    } else {
      window.location.href = "http://localhost:3000/company/login";
    }
  }
  useEffect(() => {
    getLocalStorage();
  }, []);
  return (
    <div className="container h-full w-full bg-white flex items-center flex-col gap-14">
      <div className="h-11 w-1/4 flex justify-center relative">
        <input
          type="text"
          className="h-full w-full mt-10 rounded-xl placeholder:italic placeholder:text-slate-400 block bg-white border-black border-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search Applicant by Skill"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute right-3 top-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="container">
        <div className="flex justify-center mb-3 flex-col gap-2 items-center">
          {userData.map((user, id) => {
            return (
              <Link href={`/company/explore/${user.id}`}
                key={id}
                className="w-5/6 border-b p-4 border-gray-500 bg-white cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="h-20 w-20 border rounded-full bg-slate-200 text-center">
                    <Image src={Foto} />
                  </div>
                  <div className="grid grid-rows-3 flex-1">
                    <div className="font-bold text-xl">{user.name}</div>
                    <div className="bg-blue-harits flex justify-self-start text-white items-center px-1 text-sm rounded-md font-medium">
                      {user.skill_name}
                    </div>
                    <div className="text-sm pt-2">{user.city}</div>
                  </div>
                  <div className="border-2 border-black text-center w-24 h-10 ml-64 rounded-lg bg-yellow-rizky text-sm flex items-center justify-center">
                    {user.level_name}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

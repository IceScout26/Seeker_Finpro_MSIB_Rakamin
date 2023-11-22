"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Explore() {
  const [userData, setUserData] = useState([]);
  async function getUserExplore() {
    const API = await fetch("http://localhost:5000/profileusers/user", {
      method: "GET",
      headers: {
        Type: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjEsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAwNTcwMjM4LCJleHAiOjE3MDA2NTY2Mzh9.cmpjWHKAXZgD5vCQwd0iarxX79C0o4T1AinrZzeQl3A",
      },
    });
    const data = await API.json();
    setUserData(data);
  }
  useEffect(() => {
    getUserExplore();
    console.log(userData);
  }, []);
  return (
    <div className="container h-full w-full bg-white">
      <div className="h-28 flex justify-center">
        <input
          type="text"
          className="h-11 w-2/4 mt-10 rounded-3xl placeholder:italic placeholder:text-slate-400 block bg-white border-black border-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
        />
      </div>
      <div className="container">
        <div className="flex justify-center mb-3 flex-col gap-2 items-center">
          {userData.map((user, id) => {
            return (
              <div key={id} className="w-5/6 border-2 p-4 border-black rounded-2xl bg-gray-100 shadow-xl cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="h-16 w-16 border-2 border-black bg-slate-200 text-center">
                    FOTO
                  </div>
                  <div className="grid grid-rows-3 flex-1">
                    <div className="font-bold">{ user.name }</div>
                    <div>{ user.skill_id }</div>
                    <div>{ user.city }</div>
                  </div>
                  <div className="border-2 border-black text-center w-14 h-14 ml-64 rounded-full text-2xl flex items-center justify-center">
                    { user.level_id }
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

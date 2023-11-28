"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";
import SelectComp from "../../../components/select.jsx";
import Loader from "../../../../public/assets/loader/Sayap.gif";
import { getProvinces } from "../../../lib/city.js";
import React, { useEffect, useState } from "react";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [province, setProvince] = useState({});
  async function inputRegister(event) {
    event.preventDefault();
    setIsLoading(true);
    console.log(event);
    const formData = new URLSearchParams(new FormData(event.target));
    const inputData = await fetch("http://localhost:5000/authuser/register", {
      method: "POST",
      headers: {
        Type: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjEsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAwODIwMjY1LCJleHAiOjE3MDA5MDY2NjV9.bZ0Yz7pSxjkD2B3hqo5Er_jMFk-eP4esrN0E3ZemRS0",
      },
      body: formData,
    });
    const data = await inputData.json();
    setIsLoading(false);
    console.log(data);
  }
  useEffect(() => {
    const renderList = async () => {
      const provinces = await getProvinces();
      setProvince(
        provinces.map((province) => ({
          label: province.name,
          value: province.name,
        }))
      );
    };
    renderList();
    console.log(renderList());
  }, []);

  return (
    <div className="container h-full w-full bg-white flex justify-center">
      <div className="w-4/5 h-screen bg-white ml-32 my-20 rounded-xl flex items-center">
        <div className="w-1/2">
          {/* div for logo */}
          <Image src={logo} alt="" />
        </div>
        <div className="w-1/2">
          {/* div for form */}
          <div className="w-full px-3 tracking-wide text-black text-3xl mb-2 pt-20">
            <p className="font-semibold text-lg">Let's Join Us,</p>
            <p className="font-bold text-2xl">
              Our <span className="text-blue-500">Seeker</span>
            </p>
          </div>
          <form onSubmit={inputRegister}>
            <div className="w-full mr-10">
              <div>
                <input
                  type="text"
                  name="name"
                  className="mt-3 ml-4 mb-2 px-2 py-1 bg-white  placeholder-black placeholder-opacity-50 focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1"
                  placeholder="Username"
                />
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black placeholder-opacity-50 focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1"
                  placeholder="Password"
                />
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div>
                <input
                  type="password"
                  className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black placeholder-opacity-50 focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1"
                  placeholder="Confirm-Password"
                />
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black placeholder-opacity-50 focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1"
                  placeholder="Gmail"
                />
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div class="mb-4">
                <input
                  type="radio"
                  name="user"
                  className="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  User
                </label>
                <input
                  type="radio"
                  name="user"
                  className="w-4 h-4 ml-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Company
                </label>
              </div>

              <div className="w-1/2 ml-4 mb-2 text-gray-800">
                <SelectComp options={province} />
              </div>
              <div className="ml-4">
                {isLoading ? (
                  <Image src={Loader} />
                ) : (
                  <button
                    type="submit"
                    className="mt-3 mb-2 py-1 bg-blue-600 text-white rounded-2xl px-5"
                  >
                    Register
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

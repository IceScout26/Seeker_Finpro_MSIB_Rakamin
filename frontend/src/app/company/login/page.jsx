"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import Link from "next/link";
import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";
import Loader from "../../../../public/assets/loader/Sayap.gif";
import React, { useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState({
    msg: '',
    type: ''
  });
  async function sendTokenToLocalstorage(token) {
    console.log(token);
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    const dataToken = {
      token: token,
      date: today,
    };
    localStorage.setItem("tokenCompany", JSON.stringify(dataToken));
    console.log(JSON.parse(localStorage.getItem("tokenCompany")));
  }
  async function inputLogin(event) {
    event.preventDefault();
    setIsLoading(true);
    console.log(event);
    const formData = new URLSearchParams(new FormData(event.target));
    const inputData = await fetch("http://localhost:5000/authcompany/login", {
      method: "POST",
      headers: {
        Type: "application/json",
      },
      body: formData,
    });
    const data = await inputData.json();

    if (data.message.indexOf('failed') !== -1) {
      const notifData = {
        msg: data.message,
        type: 'error'
      }
      setNotif(notifData);   
    } else {
      const notifData = {
        msg: data.message,
        type: 'success'
      }
      setNotif(notifData)
      window.location.href = "http://localhost:3000/company/explore";
    }
    console.log(data);
    setIsLoading(false);
    sendTokenToLocalstorage(data.token);
  }

  return (
    <div className="container h-[calc(100vh-80px)] w-screen bg-white flex justify-center">
      <form
        onSubmit={inputLogin}
        className="w-4/5 h-full bg-white flex items-center"
      >
        <div className="flex items-center">
          <div className="w-2/4">
            <Image className="-translate-y-50" src={logo} alt="" />
          </div>
          <div className="w-2/4 flex flex-col gap-8">
            <div className="text-black text-3xl text-left">
              <p className="font-semibold text-3xl">Welcome,</p>
              <p className="font-bold text-4xl">
                Our <span className="text-blue-500">Seeker</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="text-2xl font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="bg-white focus:outline-none mt-2 block sm:text-lg w-full focus:bg-white"
                  placeholder="Input your email"
                />
                <div className="border-gray-300 border-b-2"></div>
              </div>
              <div className="">
                <label htmlFor="password" className="text-2xl font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="bg-white  placeholder-gray-400 focus:outline-none focus:border-white focus:ring-white block sm:text-lg focus:ring-1"
                  placeholder="Input your password"
                />
                <div className="border-gray-300 border-b-2"></div>
              </div>
            </div>
            {notif.msg.length ? (
              <div className={`${notif.type === 'error' ? 'bg-red-500' : 'bg-green-500'} flex justify-center text-white h-10 items-center rounded-lg mt-2`}>
                <p>{notif.msg}</p>
              </div>
            ) : (
              <div></div>
            )}

            <div className="text-left">
              {isLoading ? (
                <Image src={Loader} />
              ) : (
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-2xl px-9 py-2 mb-2"
                >
                  Login
                </button>
              )}
              <h1 className="">
                <span className="text-black-700">Don't have account ?</span>
                <Link href="/register"></Link>
                <button className="text-blue-500">Register</button>
              </h1>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

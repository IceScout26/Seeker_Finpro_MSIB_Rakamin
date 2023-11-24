'use client'
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import Link from "next/link";
import logo from "../../../public/assets/logo.webp";
import Image from "next/image";
import React from 'react'

export default function Login() {
  return (
    <div className="container h-full w-screen bg-yellow-800">
      <form className="w-4/5 h-screen bg-white items-center ml-32 mr-80 my-20 rounded-xl shadow-lg">
        <div className="w-full px-3">
          <div className="ml-12 tracking-wide text-black text-3xl mb-6 pt-20 pl-28 text-center">
            <p className="font-semibold text-3xl ml-9 mr-5 mb-3">Welcome,</p>
            <p className="font-bold text-4xl ml-16 mr-0">
              Our <span className="text-blue-500">Seeker</span>
            </p>
          </div>
        </div>
        <div className="flex h-96 items-center m-2 pb-5">
          <div className="w-2/4 mb-16 ml-10">
            {/* <p className="text-center my-24">
              IMAGE.JPG
            </p> */}
            <Image className="-translate-y-50" src={logo} alt="" />
          </div>
          <div className="w-2/4 mr-10">
            <div>
              <label for="email" className="text-2xl font-semibold ml-4">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="mt-3 ml-2 px-2 py-1 bg-white  placeholder-gray-400 focus:outline-none focus:border-white focus:ring-white block sm:text-lg focus:ring-1"
                placeholder="Input your email"
              />
              <div className="border-gray-300 border-b-2 ml-4 mr-7 mb-16"></div>
            </div>
            <div className="-mt-6">
              <label for="password" className="text-2xl font-semibold ml-4">
                Password
              </label>
              <input
                type="text"
                name="password"
                className="mt-3 ml-2 px-2 py-1 bg-white  placeholder-gray-400 focus:outline-none focus:border-white focus:ring-white block sm:text-lg focus:ring-1"
                placeholder="Input your password"
              />
              <div className="border-gray-300 border-b-2 ml-4 mr-7 mb-16"></div>
            </div>
            <div className="text-left -mt-12">
              <button className="mt-3 ml-4 mb-2 py-2 bg-blue-600 text-white rounded-2xl px-14">
                Login
              </button>
              <h1 className="ml-4 mt-3 mb-16">
                <span className="mr-3 text-black-700">
                  Don't have account ?
                </span>
                <Link href="/register"></Link>
                <button className="text-blue-500">Register</button>
              </h1>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

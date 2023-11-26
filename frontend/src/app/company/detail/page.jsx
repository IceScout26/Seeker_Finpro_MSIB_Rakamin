"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";
import Loader from "../../../../public/assets/loader/Sayap.gif";
import React, { useState } from "react";

export default function Detail() {
  return (
    <div className="container">
      <div className="w-full h-full bg-white">
        <div className="items-center px-5 pt-5 grid grid-rows-6">
          <div className="grid grid-cols-2 w-40">
            <div className="border-2 border-black h-20 w-20 flex items-center justify-center bg-gray-400">
              <h1 className="">FOTO</h1>
            </div>
            <div className="grid grid-rows-2 pl-4 w-40">
              <div className="grid items-end border-b border-black w-28">
                <h1 className="font-bold">PT COMPANY</h1>
              </div>
              <div>
                <p>Jakarta, West</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-10">
              <h2 className="font-semibold">Title</h2>
            </div>
            <div className="">
              <p>Frontend Developer - Fresh Graduate</p>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-32">
              <h2 className="font-semibold">Job Description</h2>
            </div>
            <div className="">
              <p>
                Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr
                stet dolor vero clita labore gubergren. Kasd sed ipsum elitr
                clita rebum ut sea diam tempor. Sadipscing nonumy vero labore
                invidunt dolor sed, eirmod dolore amet aliquyam consetetur
                lorem, amet elitr clita et sed consetetur dolore accusam. Vero
                kasd nonumy justo rebum stet. Ipsum amet sed lorem sea magna.
                Rebum vero dolores dolores elitr vero dolores magna, stet sea
                sadipscing stet et. Est voluptua et sanctus at sanctus erat vero
                sed sed, amet duo no diam clita rebum duo, accusam tempor
                takimata clita stet nonumy rebum est invidunt stet, dolor.
              </p>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-20">
              <h2 className="font-semibold">Expertise</h2>
            </div>
            <div className="">
              <p>Javascript</p>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-14">
              <h2 className="font-semibold">Salary</h2>
            </div>
            <div className="">
              <p>$100 - $200</p>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-20">
              <h2 className="font-semibold">Due Date</h2>
            </div>
            <div className="">
              <p>2023-10-11</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="border-2 border-black px-5 rounded-xl shadow-lg mb-8">
                Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";
import Loader from "../../../../public/assets/loader/Sayap.gif"
import React, { useState } from 'react'


export default function Experiences() {
  const [isLoading, setIsLoading] = useState(false)
  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true)
    console.log(event)
    const formData = new URLSearchParams (new FormData(event.target));
    const response = await fetch('http://localhost:5000/experiences/users', {
      method: 'POST',
      headers: {  
        'Type':'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjEsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAwNTcwMjM4LCJleHAiOjE3MDA2NTY2Mzh9.cmpjWHKAXZgD5vCQwd0iarxX79C0o4T1AinrZzeQl3A'
     },
      body: formData,
    })

    const data = await response.json()
    console.log(data.message)
    setTimeout(() => {
      setIsLoading(false)
      
    }, 3000);
  }
  return (
    <div className="w-full h-screen bg-white">
      <div className="container w-full h-full bg-white flex justify-center items-center">
        <div className="w-1/2">
          <div className="p-5">
            <div className="flex justify-center my-16">
              <h1 className="font-bold text-3xl">Experience Detail</h1>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">Position</div>
                <input
                  type="text"
                  className="border-gray-300 border-b-2 placeholder-black placeholder-opacity-50 focus:outline-none pl-2"
                  placeholder="Front End"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">Company Name</div>
                <input
                  type="text"
                  className="border-gray-300 border-b-2 placeholder-black placeholder-opacity-50 focus:outline-none pl-2"
                  placeholder="PT Rakamin Academy"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">Start</div>
                <input
                  type="text"
                  className="border-gray-300 border-b-2 placeholder-black placeholder-opacity-50 focus:outline-none pl-2"
                  placeholder="2019"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">End</div>
                <input
                  type="text"
                  className="border-gray-300 border-b-2 placeholder-black placeholder-opacity-50 focus:outline-none pl-2"
                  placeholder="2022"
                />
              </div>
              <div className="flex justify-center pt-10">
                <button className="mt-3 mb-2 py-1 bg-blue-600 text-white rounded-2xl px-5">
                    Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

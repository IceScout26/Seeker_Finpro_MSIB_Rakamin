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
    <div className="w-full h-[calc(100vh-80px)] bg-white">
      <div className="container w-full h-full bg-white flex justify-center items-center">
        <div className="w-1/2 border-2 border-black rounded-xl">
          <div className="p-5">
            <div className="flex justify-center my-10">
              <h1 className="font-bold">Experience Detail</h1>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-2">
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">Position</div>
                <input
                  name="position"
                  type="text"
                  className="border-2 border-black rounded-xl"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">Company Name</div>
                <input
                  name="company_name"
                  type="text"
                  className="border-2 border-black rounded-xl"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">Start</div>
                <input
                  name="start"
                  type="text"
                  className="border-2 border-black rounded-xl"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">End</div>
                <input
                  name="end"
                  type="text"
                  className="border-2 border-black rounded-xl"
                />
              </div>
              {/* <Image src={Loader} /> */}
              <div className="flex justify-center pt-10">
                {
                  isLoading ? <Image src={Loader} /> : <button
                  type="submit"
                  className="border-2 border-black rounded-xl px-2 shadow-xl"
                >
                  Confirm
                </button>

                }
                {/* <button
                  type="submit"
                  className="border-2 border-black rounded-xl px-2 shadow-xl"
                >
                  Confirm
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

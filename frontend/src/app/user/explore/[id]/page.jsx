"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";


export default function detailJob({ params }) {
    const [detailJob, setDetailJob] = useState({});
    async function getUserExploreById(){
        const API = await fetch(`http://localhost:5000/job/${params.id}`, {
        method: "GET",
        headers: {
          Type: "application/json",
        },
      });
      const data = await API.json();
      console.log(data);
      setDetailJob(data);
    }
    useEffect(() => {
        getUserExploreById()
      }, []);
  return (
    <div className="container">
      <div className="w-full h-full bg-white">
        <div className="items-center px-5 pt-5 grid grid-rows-6">
          <div className="grid grid-cols-2 w-40">
            <div className="border-2 border-black h-20 w-20 flex items-center justify-center bg-gray-400">
              {/* <h1 className="">{id}</h1> */}
            </div>
            <div className="grid grid-rows-2 pl-4 w-40">
              <div className="grid items-end border-b border-black w-28">
                <h1 className="font-bold">{detailJob.company_name}</h1>
              </div>
              <div>
                <p>{detailJob.city}</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-10">
              <h2 className="font-semibold">Title</h2>
            </div>
            <div className="">
              <p>{detailJob.title}</p>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-32">
              <h2 className="font-semibold">Job Description</h2>
            </div>
            <div className="">
              <p>
                {detailJob.description}
              </p>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-20">
              <h2 className="font-semibold">Expertise</h2>
            </div>
            <div className="">
              <p>{detailJob.expertise}</p>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-14">
              <h2 className="font-semibold">Salary</h2>
            </div>
            <div className="">
              <p>Rp. {detailJob.salary}</p>
            </div>
          </div>
          <div className="">
            <div className="border-b border-black w-20">
              <h2 className="font-semibold">Due Date</h2>
            </div>
            <div className="">
              <p>{detailJob.due_date}</p>
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

"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function detailJob({ params }) {
  const [detailJob, setDetailJob] = useState({});
  function formatDate(date) {
    const [year, month, day] = date.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthName = months[parseInt(month, 10) - 1];
    const formattedDate = `${year}, ${monthName} ${day}`;
    return formattedDate;
  }
  async function getJobById() {
    const API = await fetch(`https://backend.seekerjob.site/job/${params.id}`, {
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
    getJobById();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="w-full h-full bg-white flex justify-center">
        <div className="w-4/5">
          <div className="items-center px-5 pt-5 grid grid-rows-6">
            <div className="grid grid-cols-2 w-40">
              <div className="border-2 border-black h-20 w-20 flex items-center justify-center bg-gray-400">
              <Image src={detailJob.company_picture} width='200' height='200' />
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
                <p>{detailJob.description}</p>
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
                <p>{detailJob.due_date === undefined ? '' : formatDate(detailJob.due_date.split("T")[0])}</p>
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
    </div>
  );
}

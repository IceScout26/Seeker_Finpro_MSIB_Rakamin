"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import React, { useEffect, useState } from "react";
import Foto from "../../../../../public/assets/dev/harits.jpg"
import Image from "next/image";

export default function detailUser({ params }) {
  const [userDetail, setUserDetail] = useState({});
  function getLocalStorage() {
    const token = JSON.parse(localStorage.getItem("tokenCompany"));
    console.log(token);
    getUserExploreById(token);
  }
  async function getUserExploreById(token) {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    console.log(token.date);

    if (token.date === today) {
        const API = await fetch(
          `http://localhost:5000/profileusercompany/user/${params.id}`,
          {
            method: "GET",
            headers: {
              Type: "application/json",
              Authorization: `Bearer ${token.token}`,
            },
          }
        );
        const data = await API.json();
        console.log(data);
        setUserDetail(data);
    } else {
      window.location.href = "http://localhost:3000/company/login";
    }
  }
  useEffect(() => {
    getLocalStorage();
  }, []);
  return (
    <div className="container">
      <div className="w-full h-full bg-white">
        <div className="items-center px-5 pt-5 grid grid-rows-6">
          <div className="grid grid-cols-2 w-40">
            <div className="border-2 border-black h-20 w-20 flex items-center justify-center bg-gray-400">
              <Image src={Foto} />
            </div>
            <div className="grid grid-rows-2 pl-4 w-40">
              <div className="grid items-end border-b border-black w-full">
                <h1 className="font-bold">{userDetail.name}</h1>
              </div>
              <div>
                <p>{userDetail.city}</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <h2 className="font-semibold">Description</h2>
            </div>
            <div className="">
              <p>
                {userDetail.description}
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="font-semibold">Skills</h2>
            <div className="">
              <p>{userDetail.skill_name}</p>
            </div>
          </div>
          <div className="">
            <h2 className="font-semibold">Experience</h2>
            <div className="">
              <p>
                {userDetail.experience_company}
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="font-semibold">Curiculum Vitae</h2>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 41 41"
                fill="none"
              >
                <path
                  d="M22.2083 11.9583L20.3026 8.1469C19.7541 7.04996 19.4799 6.50146 19.0707 6.10074C18.7089 5.74637 18.2728 5.47687 17.7941 5.31174C17.2527 5.125 16.6395 5.125 15.413 5.125H8.88329C6.96978 5.125 6.01302 5.125 5.28216 5.49739C4.63927 5.82496 4.11659 6.34765 3.78902 6.99053C3.41663 7.7214 3.41663 8.67815 3.41663 10.5917V11.9583M3.41663 11.9583H29.3833C32.2536 11.9583 33.6887 11.9583 34.785 12.5169C35.7493 13.0083 36.5333 13.7923 37.0247 14.7566C37.5833 15.8529 37.5833 17.2881 37.5833 20.1583V27.675C37.5833 30.5453 37.5833 31.9804 37.0247 33.0767C36.5333 34.041 35.7493 34.8251 34.785 35.3164C33.6887 35.875 32.2536 35.875 29.3833 35.875H11.6166C8.74636 35.875 7.31122 35.875 6.21492 35.3164C5.25059 34.8251 4.46657 34.041 3.97522 33.0767C3.41663 31.9804 3.41663 30.5453 3.41663 27.675V11.9583ZM15.375 23.9167L20.5 29.0417M20.5 29.0417L25.625 23.9167M20.5 29.0417V18.7917"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                {userDetail.cv}
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="font-semibold">Contact</h2>
            <div className="">
              <p>{userDetail.email}</p>
            </div>
            <div className="">
              <p>{userDetail.education_name}</p>
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

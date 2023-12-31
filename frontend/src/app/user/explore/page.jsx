"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function userExplore() {
  const [exploreData, setExploreData] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [token, settoken] = useState({});
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
  function getLocalStorage() {
    const pass = JSON.parse(localStorage.getItem("token"));
    settoken(pass)
    getUserExplore(pass);
    return pass;
  }
  async function getUserByTitle(event) {
    setSearchTitle(event.target.value)
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    console.log(token.date);
    if (token.date === today) {
      setTimeout( async () => {
        
        const API = await fetch(
          `https://backend.seekerjob.site/jobuser/user/search/${searchTitle}`,
          {
            method: "GET",
            headers: {
              Type: "application/json",
              Authorization: `Bearer ${token.token}`
            },
          }
        );
        const data = await API.json();
        setExploreData(data);
        console.log(data);
      }, 2000);
    } else {
      window.location.href = "http://localhost:3000/user/login";
    }
  }
  async function getUserExplore(token) {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    console.log(token.date);
    if (token.date === today) {
      const API = await fetch("https://backend.seekerjob.site/job", {
        method: "GET",
        headers: {
          Type: "application/json",
        },
      });
      const data = await API.json();
      setExploreData(data);
      console.log(data);
    } else {
      window.location.href = "http://localhost:3000/user/login";
    }
  }
  useEffect(() => {
    getLocalStorage();
  }, []);
  return (
    <div className="container h-full w-screen bg-white pb-16 grid place-items-center">
      <div className="pb-16 w-full flex justify-center">
        <input
          type="text"
          onChange={(e) => getUserByTitle(e)} value={searchTitle}
          className="h-11 w-1/4 mt-10 rounded-3xl placeholder:italic placeholder:text-slate-400 block bg-white border-black border-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search by Title..."
        />
      </div>
      <div className="w-4/5 flex justify-center">
        <div className="grid grid-cols-3 gap-8 place-items-center">
          {exploreData.map((explore, id) => {
            return (
              <Link
                href={`/user/explore/${explore.id}`}
                key={id}
                className="w-96 row p-9 text-brown-gerry rounded-lg border border-black border-opacity-25 cursor-pointer mr-4"
              >
                <div className="flex justify-between mb-2">
                  <h1 className="text-base font-semibold ml-1 text-blue-harits-dark">
                    {explore.company_name}
                  </h1>
                  <h2 className="text-xs ml-0 mt-2 text-blue-harits-dark">
                    Rp.{explore.salary}
                  </h2>
                </div>
                <div className="flex">
                  <div className="h-24 w-24 rounded-lg border-2 bg-gray-400 items-center flex justify-center">
                    <Image
                      src={explore.company_picture}
                      width="200"
                      height="200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className=" ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="32"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M12 17L15 20L20 13M28 16C28 17.6907 27.16 19.1867 25.876 20.0907C26.0143 20.881 25.9602 21.6931 25.7181 22.4581C25.476 23.2231 25.0532 23.9184 24.4853 24.4853C23.9184 25.0532 23.2231 25.476 22.4581 25.7181C21.6931 25.9602 20.881 26.0143 20.0907 25.876C19.6296 26.5326 19.0171 27.0685 18.3051 27.4382C17.593 27.808 16.8023 28.0007 16 28C14.3093 28 12.8133 27.16 11.9093 25.876C11.119 26.0142 10.307 25.96 9.54198 25.7179C8.77702 25.4759 8.08163 25.0531 7.51467 24.4853C6.94683 23.9184 6.52397 23.2231 6.2819 22.4581C6.03982 21.6931 5.98566 20.881 6.124 20.0907C5.46736 19.6296 4.9315 19.0171 4.56177 18.3051C4.19204 17.593 3.99935 16.8023 4 16C4 14.3093 4.84 12.8133 6.124 11.9093C5.98566 11.119 6.03982 10.3069 6.2819 9.54193C6.52397 8.77695 6.94683 8.08156 7.51467 7.51467C8.08163 6.94693 8.77702 6.52413 9.54198 6.28206C10.307 6.03999 11.119 5.98577 11.9093 6.124C12.3705 5.46745 12.983 4.93164 13.695 4.56192C14.4071 4.1922 15.1977 3.99946 16 4C17.6907 4 19.1867 4.84 20.0907 6.124C20.881 5.98577 21.6931 6.03999 22.458 6.28206C23.223 6.52413 23.9184 6.94693 24.4853 7.51467C25.0531 8.08163 25.4759 8.77702 25.7179 9.54198C25.96 10.307 26.0142 11.119 25.876 11.9093C26.5326 12.3704 27.0685 12.9829 27.4382 13.6949C27.808 14.407 28.0007 15.1977 28 16Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>
                        <h1 className="text-sm font-semibold ml-9 -mt-7 mb-0 text-blue-harits-dark">
                          {explore.title}
                        </h1>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="32"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M20 14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18C14.9391 18 13.9217 17.5786 13.1716 16.8284C12.4214 16.0783 12 15.0609 12 14C12 12.9391 12.4214 11.9217 13.1716 11.1716C13.9217 10.4214 14.9391 10 16 10C17.0609 10 18.0783 10.4214 18.8284 11.1716C19.5786 11.9217 20 12.9391 20 14Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26 14C26 23.5227 16 29 16 29C16 29 6 23.5227 6 14C6 11.3478 7.05357 8.8043 8.92893 6.92893C10.8043 5.05357 13.3478 4 16 4C18.6522 4 21.1957 5.05357 23.0711 6.92893C24.9464 8.8043 26 11.3478 26 14Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>
                        <h1 className="text-sm font-semibold ml-9 -mt-7 mb-0 text-blue-harits-dark">
                          {explore.city}
                        </h1>
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="32"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>
                        <h1 className="text-xs font-semibold ml-9 -mt-7 mb-0 text-blue-harits-dark opacity-60">
                          {formatDate(explore.due_date.split("T")[0])}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

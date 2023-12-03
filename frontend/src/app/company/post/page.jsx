'use client'

import Loader from "../../../../public/assets/loader/Sayap.gif";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CompanyJob() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState();
  const [notif, setNotif] = useState({
    msg: '',
    type: ''
  });
  function getLocalStorage() {
    const token = JSON.parse(localStorage.getItem("tokenCompany"));
    setToken(token)
    console.log(token);
  }
  async function postJob(event) {
    setIsLoading(true)
    event.preventDefault();
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    console.log(token.date);
    if (token.date === today) {
      const formData = new URLSearchParams(new FormData(event.target));
      const inputPost = await fetch("https://backend.seekerjob.site/jobcompany/company", {
        method: "POST",
        headers: {
          Type: "application/json",
          Authorization: `Bearer ${token.token}`,
        },
        body: formData,
      });
      const data = await inputPost.json();
      console.log(data);
      if (data.message.indexOf('succesfully') === -1) {
        const notifPost = {
          msg: data.message,
          type: 'success'
        }
        setNotif(notifPost);
        window.location.href = "http://localhost:3000/company/home";
      } else {
        const notifPost = {
          msg: data.message,
          type: 'error'
        }
        setNotif(notifPost)
      }
    } else {
      window.location.href = "http://localhost:3000/company/login"
    }
    setIsLoading(false)

  }
  useEffect(() => {
    getLocalStorage();
  }, []);
  return (
    <div className="container h-full w-full bg-white">
      <div className="grid grid-rows-4 grid-flow-col gap-4 h-full w-full">
        <form
        onSubmit={postJob}        
        className="flex flex-col gap-2">
          <div className="text-justify m-20">
            <div className="text-2xl font-semibold text-gray-800">Title</div>
            <input
              name="title"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Judul"
              required
            />

            <div className="pt-5 text-2xl font-semibold text-gray-800">
              Job Description
            </div>
            <div className="mt-2">
              <textarea
                name="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full h-32 p-2.5 "
                placeholder="Description"
                required
              ></textarea>
            </div>
            <div className="pt-5 text-2xl font-semibold text-gray-800">
              Expertise
            </div>
            <div className="mt-2">
              <textarea
                name="expertise"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full h-32 p-2.5 "
                placeholder="Expertise"
                required
              ></textarea>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-2xl font-semibold text-gray-800 leading-6 "
                >
                  Salary
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="salary"
                    id="first-name"
                    autoComplete="given-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-2xl font-semibold text-gray-800 leading-6"
                >
                  Due Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="due_date"
                    id="last-name"
                    autoComplete="family-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">

          {notif.msg.length ? (
              <div className={`${notif.type === 'error' ? 'bg-red-500' : 'bg-green-500'} flex justify-center text-white h-10 w-1/4 items-center rounded-lg mt-2`}>
                <p>{notif.msg}</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="flex justify-center pt-10">
            {isLoading ? (
              <Image src={Loader} />
            ) : (

            <button
              type="submit"
              className="bg-blue-600 text-white rounded-2xl px-9 py-2 mb-2"
            >
              Apply
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

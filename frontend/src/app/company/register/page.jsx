"use client";
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from '../../../../public/assets/logo.webp'
import Image from 'next/image'
import SelectComp from '../../../components/select.jsx'
import Loader from "../../../../public/assets/loader/Sayap.gif"
import { getProvinces } from '../../../lib/city.js'
import React, { useEffect, useState } from 'react'

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [province, setProvince] = useState({})
  const [notif, setNotif] = useState({
    msg: '',
    type: ''
  });
  async function inputRegister(event) {
    event.preventDefault();
    setIsLoading(true)
    console.log(event)
    const formData = new URLSearchParams (new FormData(event.target))
    const inputData = await fetch('https://backend.seekerjob.site/authcompany/register', {
      method: "POST",
      headers: {
        Type: "application/json",
      },
        body: formData,
    });
    const data = await inputData.json();
    console.log(data)

    if (data.message.indexOf('already registered') !== -1) {
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
      window.location.href = "http://localhost:3000/company/login";
    }
    setIsLoading(false);
    console.log(data);
  }
  useEffect(() => {
    const renderList = async () => {
      const provinces = await getProvinces();
      setProvince(provinces.map(province =>({label:province.name, value:province.name})))
    }
    renderList()
    console.log(renderList())
  }, []);

  return (
    <div className="container h-full w-full bg-white flex justify-center">
      <div className="w-4/5 h-screen bg-white ml-32 my-20 rounded-xl flex items-center">
        <div className='w-1/2'>
          {/* div for logo */}
          <Image
                src={logo}
                alt=""
              />
        </div>
        <div className='w-1/2'>
          {/* div for form */}
          <div className="w-full px-3 tracking-wide text-black text-3xl mb-2 pt-20">
              <p className="font-semibold text-lg">Let's Join Us,</p>
              <p className="font-bold text-2xl">Our <span className="text-blue-500">Seeker</span></p>
          </div>
          <form onSubmit={inputRegister}>
            <div className="w-full mr-10">
              <div>
                <input type="text" name='name' className="mt-3 ml-4 mb-2 px-2 py-1 bg-white  placeholder-black placeholder-opacity-50 focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="Username"/>
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div>
                <input type="password" name='password' className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="Password"/>
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div>
                <input type="password" className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="Confirm-Password"/>
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div>
                <input type="email" name='email' className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="Gmail"/>
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div name='city' className='w-1/2 text-gray-800'>
                <SelectComp options={province} />
              </div>
              {notif.msg.length ? (
              <div className={`${notif.type === 'error' ? 'bg-yellow-rizky' : 'bg-green-500'} flex justify-center text-white h-10 items-center rounded-lg mt-2`}>
                <p>
                  {notif.msg}
                </p>
              </div>
              ) : (
                <div></div>
              )}
              <div className="">
                {
                  isLoading ? <Image src={Loader} /> :
                <button type='submit' className="mt-3 mb-2 py-1 bg-blue-600 text-white rounded-2xl px-5">
                  Register
                </button>
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

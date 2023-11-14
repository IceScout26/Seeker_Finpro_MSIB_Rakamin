'use client'
/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import { useState, useEffect } from 'react'
import logo from './assets/logo.webp'
import Image from 'next/image'
import Select from 'react-select'
import { getProvinces } from '../lib/city'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const Register = () => {
  const [provinces, setProvinces] = useState()
  
  useEffect(() => {
    async function handleApi(){
      const result = await getProvinces()
      // const responses = await result.json()
      setProvinces(result)
      console.log(result)
    } 
    handleApi()
  }, []);
  const renderList = () => {
    return (provinces.map(province =>({label:province.Name,value:province.value})))
   }
  return (
    <div className="container h-full w-screen">
      <div className="w-4/5 h-screen bg-white ml-32 my-20 rounded-xl shadow-lg flex items-center">
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
          <form action="">
            <div className="w-full mr-10">
              <div>
                <input type="text" className="mt-3 ml-4 mb-2 px-2 py-1 bg-white  placeholder-black placeholder-opacity-50 focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="Username"/>
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div>
                <input type="password" className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="Password"/>
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div>
                <input type="password" className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="Confirm-Password"/>
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div>
                <input type="email" className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="Gmail"/>
                <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
              </div>
              <div className='w-1/2'>
                <Select options={renderList()} />
              </div>
              <div className="">
                <button className="mt-3 mb-2 py-1 bg-blue-600 text-white rounded-2xl px-5">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

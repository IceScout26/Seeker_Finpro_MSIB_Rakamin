/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";
import dhimas from "../../../../public/assets/dev/dhimas.jpg"

export default function Profile() {
  return (
    <div className="container relative w-full h-full bg-white pb-10">
      <div
        className="h-72 w-screen bg-cover bg-right contrast-150 border-b-4 border-gray-400 text-blue-harits-dark font-bold text-8xl flex items-center justify-center"
        style={{ backgroundImage: `url('../../assets/LP/hero-bg.jpg')` }}
      >
      </div>
      <div className="flex justify-center text-center mt-10">
        <div className="flex flex-col">
          <div className="absolute text-center top-32 left-1/2 -translate-x-1/2">
            <Image className="border-2 border-gray-400 h-52 w-52 rounded-full" src={dhimas}/>
          </div>
          <div className="mt-4 font-bold">Dhimas Tyas</div>
          <div className="mt-4 font-semibold">Level 4</div>
          <div className="mt-4">
            <button className="border border-gray-300 px-3 rounded-lg">
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-3/6 py-10 rounded-lg flex justify-center mt-10 border border-black border-opacity-25">
          <form className="grid grid-rows-7 gap-4 justify-center w-4/5">
            {/* Firstname - Lastname */}
            <div className="grid grid-cols-2 gap-6">
              <div className="grid grid-rows-2">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md"
                />
              </div>
              <div className="grid grid-rows-2">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md"
                />
              </div>
            </div>
            {/* Email */}
            <div className="grid grid-rows-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="border-2 border-gray-300 rounded-md"
              />
            </div>
            {/* Description */}
            <div className="flex flex-col">
              <label htmlFor="">Description</label>
              <input
                type="textarea"
                className="border-2 border-gray-300 h-20 rounded-md"
              />
            </div>
            {/* Birthday - City */}
            <div className="grid grid-cols-2 gap-6">
              <div className="grid grid-rows-2">
                <label htmlFor="">Birthday</label>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md"
                />
              </div>
              <div className="grid grid-rows-2">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md"
                />
              </div>
            </div>
            {/* Curriculum Vitae */}
            <div className=" grid grid-rows-2">
              <label htmlFor="">Curriculum Vitae</label>
              <input
                type="textarea"
                className="border-2 border-gray-300 rounded-md"
              />
            </div>
            {/* Skills */}
            <div className=" grid grid-rows-2">
              <label htmlFor="">Skills</label>
              <input
                type="textarea"
                className="border-2 border-gray-300 rounded-md"
              />
            </div>
            {/* Education - Experience - Button Apply */}
            <div className="flex justify-between">
              <div className="grid grid-rows-2">
                <label htmlFor="">Education</label>
                <a
                  href="/user/education"
                  className="border-2 border-gray-300 text-center rounded-md"
                >
                  click
                </a>
              </div>
              <div className="grid grid-rows-2">
                <label htmlFor="">Experience</label>
                <a
                  href="/user/experience"
                  className="border-2 border-gray-300 text-center rounded-md"
                >
                  click
                </a>
              </div>
              <div className="mt-5">
                <button className="bg-blue-harits text-white border border-black px-6 rounded-xl">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

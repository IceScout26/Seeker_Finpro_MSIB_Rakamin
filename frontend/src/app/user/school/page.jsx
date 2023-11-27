/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";

export default async function School() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="container w-full h-full bg-white flex justify-center items-center">
        <div className="w-1/2">
          <div className="p-5">
            <div className="flex justify-center my-16">
              <h1 className="font-bold text-3xl">School Detail</h1>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">School Name</div>
                <input
                  type="text"
                  className="border-gray-300 border-b-2 placeholder-black placeholder-opacity-50 focus:outline-none pl-2"
                  placeholder="SMA 1 Jakarta"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">GPA</div>
                <input
                  type="text"
                  className="border-gray-300 border-b-2 placeholder-black placeholder-opacity-50 focus:outline-none pl-2"
                  placeholder="3.7"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">Major</div>
                <input
                  type="text"
                  className="border-gray-300 border-b-2 placeholder-black placeholder-opacity-50 focus:outline-none pl-2"
                  placeholder="Sistem Informasi"
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

/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";

export default async function Explore() {
  return (
    <div className="container h-full w-full bg-white">
      <div className="h-28 flex justify-center">
        <input
          type="text"
          className="h-11 w-2/4 mt-10 rounded-3xl placeholder:italic placeholder:text-slate-400 block bg-white border-black border-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
        />
      </div>
      <div className="container">
        <div className="flex justify-center mb-3">
          <div className="h-24 w-5/6 border-2 border-black rounded-2xl bg-gray-100 shadow-xl cursor-pointer">
            <div className="grid grid-cols-3">
              <div className="h-16 w-16 border-2 border-black bg-slate-200 ml-4 mt-4 text-center">
                FOTO
              </div>
              <div className="grid grid-rows-3 ml-[-260px] mt-2">
                <div className="font-bold">Muhammad Iqbal</div>
                <div>Javascript, PHP, TailwindCSS, React, Next.js</div>
                <div>Bandung, West</div>
              </div>
              <div className="border-2 border-black text-center w-14 h-14 ml-64 mt-5 rounded-full pt-2 text-2xl">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="h-24 w-5/6 border-2 border-black rounded-2xl bg-gray-100 shadow-xl cursor-pointer">
            <div className="grid grid-cols-3">
              <div className="h-16 w-16 border-2 border-black bg-slate-200 ml-4 mt-4 text-center">
                FOTO
              </div>
              <div className="grid grid-rows-3 ml-[-260px] mt-2">
                <div className="font-bold">harits Taqiy</div>
                <div>Javascript, PHP, TailwindCSS, React, Next.js</div>
                <div>Depok, West</div>
              </div>
              <div className="border-2 border-black text-center w-14 h-14 ml-64 mt-5 rounded-full pt-2 text-2xl">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="h-24 w-5/6 border-2 border-black rounded-2xl bg-gray-100 shadow-xl cursor-pointer">
            <div className="grid grid-cols-3">
              <div className="h-16 w-16 border-2 border-black bg-slate-200 ml-4 mt-4 text-center">
                FOTO
              </div>
              <div className="grid grid-rows-3 ml-[-260px] mt-2">
                <div className="font-bold">Dhimas</div>
                <div>Javascript, PHP, TailwindCSS, React, Next.js</div>
                <div>Jakarta, West</div>
              </div>
              <div className="border-2 border-black text-center w-14 h-14 ml-64 mt-5 rounded-full pt-2 text-2xl">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="h-24 w-5/6 border-2 border-black rounded-2xl bg-gray-100 shadow-xl cursor-pointer">
            <div className="grid grid-cols-3">
              <div className="h-16 w-16 border-2 border-black bg-slate-200 ml-4 mt-4 text-center">
                FOTO
              </div>
              <div className="grid grid-rows-3 ml-[-260px] mt-2">
                <div className="font-bold">Gerry</div>
                <div>Javascript, PHP, TailwindCSS, React, Next.js</div>
                <div>Bandung, West</div>
              </div>
              <div className="border-2 border-black text-center w-14 h-14 ml-64 mt-5 rounded-full pt-2 text-2xl">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="h-24 w-5/6 border-2 border-black rounded-2xl bg-gray-100 shadow-xl cursor-pointer">
            <div className="grid grid-cols-3">
              <div className="h-16 w-16 border-2 border-black bg-slate-200 ml-4 mt-4 text-center">
                FOTO
              </div>
              <div className="grid grid-rows-3 ml-[-260px] mt-2">
                <div className="font-bold">Dafa Wira Yuda</div>
                <div>Javascript, PHP, TailwindCSS, React, Next.js</div>
                <div>Jakarta, West</div>
              </div>
              <div className="border-2 border-black text-center w-14 h-14 ml-64 mt-5 rounded-full pt-2 text-2xl">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="h-24 w-5/6 border-2 border-black rounded-2xl bg-gray-100 shadow-xl cursor-pointer">
            <div className="grid grid-cols-3">
              <div className="h-16 w-16 border-2 border-black bg-slate-200 ml-4 mt-4 text-center">
                FOTO
              </div>
              <div className="grid grid-rows-3 ml-[-260px] mt-2">
                <div className="font-bold">Elbert</div>
                <div>Javascript, PHP, TailwindCSS, React, Next.js</div>
                <div>Bandung, West</div>
              </div>
              <div className="border-2 border-black text-center w-14 h-14 ml-64 mt-5 rounded-full pt-2 text-2xl">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="h-24 w-5/6 border-2 border-black rounded-2xl bg-gray-100 shadow-xl cursor-pointer">
            <div className="grid grid-cols-3">
              <div className="h-16 w-16 border-2 border-black bg-slate-200 ml-4 mt-4 text-center">
                FOTO
              </div>
              <div className="grid grid-rows-3 ml-[-260px] mt-2">
                <div className="font-bold">Risky Hadi</div>
                <div>Javascript, PHP, TailwindCSS, React, Next.js</div>
                <div>Bandung, West</div>
              </div>
              <div className="border-2 border-black text-center w-14 h-14 ml-64 mt-5 rounded-full pt-2 text-2xl">
                5
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="h-24 w-5/6 border-2 border-black rounded-2xl bg-gray-100 shadow-xl cursor-pointer">
            <div className="grid grid-cols-3">
              <div className="h-16 w-16 border-2 border-black bg-slate-200 ml-4 mt-4 text-center">
                FOTO
              </div>
              <div className="grid grid-rows-3 ml-[-260px] mt-2">
                <div className="font-bold">Gerry</div>
                <div>Javascript, PHP, TailwindCSS, React, Next.js</div>
                <div>Bandung, West</div>
              </div>
              <div className="border-2 border-black text-center w-14 h-14 ml-64 mt-5 rounded-full pt-2 text-2xl">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

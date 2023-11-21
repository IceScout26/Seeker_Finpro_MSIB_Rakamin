/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "../../../../public/assets/logo.webp";
import Image from "next/image";

export default async function School() {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-white">
      <div className="container w-full h-full bg-white flex justify-center items-center">
        <div className="w-1/2 border-2 border-black rounded-xl">
          <div className="p-5">
            <div className="flex justify-center my-10">
              <h1 className="font-bold">School Detail</h1>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">School Name</div>
                <input
                  type="text"
                  className="border-2 border-black rounded-xl"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">GPA</div>
                <input
                  type="text"
                  className="border-2 border-black rounded-xl"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">Major</div>
                <input
                  type="text"
                  className="border-2 border-black rounded-xl"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">Start</div>
                <input
                  type="text"
                  className="border-2 border-black rounded-xl"
                />
              </div>
              <div className="h-8 grid grid-cols-2">
                <div className="flex justify-start">End</div>
                <input
                  type="text"
                  className="border-2 border-black rounded-xl"
                />
              </div>
              <div className="flex justify-center pt-10">
                <button className="border-2 border-black rounded-xl px-2 shadow-xl">
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

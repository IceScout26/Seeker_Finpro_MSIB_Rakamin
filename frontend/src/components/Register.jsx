/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from "./assets/logo.webp"

export const Register = () => {
  return (
    <div className="container h-full w-screen bg-gray-800">
      <form className="w-4/5 h-screen bg-white items-center ml-24 my-20 rounded-xl shadow-lg">
          <div className="w-full px-3">
            <div
              className="ml-12 tracking-wide text-black text-3xl mb-2 pt-20 pl-28 text-center"
            >
              <p className="font-semibold text-lg">Let's Join Us,</p>
              <p className="font-bold text-2xl">Our <span className="text-blue-500">Seeker</span></p>
            </div>
          </div>
          <div className=" flex h-96 m-2 pb-5">
           <div className="w-2/4 mb-16 ml-10 bg-slate-300">
            {/* <p className="text-center my-24">
              IMAGE.JPG
            </p> */}
            <img src="{logo}" className="w-full h-full" />
           </div>
          <div className="w-2/4 mr-10">
            <div>
              <input type="text" className="mt-3 ml-4 mb-2 px-2 py-1 bg-white  placeholder-black focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="Username"/>
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
            <div>
              <input type="text" className="mt-3 ml-4 mb-2 px-2 py-1 bg-white placeholder-black focus:outline-none focus:border-white focus:ring-white block sm:text-xs focus:ring-1" placeholder="City"/>
              <div className="border-gray-300 border-b-2 ml-3 mr-7"></div>
            </div>
            <div className="text-center">
              <button className="mt-3 ml-4 mb-2 px-2 py-1 bg-blue-600 text-white rounded-2xl px-5">
                Register
              </button>
            </div>
          </div>
        </div> 
      </form>
    </div>
  );
};

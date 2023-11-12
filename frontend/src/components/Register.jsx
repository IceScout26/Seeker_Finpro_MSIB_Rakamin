/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

export const Register = () => {
  return (
    <div className="container h-screen w-screen">
      <form className="w-full">
          <div className="w-full px-3">
            <div
              className="block ml-12 tracking-wide text-black text-3xl mb-2"
              for="grid-password"
            >
              <p>Let's Join Us,</p>
              <p>Our Seeker</p>
            </div>
          </div>
          <div className=" flex h-80 m-2">
           <div className="border-black border-y-2 border-l-2 w-2/4 ml-10 bg-slate-300">
            <p className="text-center my-24">
              IMAGE.JPG
            </p>
           </div>
          <div className="border-black border-2 w-2/4 mr-10">
            <div>
              <input type="text" className="mt-3 ml-4 mb-2 px-2 py-1 bg-slate-300 border shadow-sm placeholder-black focus:outline-none focus:border-sky-500 focus:ring-black block sm:text-xs focus:ring-1" placeholder="Username"/>
              <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
            </div>
            <div>
              <input type="password" className="mt-3 ml-4 mb-2 px-2 py-1 bg-slate-300 border shadow-sm placeholder-black focus:outline-none focus:border-sky-500 focus:ring-black block sm:text-xs focus:ring-1" placeholder="Password"/>
              <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
            </div>
            <div>
              <input type="password" className="mt-3 ml-4 mb-2 px-2 py-1 bg-slate-300 border shadow-sm placeholder-black focus:outline-none focus:border-sky-500 focus:ring-black block sm:text-xs focus:ring-1" placeholder="Confirm-Password"/>
              <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
            </div>
            <div>
              <input type="email" className="mt-3 ml-4 mb-2 px-2 py-1 bg-slate-300 border shadow-sm placeholder-black focus:outline-none focus:border-sky-500 focus:ring-black block sm:text-xs focus:ring-1" placeholder="Gmail"/>
              <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
            </div>
            <div>
              <input type="text" className="mt-3 ml-4 mb-2 px-2 py-1 bg-slate-300 border shadow-sm placeholder-black focus:outline-none focus:border-sky-500 focus:ring-black block sm:text-xs focus:ring-1" placeholder="City"/>
              <div className="border-gray-300 border-b-2 ml-3 mr-7 mb-4"></div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-slate-300 mr-2 px-4 py-1 text-xs rounded-lg">
            Confirm
          </button>
          <button className="bg-slate-200 px-6 py-1 text-xs rounded-lg">
            Login
          </button>
          </div>  
      </form>
    </div>
  );
};

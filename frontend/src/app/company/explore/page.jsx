/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from '../../../../public/assets/logo.webp'
import Image from 'next/image'

export default async function Explore() {

  return (
    <div className="container h-full w-full bg-white">
      <div className='w-full h-28 flex justify-center'>
        <input type="text" className='h-11 w-2/4 mt-10 rounded-xl placeholder:italic placeholder:text-slate-400 block bg-white border border-black py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Search for anything..." />
      </div>
      <div className='grid grid-cols-2 gap-4 h-60 w-full'>
        <div className='h-full bg-white ml-5 rounded-lg shadow-lg border border-black'></div>
        <div className='h-full bg-white mr-5 rounded-lg shadow-lg border border-black'></div>
      </div>
      <div className='grid grid-cols-2 gap-4 h-60 w-full mt-5'>
        <div className='h-full bg-white ml-5 rounded-lg shadow-lg border border-black'></div>
        <div className='h-full bg-white mr-5 rounded-lg shadow-lg border border-black'></div>
      </div>
    </div>
  );
};

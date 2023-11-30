/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import logo from '../../../../public/assets/logo.webp'
import Image from 'next/image'

export default function companyProfile() {

    return (
        <div className="container h-full w-full bg-white">
            <div className='grid grid-rows-4 place-content-center grid-flow-col gap-4 h-full w-full'>
                <div className="text-center mt-28">
                    <h1 className="text-2xl font-semibold text-gray-800">Company Profile</h1>
                </div>
                <div className='border-2 border-gray-500 p-20 -mt-28 h-48 max-w-md mx-auto rounded-md'>
                    <label for="fileInput" className="cursor-pointer">
                        <input type="file" id="fileInput" className="hidden" />
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                className="h-8 w-8">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                            </svg>
                        </div>
                    </label>
                </div>
                <div>
                    <div className='h-9 -mt-32'>
                        <label for="name" className="text-1xl font-sans ml-0">Name <span className='pl-10'>:</span></label>
                        <input className='ml-2 w-5/6 focus:outline-none' type="text" id="name" name="name" />
                        <div className="border-black opacity-50 border-b-2 ml-0 mr-16 mb-0"></div>
                    </div>
                    <div className='h-9'>
                        <label for="name" className="text-1xl font-sans ml-0">Email <span className='pl-11'>:</span></label>
                        <input className='ml-2 w-5/6 focus:outline-none' type="text" id="name" name="name" />
                        <div className="border-black opacity-50 border-b-2 ml-0 mr-16 mb-0"></div>
                    </div>
                    <div className='h-9'>
                        <label for="name" className="text-1xl font-sans ml-0">City <span className='pl-14'>:</span></label>
                        <input className='ml-2 w-5/6 focus:outline-none' type="text" id="name" name="name" />
                        <div className="border-black opacity-50 border-b-2 ml-0 mr-16 mb-0"></div>
                    </div>
                    <div>
                        <div>
                            <label for="name" className="text-1xl font-sans ml-0">Description <span className='pl-1'>:</span></label>
                        </div>
                        <div className=' h-24'>
                            <textarea className='ml-2 w-5/6 focus:outline-none' type="text" id="name" name="name" />
                        </div>
                        <div className="border-black opacity-50 border-b-2 ml-0 mr-16 mb-0 mt-5"></div>
                    </div>
                    <div className='flex justify-center items-end h-32 px-80'>
                        <button className=" hover:bg-gray-300 text-black shadow-lg shadow-black border-2 text-lg font-sans py-1 px-7 rounded-full mt-4">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

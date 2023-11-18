import Image from "next/image";
import seekerLogo from "../../public/assets/images/sidebar/seeker-logo1.svg";
import dashboard from "../../public/assets/images/sidebar/dashboard.svg";
import leaderBoard from "../../public/assets/images/sidebar/leaderBoard.svg";
import order from "../../public/assets/images/sidebar/shopping-cart.svg";
import product from "../../public/assets/images/sidebar/product.svg";
import salesReport from "../../public/assets/images/sidebar/salesReports.svg";
import message from "../../public/assets/images/sidebar/message.svg";
import settings from "../../public/assets/images/sidebar/settings.svg";
import signOut from "../../public/assets/images/sidebar/signOut.svg";

export const Navigation = () => {
  return (
    <div className="container h-screen w-screen">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-6 lg:px-6 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://www.yominovel.site" className="flex ms-2 md:me-24">
                <Image src={seekerLogo} alt="" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Seeker
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  {/* <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="#"
                      alt="user photo"
                    ></img>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-100 w-64 h-screen pt-20 transition-transform -translate-x-full bg-slate-800 bg-opacity-50 border-r border-gray-800 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-800"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-5 overflow-y-auto bg-slate-700 bg-opacity-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
              >
                <Image src={dashboard} alt="" />

                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
              >
                <Image src={leaderBoard} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  LeaderBoard
                </span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
              >
                <Image src={order} alt="" />

                <span className="flex-1 ms-3 whitespace-nowrap">Order</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
              >
                <Image src={product} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
              >
                <Image src={salesReport} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Sales Report
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
              >
                <Image src={message} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Messages</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
              >
                <Image src={settings} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
              >
                <Image src={signOut} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

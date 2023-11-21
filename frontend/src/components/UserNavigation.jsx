import Image from "next/image";
import seekerLogo from "../../public/assets/sidebar/seeker-logo1.svg";
import dashboard from "../../public/assets/sidebar/dashboard.svg";
import leaderBoard from "../../public/assets/sidebar/leaderBoard.svg";
import order from "../../public/assets/sidebar/shopping-cart.svg";

export const UserNavigation = () => {
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
              <a href="https://www.yominovel.site" className="flex mr-7">
                <Image src={seekerLogo} alt="" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Seeker
                </span>
              </a>
              <a href="#" className="flex mr-7">
                <span className="self-center text-lg font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Home
                </span>
              </a>
              <a href="#" className="flex mr-7">
                <span className="self-center text-lg font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Explore
                </span>
              </a>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div className="pr-7">
                  <button
                    type="button"
                    className="flex text-sm bg-white-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Notification</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-white-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <aside
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
          </ul>
        </div>
      </aside> */}
    </div>
  );
};

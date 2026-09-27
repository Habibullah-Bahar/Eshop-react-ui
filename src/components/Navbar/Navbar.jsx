
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";

const Navbar = ({ handlePopup }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const Menulinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blogs",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white relative z-50 duration-200 transition-all">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between gap-3">

          {/* Logo + Menu */}
          <div className="flex items-center gap-4 sm:gap-2 min-w-0">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl shrink-0"
            >
              Eshop
            </a>

            {/* Menu items */}
            <div className="hidden sm:block">
              <ul className="flex items-center gap-4">
                {Menulinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links

                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transition-all duration-300" />
                    </span>
                  </a>

                  {/* Dropdown links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-900 p-2 shadow-md">
                    <ul className="space-y-2">
                      {DropdownLinks.map((item) => (
                        <li key={item.id}>
                          <a
                            className="text-gray-500 hover:text-black dark:hover:text-white duration-200 p-2 hover:bg-primary/20 w-full inline-block rounded-md font-semibold"
                            href={item.link}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Search */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className={`
                rounded-full
                border
                border-gray-300
                dark:border-gray-700
                dark:bg-gray-800
                px-3
                py-1
                focus:outline-none
                transition-all
                duration-300
                w-0
                sm:w-[200px]
                sm:hover:w-[350px]
                sm:opacity-100
                sm:border-gray-500
                ${
                  searchOpen
                    ? "w-[140px] sm:w-[250px] opacity-100"
                    : "w-0 opacity-0 border-transparent px-0"
                }
              `}
            />

            <IoMdSearch
              onClick={() => setSearchOpen(!searchOpen)}
              className="
                text-xl
                text-gray-600
                dark:text-gray-400
                cursor-pointer
                hover:text-primary
                transition-colors
                duration-200
                ml-1
                shrink-0
              "
            />
          </div>

          {/* Order + Dark mode */}
          <div className="flex items-center shrink-0">
            <button
              className="relative p-3 cursor-pointer"
              onClick={handlePopup}
            >
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />

              <div className="h-4 w-4 bg-red-500 text-white rounded-full absolute top-0 right-0 text-xs flex justify-center items-center">
                4
              </div>
            </button>

            <div className="p-3">
              <Darkmode />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { navLinks } from "./../constants/index";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className=" flex items-center justify-between  px-5 lg:px-10 xl:px-15 py-7 bg-primary md:text-base   ">
      <img src={logo} alt="logo" className="w-[80px] md:w-auto" />
      <div className="flex w-[60%] xs:w-full items-baseline sm:pl-10 justify-between ">
        <ul className="hidden xs:flex mr-8">
          {navLinks.map((value, index) => (
            <>
              {index == 1 || index == 4 ? (
                <li
                  className="px-2 flex cursor-pointer hover:underline text-[9px] md:text-sm"
                  key={value.id}
                >
                  {value.title}
                </li>
              ) : (
                <li
                  className="px-2 flex cursor-pointer hover:underline text-[9px] md:text-sm"
                  key={value.id}
                >
                  {value.title}
                  <span className="border-r-[1px] border-b-[1px] h-[2px] rotate-45 ml-[4px] mt-[4px] md:mt-[8px] border-black p-[2px]"></span>
                </li>
              )}
            </>
          ))}
        </ul>
        <div className="">
          <div className="xs:hidden flex ">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] my-3 "
              onClick={() => settoggle((prev) => !prev)}
            />
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } xs:hidden p-6 bg-primary min-w-[140px] sidebar rounded-xl absolute  top-[70px] z-20`}
          >
            <ul className="flex mr-8 flex-col">
              {navLinks.map((value, index) => (
                <li
                  className="px-2 flex mb-[4px] hover:underline cursor-pointer"
                  key={value.id}
                >
                  {value.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="bg-button px-2 sm:px-7 py-3 rounded-[40px] text-[9px] text-white font-semibold min-w-[80px] transition-colors hover:bg-hoveredbtn duration-200">
          Get Started
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

import React, { useState } from "react";
import { navLinks } from "./../constants/index";
import { close, logo, menu } from "../assets";
import styles from "../style";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className=" flex items-center px-12 lg:px-30 xl:px-36 py-7 bg-primary text-sm md:text-base lg:text-lg  ">
      <img src={logo} alt="logo" className="" />
      <div className="flex w-full items-baseline pl-10 justify-between">
        <ul className="hidden md:flex mr-8">
          {navLinks.map((value, index) => (
            <>
              {index == 1 || index == 4 ? (
                <li
                  className="px-2 flex cursor-pointer hover:underline"
                  key={value.id}
                >
                  {value.title}
                </li>
              ) : (
                <li
                  className="px-2 flex cursor-pointer hover:underline"
                  key={value.id}
                >
                  {value.title}
                  <span className={styles.downArrow}></span>
                </li>
              )}
            </>
          ))}
        </ul>
        <div>
          <div className="md:hidden flex">
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
            } p-6 bg-primary min-w-[140px] sidebar rounded-xl absolute top-[70px]`}
          >
            <ul className="flex mr-8 flex-col">
              {navLinks.map((value, index) => (
                <li className="px-2 flex mb-[4px]" key={value.id}>
                  {value.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="bg-button px-2 sm:px-7 py-3 rounded-[40px] text-white font-bold transition-colors hover:bg-hoveredbtn duration-200">
          Get Started
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

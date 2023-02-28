import React from "react";
import {
  email,
  arrow,
  customer1,
  customer2,
  customer3,
  customer4,
  hero,
} from "../assets";

const FirstSection = () => (
  <div className="bg-primary flex relative  z-10 py-[50px]">
    <div className="text-secondary  px-5 lg:px-10 xl:px-15 w-full z-10 ">
      <div className="">
        <h1 className="md:text-4xl text-3xl font-sans[2]   ">
          Ready to launch <br className="hidden md:block" /> your app in one,
          <span className="font-bold">
            <br className="hidden md:block" />
            Application
          </span>
        </h1>
        <br />
        Find the best applicaion in the appie.
      </div>
      <div className="cursor-pointer relative mt-8 flex w-[75%] sm:w-[60%] ">
        <div className="bg-button absolute  rounded-[30px] p-4 px-10 top-0 z-0">
          r
        </div>
        <div className=" text-[10px] xs:text-xs font-semibold relative flex justify-between items-center w-full bg-white rounded-[30px] ml-1 hover:ml-0 p-4 sm:px-10  z-10  ">
          <div className="flex items-center">
            <img src={email} alt="email" className="w-[20px] h-[20px] mt-1 " />
            <p className="xs:pl-6 pl-1"> info@appie.com</p>
          </div>
          <img src={arrow} alt="send" className="w-[20px] h-[25px] " />
        </div>
      </div>
      <div className="flex relative my-5">
        <img
          src={customer1}
          alt=""
          className="rounded-full w-10 h-10 border-2 border-white"
        />
        <img
          src={customer2}
          alt=""
          className="rounded-full w-10 h-10 border-2 border-white relative right-3"
        />
        <img
          src={customer3}
          alt=""
          className="rounded-full w-10 h-10 border-2 border-white relative right-6"
        />
        <img
          src={customer4}
          alt=""
          className="rounded-full w-10 h-10 border-2 border-white relative right-9"
        />
        <h1 className="font-bold text-center leading-sm py-1">
          30k <br />
          <span className="font-thin text-xs">feedback</span>
        </h1>
      </div>
    </div>
    <img
      src={hero}
      className="w-[30%] sm:w-[40%] absolute bottom-0 right-0 z-0"
      alt="hero"
    />
  </div>
);

export default FirstSection;

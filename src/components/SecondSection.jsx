import React from "react";
import {
  arrow,
  lock,
  link,
  thunder,
  home,
  bell,
  setting,
  about_thumb,
} from "../assets";

const SecondSection = () => (
  <div className="px-5 lg:px-10 xl:px-15 ">
    <div className="mt-[70px] flex  justify-center md:justify-between  items-center flex-wrap">
      <p className="text-secondary text-4xl font-bold text-center md:text-left">
        How does it work
        <br />
        <span className="block text-xl font-thin text-gray-500 mt-[30px]">
          The full monty spiffing goog time no biggie cack grub fantastic.
        </span>
      </p>
      <div className="border-2 w-[220px] text-center rounded-[30px] my-[18px] py-[18px] hover:bg-sky-200 cursor-pointer">
        <h2 className="inline text-xl ">view all Features</h2>
        <img src={arrow} alt="arrow" className="w-5 h-5 inline " />
      </div>
    </div>
    <div className="flex justify-center flex-wrap ">
      <Card imageSource={thunder} iconColor="bg-icon1" />
      <Card imageSource={home} iconColor="bg-icon2" />
      <Card imageSource={link} iconColor="bg-icon3" />
      <Card imageSource={bell} iconColor="bg-icon4 " />
      <Card imageSource={setting} iconColor="bg-icon5 " />
      <Card imageSource={lock} iconColor="bg-icon6" />
    </div>

    <div></div>
  </div>
);
export default SecondSection;

const Card = (props) => (
  <div className=" sm:w-[30%]  xs:w-[70%] w-[35%] border-2 py-[60px] px-[30px] rounded-[10px] inline-block m-[15px] shrink-0 ">
    <img
      src={props.imageSource}
      alt="icon"
      className={`${props.iconColor} rounded-full  w-12  p-3 mb-[20px]`}
    />
    <h1 className="font-bold text-xl">Fast and ituitive</h1>
    <p className="text-gray-500 py-[20px] font-medium">
      Oxford posh bevvy give us a bell gutted mate spend a penny quaint cockup
      plastered.
    </p>
    <a href="" className="text-gray-500 pt-[10px]">
      read more{" "}
      <img src={arrow} alt="arrow" className="w-[15px] h-[15px] inline" />
    </a>
  </div>
);

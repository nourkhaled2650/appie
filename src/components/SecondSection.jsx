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
  check1,
} from "../assets";

const SecondSection = () => (
  <div className="px-5 lg:px-10 xl:px-15 ">
    <div className="mt-[70px] flex flex-col xs:flex-row justify-center md:justify-between  items-center ">
      <p className="text-secondary md:text-4xl text-2xl font-bold  w-[60%]">
        How does it work
        <br />
        <span className="block text-sm font-thin text-gray-500 mt-[10px]">
          The full monty spiffing goog time no biggie cack grub fantastic.
        </span>
      </p>
      <div className="border-2 w-[30%] max-w-[200px] min-w-[130px] text-center  rounded-[30px] my-[18px] py-[9px] hover:bg-sky-200 cursor-pointer">
        <h2 className="inline text-xs text-gray-600 font-semibold">
          view all Features
        </h2>
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

    <div className="text-secondary   xs:justify-start justify-center  flex  p-[40px] bg-primary relative  sm:h-[350px]">
      <div
        style={{ backgroundImage: `url(${about_thumb})` }}
        className={`hidden sm:flex w-[35%] h-[65%] md:h-[100%] md:w-[40%]  bg-cover  bg-top  absolute bottom-0 `}
      >
        {/* <img
          src={about_thumb}
          alt="about-thumb"
          className="object-cover w-full h-full "
        /> */}
      </div>
      <div className="sm:w-[50%] w-full  flex flex-col sm:absolute sm:right-[30px] relative ">
        <p className="my-[30px] ">
          <span className="text-red-500 text-xs">Marketing </span>
          <br />
          <span className="text-2xl font-bold">
            {" "}
            Make a lasting <br /> impression with appie.
          </span>
          <br />
          <span className="text-gray-500 text-xs leading-tight block mt-[10px]">
            Jolly good quaint james bond victoria sponge happy days <br /> cras
            arse over blatant.
          </span>
        </p>
        <div className="flex">
          <div className="flex mr-4 ">
            <img
              src={check1}
              alt="check"
              className="w-[15px] h-[15px]  mr-[10px] mt-[4px]"
            />
            <div>
              <h1 className="font-bold text-l">Carefully designed</h1>
              <p className="text-gray-500 text-xs font-light">
                Mucker plastered bugger all <br className="hidden sm:flex" />{" "}
                mate morish are.
              </p>
            </div>
          </div>
          <div className="flex">
            <img
              src={check1}
              alt="check"
              className="w-[15px] h-[15px] mt-[8px] mr-[10px] mt-[4px]"
            />
            <div>
              <h1 className="font-bold text-l">Choose an App</h1>
              <p className="text-gray-500 text-xs font-light">
                Mucker plastered bugger all <br className="hidden sm:flex" />{" "}
                mate morish are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default SecondSection;

const Seco = () => {
  return <div>SecondSection</div>;
};

const Card = (props) => (
  <div className="flex flex-wrap flex-col  sm:w-[30%] xs:w-[40%] text-xs  w-full border-2 py-[25px] px-[20px] rounded-[10px] inline-block my-[10px] mx-[10px] shrink-0 ">
    <img
      src={props.imageSource}
      alt="icon"
      className={`${props.iconColor} rounded-full  w-8  p-2 mb-[20px]`}
    />
    <h1 className="font-bold text-l">Fast and ituitive</h1>
    <p className="text-gray-500 py-[10px] font-medium ">
      Oxford posh bevvy give us a bell gutted mate spend a penny quaint cockup
      plastered.
    </p>
    <a href="" className="text-gray-500 pt-[10px] ">
      read more{" "}
      <img src={arrow} alt="arrow" className="w-[15px] h-[15px] inline" />
    </a>
  </div>
);

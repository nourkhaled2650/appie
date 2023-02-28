import React from "react";
import { useState } from "react";
import { check } from "../assets";
const FifthSection = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-secondary text-4xl font-bold text-center mt-32 ">
          Simple pricing for
          <br className="block md:hidden" /> everyone
        </h1>
        <p className="text-gray-500 text-center font-medium m-8">
          The full monty spiffing goog time no biggie cack grub <br />{" "}
          fantastic.
        </p>
        <div className="flex justify-center items-center rounded-[40px] px-1 border-2 h-[45px]">
          <button
            onClick={() => (active ? setActive((prev) => !prev) : null)}
            className={` rounded-[30px] px-5 h-[100%] w-[50%] hover:bg-hoveredbtn2 hover:text-white
              ${`${!active ? "bg-button text-white" : "bg-white text-black"}`}
           `}
          >
            Monthly
          </button>
          <button
            onClick={() => (!active ? setActive((prev) => !prev) : null)}
            className={` rounded-[30px] px-5 h-[100%] w-[50%] hover:bg-hoveredbtn2 hover:text-white
              ${`${active ? "bg-button text-white" : "bg-white text-black"}`}
           `}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <Card
          ID="0"
          title="fresh"
          price={`04`}
          hint="Get your 14 day free trial"
        ></Card>
        <Card
          ID="1"
          title="Sweet"
          price={`16`}
          hint="Billed $276 per website annualy."
        ></Card>
        <Card
          ID="2"
          title="Juicy"
          price={`27`}
          hint="Billed $276 per website annualy."
        ></Card>
      </div>
    </div>
  );
};

export default FifthSection;

const Card = ({ ID, title, price, hint }) => {
  return (
    <div
      className={`relative border-2 px-10 py-6 md:w-[28%] m-[20px]  shadow-lg  ${
        ID == 1 ? "shadow-black" : ""
      }`}
    >
      <h1
        className={`p-1 text-white text-[9px] bg-blue-500 rounded-l-[20px]  absolute top-3 right-0 ${
          ID == "1" ? "" : "hidden"
        }`}
      >
        Most Popular
      </h1>
      <h1 className="text-seconday text-l font-semibold ">{title}</h1>
      <h2 className="mt-4">
        <span className="align-top">$</span>
        <span className="text-sceondary text-4xl font-[600]">{price}</span>{" "}
        /month
      </h2>
      <h3 className="text-gray-500 py-6 mb-6 border-b-2 text-xs">{hint}</h3>
      <Feature>60-day chat history</Feature>
      <Feature>15 GB cloud storage</Feature>
      <Feature>24/7 Support</Feature>
      {ID == "2" ? <Feature>100 GB cloud storage</Feature> : <></>}
      <button
        className={`  text-[10px] border-2 rounded-[30px] h-[35px] w-[100px] hover:bg-hoveredbtn2 hover:text-white mt-10
              ${`${ID == 1 ? "bg-button text-white" : "bg-white text-black"}`}
           `}
      >
        Choose Plan
      </button>
    </div>
  );
};

const Feature = ({ children }) => (
  <div className="flex py-1">
    <img src={check} alt="check" className="w-[20px] h-[20px] mr-3" />
    <p className="text-secondary text-xs">{children}</p>
  </div>
);

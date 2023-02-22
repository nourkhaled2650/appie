import React from "react";
import { navLinks } from "./../constants/index";
import { logo } from "../assets";
const Navbar = () => (
  <div className="">
    <img src={logo} alt="" className="w-30 h-30" />
    <ul>
      {navLinks.map((value, index) => (
        <li>{value.title}</li>
      ))}
    </ul>
  </div>
);
export default Navbar;

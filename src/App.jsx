import React from "react";

import {
  Navbar,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  Footer,
} from "./components";

const App = () => (
  <div className=" flex justify-center">
    <div className=" w-full lg:max-w-[95%] flex flex-col  ">
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      {/*  <ThirdSection></ThirdSection>
      <FourthSection></FourthSection> */}
      <FifthSection></FifthSection>
      {/* <SixthSection></SixthSection>
      <Footer></Footer> */}
    </div>
  </div>
);

export default App;

"use client";

// import { Carousel } from "flowbite-react";

import React from "react";
import InspiringChange from "./InspiringChange"
import Impacts from "./Impacts"
import banner from '../resources/banner.png';
import Solutions from "./HomeSolutions"


class Home extends React.Component {
  render = () => {
   return (
      <>
        <div className="h-fit mt-0 mb-0">
          <div className="h-fit sm:h-[50em]">
              <img src={banner} alt="Award 1" className="block w-full h-full  object-cover" />
          </div>
        </div>
        <div className="text-center text-4xl my-5 font-bold underline hover:text-[#511]">
          Our product
        </div>
        <div className="flex justify-evenly">
          <img className="w-1/6" src="/product-left.png" />
          <img className="w-1/6" src="/product-center.jpg" />
          <img className="w-1/6" src="/product-right.png" />
        </div>
        <InspiringChange />	
        <Impacts />
        <Solutions />
      </>
   );
  };
}


export default Home;

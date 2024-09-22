"use client";

import { Carousel } from "flowbite-react";

import React from "react";
import InspiringChange from "./InspiringChange"
import Impacts from "./Impacts"
import banner from '../resources/banner.png';



class Home extends React.Component {
    render = () => {
        return (
            <>
							<div className="h-fit mt-0 mb-0">
								<div className="h-fit sm:h-[50em]">
									<Carousel>
										<img src={banner} alt="Award 1" className="block w-full h-full  object-cover" />
										<img src={banner} alt="Award 1" className="block w-full h-full object-cover" />
									</Carousel>
								</div>
							</div>
                <InspiringChange />	
                <Impacts />
            </>
        );
    };
}


export default Home;

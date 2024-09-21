import React from "react";


class Home extends React.Component {
    render = () => {
        return (
            <div className="my-10">
                <div className="text-2xl font-bold mb-10 text-center">
                    Inspiring Change, Building Futures
                </div>
                <div className="flex justify-evenly text-justify flex-wrap flex-grow-1">
                    <div className="min-w-4 max-w-[30rem]">
                        <div className="border-dashed border-2 border-black px-10 w-fit py-3 rounded-3xl mt-5">
                            <div className="font-semibold text-xl">
                                Who we are?
                            </div>
                            <div className="">
                                MozziQuit is an innovative startup dedicated to eradicating mosquito-
                                borne diseases. We specialize in the design and manufacture of patented
                                mosquito traps that effectively kill mosquitoes without the use of harmful
                                chemicals or radiation.
                            </div>
                            <div className="mt-3 font-semibold text-xl">
                                Who we are?
                            </div>
                            <div className="">
                                MozziQuit is an innovative startup dedicated to eradicating mosquito-
                                borne diseases. We specialize in the design and manufacture of patented
                                mosquito traps that effectively kill mosquitoes without the use of harmful
                                chemicals or radiation.
                            </div>
                        </div>
                    </div>
                    <div className="min-w-4 max-w-[30rem] flex flex-col justify-evenly">
                        <div className="border-dashed border-2 border-black px-10 w-fit py-3 rounded-3xl mt-5">
                            <div className="font-semibold text-xl">
                                Vision
                            </div>
                            <div className="">
                                To be the global
                                leader in mosquito
                                control technology,
                                ensuring a healthier
                                future for all
                                communities.
                            </div>
                        </div>
                        <div className="border-dashed border-2 border-black px-10 w-fit py-3 rounded-3xl mt-5">
                            <div className="mt-3 font-semibold text-xl">
                                Mission
                            </div>
                            <div className="">
                                To make the entire
                                world free of the
                                mosquito menace
                                through innovative
                                and sustainable
                                solutions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}


export default Home;

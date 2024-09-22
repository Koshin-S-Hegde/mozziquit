import React from "react";
import HomeImage from "../assets/home-product.png"


interface Impact {
  title: String;
  description: String;
}

const impactPairs: Impact[][] = [
  [
    {
      title: "Effective Trapping",
      description: "MozziQuit traps kill mosquitoes before they can lay eggs, preventing population growth.",
    },
    {
      title: "Safe and Eco-Friendly",
      description: "Zero chemicals and no UV radiation, ensuring environmental and user safety",
    },
  ],
  [
    {
      title: "Cost - Effective",
      description: "Current repellents and traps are either ineffective or hazardous, emitting harmful chemicals and radiation.",
    },
    {
      title: "Proven Results",
      description: "Published in International Journal of Creative Research Thoughts, demonstrating efficacy.",
    },
  ],
]


class Solutions extends React.Component {
  render = () => {
    return (
      <div className="mt-10 block lg:mb-96 xl:mb-10 relative">
        <div className="flex justify-between mb-5 flex-col h-fit lg:h-[85vh]">
          {impactPairs.map((impactPair, index) => {
            return (
              <>
                <div className="flex justify-center lg:justify-between grow-0 basis-1 h-fit flex-wrap mx-32">
                  {impactPair.map(impact => {
                    return (
                      <div className="min-w-80 max-w-80 grow basis-1 border-2 border-dashed border-black p-5 rounded-3xl flex flex-col justify-between hover:shadow-lg hover:shadow-gray-700 hover:relative hover:bottom-1 hover:bg-white my-10 m-1">
                        <div className="font-bold text-3xl text-center text-[#511]">
                          {impact.title}
                        </div>
                        <div className="text-lg">
                          {impact.description}
                        </div>
                      </div>
                    )
                  })}
                </div>
                {!index && <img src={HomeImage} className="h-64 w-64 self-center xl:absolute top-[30vh]" />}
              </>
            )
          })}
        </div>
      </div>
    );
  };
}


export default Solutions;

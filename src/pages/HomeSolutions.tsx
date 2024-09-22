import React from "react";


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
      title: "Safe and <br/> Eco-Friendly",
      description: "Zero chemicals and no UV radiation, ensuring environmental and user safety",
    },
  ],
  [
    {
      title: "Cost Effective",
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
      <div>
        <div className="flex justify-around flex-wrap mb-5 2xl:mx-32">
          {impactPairs.map(impactPair => {
            return (
              <div className="flex justify-around grow basis-1 flex-wrap">
                {impactPair.map(impact => {
                  return (
                    <div className="min-w-64 max-w-72 grow basis-1 border-2 border-dashed border-black p-5 rounded-3xl m-5 flex flex-col justify-around hover:shadow-lg hover:shadow-gray-700 hover:relative hover:bottom-1 hover:bg-white">
                      <div className="font-bold text-2xl text-center text-[#511]" dangerouslySetInnerHTML={{__html: impact.title}} />
                      <div className="text-lg">
                        {impact.description}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    );
  };
}


export default Solutions;

import React from "react";


interface Impact {
  title: String;
  description: String;
}

const impactPairs: Impact[][] = [
  [
    {
      title: "High Disease Burden",
      description: "Mosquitoes are responsible for over 700,000 deaths annually due to diseases like malaria, dengue, and Zika (WHO Report).",
    },
    {
      title: "Economic Impact",
      description: "The global cost of mosquito-borne diseases is estimated to be $100 billion (Roll Back Malaria Partnership/WHO).",
    },
  ],
  [
    {
      title: "Ineffective Solutions",
      description: "Current repellents and traps are either ineffective or hazardous, emitting harmful chemicals and radiation.",
    },
    {
      title: "Environmental Damage",
      description: "Many existing solutions cause ecological imbalance, affecting non-target species like frogs and bats.",
    },
  ],
]

class ImpactsRenderer extends React.Component {
  render = () => {
    return (
      <div>
        <div className="text-center text-4xl my-5 font-bold underline hover:text-[#511]">Impacts</div>
        <div className="flex justify-around flex-wrap mb-5 2xl:mx-56">
          {impactPairs.map(impactPair => {
            return (
              <div className="flex justify-around grow basis-1 flex-wrap">
                {impactPair.map(impact => {
                  return (
                    <div 
                    className="min-w-64 max-w-72 grow basis-1 bg-white border-2 border-dashed border-gray-400 p-5 rounded-3xl m-5 flex flex-col justify-around transition-transform duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400 hover:relative hover:bottom-1 hover:bg-white">
                    <div className="font-bold text-2xl text-center text-[#511]">
                        {impact.title}
                      </div>
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


export default ImpactsRenderer;

import React from "react";

class InspiringChange extends React.Component {
  render = () => {
    return (
      <div className="my-10">
        <div className="text-4xl font-bold mb-10 text-center underline hover:text-[#511]">
          Inspiring Change, Building Futures
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 max-w-screen-lg mx-auto px-4 lg:px-0">
          
          {/* Left Column (60% width) */}
          <div className="lg:col-span-7">
            <div className="border-2 border-dashed border-gray-400 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-gray-500 transition duration-300 bg-white">
              <div className="font-semibold text-3xl text-[#511] mb-4">
                Who we are?
              </div>
              <div className="text-lg text-gray-700">
                MozziQuit is an innovative startup dedicated to eradicating mosquito-borne diseases. We specialize in the design and manufacture of patented mosquito traps that effectively kill mosquitoes without the use of harmful chemicals or radiation. Our team is composed of passionate scientists, engineers, and public health experts who are committed to developing sustainable and eco-friendly solutions. By leveraging cutting-edge technology, we aim to reduce the spread of deadly diseases such as malaria, dengue, and Zika virus, which are transmitted by mosquitoes.
              </div>
              <div className="mt-6 font-semibold text-3xl text-[#511]">
                What we do?
              </div>
              <div className="text-lg text-gray-700 mt-2">
                MozziQuit focuses on providing effective, long-term mosquito control solutions. We design and manufacture high-efficiency mosquito traps that attract and eliminate mosquitoes before they have the chance to breed. Our traps are not only safe for the environment but also cost-effective, making them accessible to communities worldwide. In addition to product development, we work closely with health organizations and local governments to implement mosquito control programs in affected regions.
              </div>
            </div>
          </div>

          {/* Right Column (40% width, stacked cards) */}
          <div className="lg:col-span-3 flex flex-col space-y-8">
            <div className="border-2 border-dashed border-gray-400 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-gray-500 transition duration-300 bg-white">
              <div className="font-semibold text-3xl text-[#511] mb-4">
                Vision
              </div>
              <div className="text-lg text-gray-700">
                To be the global leader in mosquito control technology, ensuring a healthier future for all communities.
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-400 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-gray-500 transition duration-300 bg-white">
              <div className="font-semibold text-3xl text-[#511] mb-4">
                Mission
              </div>
              <div className="text-lg text-gray-700">
                To make the entire world free of the mosquito menace through innovative and sustainable solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default InspiringChange;

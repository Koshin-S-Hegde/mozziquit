"use client";

import { Card } from "flowbite-react";
import location from '../resources/location.jpg';
import partner from '../resources/partner.png';
import partner1 from '../resources/partner2.png';

const About = () => {
  return (
    <>
    

      <div className="bg-gray-100 min-h-screen flex items-start">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row">
          {/* Left Side: Text Sections */}
          <div className="flex flex-col justify-start space-y-8 w-full md:w-2/5 xs:mt-5 sm:mt-8 md:mt-0">
            {/* Hero Box 1 */}
            <div className="bg-white shadow-md rounded-xl p-6 max-w-2xl w-full">
              <h2 className="text-2xl font-semibold mb-4">What is MozziQuit?</h2>
              <p className="text-gray-700">
                MozziQuit is an innovative startup dedicated to eradicating mosquito-borne diseases. We specialize in the design and manufacture of patented mosquito traps that effectively kill mosquitoes without the use of harmful chemicals or radiation. Our flagship products, MozziQuit MINI and MozziQuit MAX, are cost-effective, environmentally friendly, and easy to use. Our mission is to create a safe and healthy environment for all, significantly reducing the global burden of mosquito-borne illnesses. Through continuous innovation and sustainable solutions, we aim to make a lasting impact on public health worldwide.
              </p>
            </div>

            {/* Hero Box 2: Contact Information */}
            <div className="bg-white shadow-md rounded-xl p-6 max-w-2xl w-full">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-700">
                MozziQuit Solutions LLP<br />
                Hotel Prithvi Regency Building,<br />
                Door No 1-N-2-183, Ground Floor,<br />
                Opposite Infosys and Dakshina Kannada<br />
                Panchayat Name Board, Kottara,<br />
                Ashoknagar Post, Mangalore - 575006,<br />
                Karnataka, India<br /><br />

              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 max-w-2xl w-full">
              <h2 className="text-2xl font-semibold mb-4">For Inquiries</h2>
              <p className="text-gray-700">
                For inquiries, please reach out to us at:<br />
                Email: orwinnoronha@gmail.com<br />
                Phone: +91 9886675656<br />
              </p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:ml-10 sm:mt-0">
            <img
              src={location}
              alt="MozziQuit Product"
              className="h-full object-cover rounded-xl"
            />
          </div>
          <div className="bg-[#ffffff] p-4 mb-0">
        <div className="flex-row justify-around ">
          <Card
            className="max-w-sm mb-4"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={partner1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            Velagaleti Janaki Venkata Ramana 
            </h5>
            
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={partner}
          >
            <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            Ignatius Orwin Noronha
            </h5>
            
          </Card>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default About;

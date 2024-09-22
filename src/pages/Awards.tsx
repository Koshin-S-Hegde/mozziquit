"use client";

import { Carousel } from "flowbite-react";
import award1 from '../resources/award1.jpg';
import award2 from '../resources/award2.jpg';
import award3 from '../resources/award3.jpg';
import award4 from '../resources/award4.jpg';
import award5 from '../resources/award5.jpg';
import award6 from '../resources/award6.jpg';
import award7 from '../resources/award7.jpg';
import cert1 from '../resources/cert1.jpg';
import cert2 from '../resources/cert2.jpg';
import cert3 from '../resources/cert3.jpg';

const Awards = () => {
  return (
    <div className="mt-4">
      {/* Flowbite React Carousel */}
      <div className="h-96 sm:h-[50rem] w-full mb-0">
        <Carousel>
          <img src={award1} alt="Award 1" />
          <img src={award2} alt="Award 2" />
          <img src={award3} alt="Award 3" />
          <img src={award4} alt="Award 4" />
          <img src={award5} alt="Award 5" />
          <img src={award6} alt="Award 6" />
          <img src={award7} alt="Award 7" />
        </Carousel>
      </div>

      <div className="container mx-auto mt-10 space-y-8 bg-[#f3f4f6]">
  {/* First row: Text left, Image right */}
  <div className="flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-3/5 p-4">
      <h2 className="text-2xl font-semibold text-gray-800">National Agripreneurs Award 2017</h2>
      <p className="mt-2 text-gray-600 text-lg">
        In recognition of our significant contributions to the agricultural sector and relentless pursuit of innovation,
        MozziQuit was honored with the prestigious National Agripreneurs Award in 2017. This award stands as a testament
        to our commitment to transforming the agricultural landscape with sustainable and practical solutions. We were 
        selected for our groundbreaking efforts in integrating technology with agricultural practices, allowing for improved
        pest control and enhanced productivity in various farming ecosystems. Our solutions not only increased yield but 
        also focused on environmental safety, showcasing our dedication to eco-friendly pest management strategies. 
        The award represents the culmination of years of research, development, and collaboration with farmers and industry experts,
        emphasizing our role in driving forward-thinking approaches that address key challenges in agriculture. Winning this award 
        solidified our position as leaders in agricultural innovation, encouraging us to continue pushing the boundaries of what's
        possible in sustainable farming.
      </p>
    </div>
    <div className="md:w-2/5 p-4">
      <img
        src={cert1}
        alt="Award 1"
        className="rounded-lg object-cover w-full"
      />
    </div>
  </div>

  {/* Second row: Image left, Text right */}
  <div className="flex flex-col md:flex-row-reverse items-center justify-between">
    <div className="md:w-3/5 p-4">
      <h2 className="text-2xl font-semibold text-gray-800">Prestigious Gold Medal Award - DST-Lockheed Martin India Innovation Competition 2010</h2>
      <p className="mt-2 text-gray-600 text-lg">
        MozziQuit received the prestigious Gold Medal Award in the DST-Lockheed Martin India Innovation Competition on May 20th, 2010, an accolade that marked a significant milestone in our journey of technological excellence. This international competition, conducted by the IC2 Institute at The University of Texas at Austin, USA, recognized MozziQuit for its innovative approach to mosquito control technology. Out of a pool of cutting-edge innovations, our solution stood out for its effectiveness in addressing a critical public health concern—vector-borne diseases—through a cost-effective and eco-conscious method. The Gold Medal not only highlighted our commitment to innovation but also brought global attention to our mission to safeguard communities by reducing mosquito populations and, consequently, the transmission of diseases like malaria and dengue. This award was a turning point for MozziQuit, catalyzing international recognition and support, propelling us further toward creating a healthier world.
      </p>
    </div>
    <div className="md:w-2/5 p-4">
      <img
        src={cert2}
        alt="Award 2"
        className="rounded-lg object-cover w-full"
      />
    </div>
  </div>

  {/* Third row: Text left, Image right */}
  <div className="flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-3/5 p-4 text-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Best Electronic Product of the Year - ISA 2010 Indian Semiconductor Association</h2>
      <p className="mt-2 text-gray-600">
        In 2010, MozziQuit was honored with the title of "Best Electronic Product of the Year" by the Indian Semiconductor Association (ISA), a significant recognition that underscored our technological prowess. This award was given in light of our innovative use of electronic technology in developing a product that tackled one of the most pressing public health concerns—mosquito-borne diseases. The award-winning product was recognized for its design, functionality, and positive impact on communities, positioning MozziQuit as a pioneering force within the industry. By integrating advanced semiconductor technology into our product, we were able to enhance the precision and efficiency of mosquito extermination methods, setting new industry standards. This accolade further established MozziQuit’s role in revolutionizing electronic health products, affirming our commitment to creating high-quality, effective solutions that benefit both individuals and society at large.
      </p>
    </div>
    <div className="md:w-2/5 p-4">
      <img
        src={cert3}
        alt="Award 3"
        className="rounded-lg object-cover w-full"
      />
    </div>
  </div>

  {/* Add more rows as needed */}
</div>
</div>

    
  );
};

export default Awards;
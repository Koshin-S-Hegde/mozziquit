import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import React from 'react';
import 'flowbite';
import award1 from '../resources/award1.jpg';
import award2 from '../resources/award2.jpg';
import award3 from '../resources/award3.jpg';
import award4 from '../resources/award3.jpg';
import award5 from '../resources/award5.jpg';
import award6 from '../resources/award6.jpg';
import award7 from '../resources/award7.jpg';
import cert1 from '../resources/cert1.jpg';
import cert2 from '../resources/cert2.jpg';
import cert3 from '../resources/cert3.jpg';

const Awards = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/awards' && !sessionStorage.getItem('awardsPageReloaded')) {

      sessionStorage.setItem('awardsPageReloaded', 'true');
      window.location.reload();
    }
  }, [location]);
  return (
    <div className="mt-4">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-96 overflow-hidden rounded-lg md:h-[50rem]">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={award1}
               className="absolute block w-full h-full object-cover object-top"
              alt="Slide 1"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={award2}
               className="absolute block w-full h-full object-cover object-top"
              alt="Slide 2"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={award3}
               className="absolute block w-full h-full object-cover object-top"
              alt="Slide 3"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={award4}
               className="absolute block w-full h-full object-cover object-top"
              alt="Slide 4"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={award6}
               className="absolute block w-full h-full object-cover object-top"
              alt="Slide 6"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={award5}
               className="absolute block w-full h-full object-cover object-top"
              alt="Slide 5"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={award7}
               className="absolute block w-full h-full object-cover object-top"
              alt="Slide 7"
            />
          </div>
        </div>
        {/* Carousel Navigation Dots */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        {/* Carousel Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
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

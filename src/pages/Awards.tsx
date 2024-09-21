import React from 'react';
import 'flowbite';
import award1 from '../resources/award1.jpg';
import award2 from '../resources/award2.jpg';
import award3 from '../resources/award3.jpg';
import award4 from '../resources/award3.jpg';
import award6 from '../resources/award6.jpg';
import award7 from '../resources/award7.jpg';
import award5 from '../resources/award5.jpg';

const Awards = () => {
  return (
    // <div className="container mx-auto my-10">
    <div className="relative h-96 overflow-hidden rounded-lg md:h-[50rem] mt-6">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel Wrapper */}
        <div className="relative h-96 overflow-hidden rounded-lg md:h-[50rem]">
          {/* Carousel Items */}
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
    </div>
  );
};

export default Awards;

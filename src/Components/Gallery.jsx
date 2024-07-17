import React, { useState } from 'react';
import v1 from './../assets/v1.jpg';
import v2 from './../assets/v2.webp';
import v3 from './../assets/v3.jpg';
import v4 from './../assets/v4.webp';
import v5 from './../assets/v5.jpg';
import v6 from './../assets/v6.jpg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [v2, v3, v4, v1, v5, v6];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-80 md:h-96">
          {/* Loop through images and apply class based on currentIndex */}
          {images.map((image, index) => (
            <div key={index} className={`absolute inset-0 duration-700 ease-in-out transition-opacity ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
              <img src={image} className="object-cover w-full h-full" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
          {/* Indicators */}
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-400' : 'bg-gray-300 hover:bg-gray-400 focus:bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Previous button */}
        <button
          type="button"
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={prevSlide}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Next button */}
        <button
          type="button"
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          onClick={nextSlide}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <p className="mt-5 text-center text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, hic possimus quos, mollitia ipsum ad fugit non aperiam alias, quia architecto? Quod, recusandae incidunt. Voluptatum tempore officia aspernatur corrupti in.
      </p>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  );
};

export default Gallery;

"use client"

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import hospitality from '@/images/hospitality.jpg';
import auditorium from '@/images/auditorium.jpg';
import graphic from '@/images/3dgraphic.jpg';
import Image from 'next/image';

const imagesURL = [
  'https://schmidt-arch.com/wp-content/uploads/2016/06/lakecentralhs13.jpg',
  'https://image.slidesdocs.com/responsive-images/background/a-blue-3d-graphic-design-of-buildings-powerpoint-background_4ccf0d2032__960_540.jpg',
  'https://www.kayak.co.in/rimg/dimg/dynamic/376-1662541525-burj-al-arab-scaled.jpeg?height=440&width=744&crop=true'
];

const images = [
  auditorium,
  graphic,
  hospitality
]

const titles = [
  "AV & Security Solutions",
  "3D Graphic Design",
  "Data Centers, Hospitality and Infrastructure Solutions"
]

const colors = [
  '#ffffed',
  '#add8e6',
  '#ff7f7f'
]

const textColors = [
  '#fbec5d',
  '#1aa7ec',
  '#fa8072'
]

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Increased auto-transition time to 3.5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className='relative lg:h-[32rem] md:h-[32rem] h-80 flex justify-center items-center flex-col'>
          <div className='absolute bg-blue-600 top-0 left-0 right-0 bottom-0' style={{ opacity: 0.3 , backgroundColor : colors[currentImage]}}></div>
          <div
  className='bg-no-repeat absolute top-0 left-0 right-0 bottom-0'
  style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    mixBlendMode: 'multiply',
    transition: '', // Smooth transition
  }}
>
  <Image
    src={images[currentImage]}
    alt={`Image ${currentImage + 1}`}
    layout="fill"
    objectFit="cover"
  />
</div>
      <div className='relative z-10 space-y-5'
      style={{transition: '', color: textColors[currentImage]}}
      >
        {/* <TypeAnimation
          sequence={[
            'AV Solutions.',
            1500,
            '3D Graphic Design.',
            1500,
            'Business Management.',
            1500,
          ]}
          className='font-sans lg:text-8xl md:text-8xl text-4xl drop-shadow-sm font-bold pb-3 opacity-90'
          repeat={Infinity}
        /> */}
        <h1 className='font-lexend lg:text-7xl md:text-5xl md:font-bold lg:font-bold text-4xl px-5 drop-shadow-sm font-regular pb-2 opacity-90 text-center' style={{transition: '', color: '#ffffff'}}>{titles[currentImage]}</h1>
      </div>

      <div className="relative bottom-4 flex justify-between  items-center w-full px-10 opacity-0 lg:opacity-100 md:opacity-100">
        <button onClick={goToPrevious} className="px-4 py-2 bg-stone-800 rounded-full text-white transition hover:bg-white hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button onClick={goToNext} className="px-4 py-2 bg-stone-800 rounded-full transition text-white hover:bg-white hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        </button>
      </div>

    </div>
  );
};

export default HeroSection;

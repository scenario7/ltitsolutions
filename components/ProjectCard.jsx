// ProjectCard.js
import React from 'react';

const ProjectCard = ({ image, title, publishedAt, body }) => {
  return (
    <div className='bg-stone-800 min-w-full flex lg:flex-row flex-col justify-center lg:justify-start items-center lg:items-start px-5 py-5 rounded-2xl'>
      <img src={image} alt={title} className='h-full w-full lg:h-52 lg:w-52 md:h-52 md:w-full object-top md:object-contain md:pb-5 lg:pb-0 pb-5 lg:object-cover rounded-lg' />
      <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start lg:pl-5 w-full'>
        <div className='flex lg:flex-row flex-col justify-center lg:justify-between w-full'>
          <h1 className='font-sans text-2xl pb-4 text-white font-semibold tracking-tight'>{title}</h1>
          <h1 className='font-sans text-lg text-gray-500 font-semibold'>{publishedAt}</h1>
        </div>
        <h1 className='text-gray-400 font-sans lg:text-left md:text-left'>{body}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;

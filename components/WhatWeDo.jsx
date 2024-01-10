import React from 'react'

const WhatWeDo = () => {

  return (
    <div className='bg-stone-900 lg:px-3 lg:py-20 px-10 lg:space-x-20 lg:items-start flex flex-col-reverse items-center justify-center lg:flex-row md:flex-row'>
        <div className='flex flex-col items-center justify-center space-y-10 pt-10 pb-10'>
        <div className='bg-stone-950 flex flex-col lg:flex-row md:flex-row px-3 lg:px-5  py-3 pt-3 pb-3 justify-center items-center rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-12 lg:h-12 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>

        <div className='flex flex-col items-center lg:items-start md:items-start md:justify-start lg:justify-start w-80 md:pl-3 lg:pl-3 '>
            <h1 className='font-sans text-md text-white text-left font-bold'>Technology for the next generation</h1>
            <p className='font-sans text-xs lg:text-sm text-gray-400 text-center md:text-left lg:text-left'>Elevate safety and communication with cutting-edge AV and security solutions. Enhance your tech infrastructure for seamless operations and peace of mind.</p>
        </div>
</div>

<div className='bg-stone-950 flex flex-col lg:flex-row md:flex-row px-3 py-3 lg:px-5  pt-3 pb-3 justify-center items-center rounded-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-12 lg:h-12 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>

    <div className='flex flex-col items-center lg:items-start md:items-start md:justify-start lg:justify-start w-80 md:pl-3 lg:pl-3 '>
        <h1 className='font-sans text-md text-white text-left font-bold'>Goal Driven</h1>
        <p className='font-sans text-xs lg:text-sm text-gray-400 text-center md:text-left lg:text-left'>Transform your BMS with immersive 3D design. Visualize and optimize facility performance for efficiency and a futuristic user experience, aligned with your goals.</p>
    </div>
</div>

<div className='bg-stone-950 flex flex-col lg:flex-row md:flex-row px-3 py-3 lg:px-5  pt-3 pb-3 justify-center items-center rounded-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-12 lg:h-12 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>

    <div className='flex flex-col items-center lg:items-start md:items-start md:justify-start lg:justify-start w-80 md:pl-3 lg:pl-3 '>
        <h1 className='font-sans text-md text-white text-left font-bold'>Integration</h1>
        <p className='font-sans text-xs lg:text-sm text-gray-400 text-center md:text-left lg:text-left'> Powering the future of data management and hospitality services. We seamlessly integrate software, bridging technology gaps for unparalleled business success and efficiency.</p>
    </div>
</div>

            
        </div>
        <div className='flex flex-col lg:w-1/4 space-y-5 lg:space-y-10 items-center'>
            <h1 className='tracking-widest text-white text-8xl'>...</h1>
            <h1 className='text-white text-4xl font-serif'>Our Goals</h1>
            <h1 className='text-white text-center text-md font-sans'>Founded with goals to ensure your needs are met.</h1>
            <a href="/solutions">
                <button className='bg-blue-600 w-40 hover:bg-white  text-white hover:text-blue-600 transition rounded-2xl'>
                    <h1 className='font-serif text-xl py-3'>Solutions</h1>
                </button>
            </a>
        </div>
    </div>
  )
}

export default WhatWeDo
"use client"
import React from 'react'

const CustomFooter = () => {
  return (
    <div className="flex flex-col">
    <div className='bg-blue-600 flex px-5 py-10 justify-between items-end md:items-center lg:items-center'>
        <div className='flex flex-col justify-start items-start'>
            <h1 className='font-serif text-left lg:text-3xl md:text-3xl text-xl text-white'>LT IT Solutions</h1>
            <h1 className='font-sans text-left lg:text-md md:text-md text-sm text-blue-200'>Incorporated with Sharjah Publishing City</h1>
            <h1 className='font-sans text-left lg:text-md md:text-md text-sm text-blue-200'>PO Box 7311 Dubai, UAE</h1>
        </div>
        <div className='flex flex-col items-end'>
          <a href='tel:+971508263954'>
            <h1 className='font-sans text-white lg:text-lg md:text-lg text-xs'>+971 50 8263954</h1>
          </a>
          <a href='mailto:info@ltitsolutions.com'>
            <h1 className='font-sans text-white lg:text-lg md:text-lg text-xs'>info@ltitsolutions.com</h1>
          </a>
        </div>
    </div>
    <div className="bg-blue-950 text-stone-300 py-2 text-xs text-center">
        Designed and Developed by <span className=''> <a href='https://kevinstappen.vercel.app' target='_blank' className='underline hover:text-white'>Kevin Thomas</a></span> 
    </div>
    </div>
  )
}

export default CustomFooter
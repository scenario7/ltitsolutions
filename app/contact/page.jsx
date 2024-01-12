import React from 'react'
import NavBar from '@/components/navbar'
import CustomFooter from '@/components/customfooter'

const Contact = () => {
  return (
    <div className='min-h-screen bg-stone-900 flex flex-col justify-between'>
<NavBar />
<div className="flex flex-col items-center">
      <form className="flex flex-col items-center min-w-full py-5 px-5 md:py-10 md:px-10">
        <h1 className='font-serif text-white text-4xl lg:text-6xl pb-5 md:pb-10'>Contact Us</h1>
        <div className="flex flex-col space-y-3 md:space-y-6">
          <div className="flex flex-col items-start">
            <label className='text-white text-md md:text-lg lg:text-xl py-2'>Name:</label>
            <input
              type="text"
              name="name"
              className='bg-stone-700 text-white p-2 rounded mb-2 md:mb-4'
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <label className='text-white text-md md:text-lg lg:text-xl py-2'>Email:</label>
            <input
              type="email"
              name="email"
              className='bg-stone-700 text-white p-2 rounded mb-2 md:mb-4'
              required
            />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <label className='text-white text-md md:text-lg lg:text-xl py-2'>Message:</label>
          <textarea
            name="message"
            className='bg-stone-700 text-white w-full p-2 rounded mb-2 md:mb-4'
            required
          />
        </div>

        <button
          type="submit"
          className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
        >
          Submit
        </button>
      </form>
</div>
<CustomFooter />
</div>
  )
}

export default Contact
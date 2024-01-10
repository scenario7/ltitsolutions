import React from 'react'

const CustomerCard = ({image, name, body}) => {
  return (
    <div className='bg-stone-800 flex flex-col justify-start items-center px-5 py-5 space-y-8 rounded-2xl'>
        <img src={image} alt={name} className='h-56 w-56 object-cover object-top rounded-xl'/>
        <h1 className='text-white font-semibold tracking-tight text-3xl'>{name}</h1>
        <p className='text-gray-400 font-sans text-center'>{body}</p>
    </div>
  )
}

export default CustomerCard
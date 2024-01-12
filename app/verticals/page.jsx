import React from 'react'
import { GetStaticProps } from 'next'
import client from '../client'
import NavBar from '@/components/navbar.jsx'
import CustomFooter from '@/components/customfooter.jsx'
import CustomerCard from '@/components/customercard.jsx'


async function getData(){
  const data = await client
  .fetch(
    `*[_type=="customer"] {
      _id,
      title,
      slug,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      },
      body
    } | order(title)`
  )

    if(data){
      return data
    } else {
      console.error()
    }

}

export default async function Solutions(){

  const customers = await getData()

  return(
    <div className='min-h-screen flex flex-col justify-between'>
    <div>
    <NavBar/>
        <h1 className='font-serif text-white text-4xl lg:text-6xl py-10  px-10'>Verticals</h1>
        <div className={`${customers.length == 0 ? "flex flex-col items-center" : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3"} px-8 py-8 gap-5`}>

        {customers.length === 0 ? (
            <RotateLoader color='#ffffff' loading={true} speedMultiplier={1}/>
        ) : (
            customers.map((customer) => (
                <CustomerCard image={customer.mainImage.asset.url} name={customer.title} key={customer._id} body={customer.body}/>
            ))
        )}
        </div>
    </div>
    <CustomFooter className="sticky bottom-0"/>
</div>
  )
}
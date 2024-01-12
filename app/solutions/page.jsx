import React from 'react'
import { GetStaticProps } from 'next'
import client from '../client'
import NavBar from '@/components/navbar.jsx'
import ProjectCard from '@/components/projectcard.jsx'
import CustomFooter from '@/components/customfooter.jsx'


async function getData(){
  const data = await client
    .fetch(
      `*[_type=="project"] {
        _id,
        title,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        publishedAt,
        body
      } | order(publishedAt)`
    )

    if(data){
      return data
    } else {
      console.error()
    }

}

export default async function Solutions(){

  const projects = await getData()

  return(
    <div className='min-h-screen flex flex-col justify-between bg-stone-900'>
    <div>
      <NavBar />
      <div className='flex flex-col'>
        <h1 className='font-serif text-white text-4xl px-10 lg:text-6xl py-10 '>Our Solutions</h1>
        <h1 className='font-sans text-gray-300 text-xl lg:text-2xl pb-10 px-10 '>Here's what LT IT Solutions can help you out with.</h1>
      </div>
      <div className='px-10 space-y-10 py-10 flex flex-col items-center'>
        {projects.length === 0 ? (
                <RotateLoader color='#ffffff' loading={true} speedMultiplier={1}/>
            ) : (
                projects.map((project) => (
                <ProjectCard
                    key={project._id}
                    image={project.mainImage.asset.url}
                    title={project.title}
                    body={project.body}
                    publishedAt={project.publishedAt}
                />
                ))
            )}
      </div>
      </div>
      <CustomFooter />
    </div>
  )
}
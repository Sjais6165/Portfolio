import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectsList from '../../All_Lists/ProjectsList'
import { AiFillGithub } from 'react-icons/ai'

function Projects() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])
  
  return (
    <div id='Projects' className='bg-white text-black dark:bg-slate-900 dark:text-white p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-primary-500'>Projects</h1>
      <div className='grid lg:grid-cols-1 gap-10 w-full max-w-4xl'>

      {ProjectsList.map((project) => (
        <div key={project.id} data-aos={project.id % 2 === 0 ? 'fade-down' : 'fade-up'} className='flex flex-col md:flex-row gap-6 p-6 rounded-lg border-2 border-primary-800 border-glow hover:shadow-lg transition-all duration-300'>
          <div className='md:w-1/3'>
            <a target="_blank" href={project.link}>
              <img className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-full p-1 border-2 border-primary-800 border-glow object-cover' src={project.image} alt="project" />
            </a>
          </div>
          <div className='md:w-2/3'>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='text-2xl font-bold text-primary-500'>{project.title}</h2>
              <a target="_blank" href={project.github} className='hover:text-primary-800 transition-all duration-150 ease-in-out text-[20px]'>
                <AiFillGithub/>
              </a>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>{project.description}</p>
            <div className='space-y-2'>
              {project.details && project.details.map((detail, index) => (
                <p key={index} className='text-base'>• {detail}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

      </div>
    </div>
  )
}

export default Projects
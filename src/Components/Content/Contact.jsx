import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'

function Contact() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])
  
  return (
    <div id='Contact' className='bg-white text-black dark:bg-slate-900 dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-primary-500'>Contact Me</h1>
      
      <div data-aos='fade-up' className='flex flex-col items-center gap-4 mb-10'>
        <div className='flex items-center gap-2'>
          <MdEmail className='text-2xl text-primary-500' />
          <a href="mailto:sushmitajaiswal1000@gmail.com" className='hover:text-primary-500 transition-colors'>
            sushmitajaiswal1000@gmail.com
          </a>
        </div>
        <div className='flex items-center gap-2'>
          <BsTelephoneFill className='text-2xl text-primary-500' />
          <span>+91 9005267069</span>
        </div>
        <div className='flex gap-4 mt-4'>
          <a href="https://www.linkedin.com/in/sushmitajaiswal/" target="_blank" rel="noopener noreferrer" className='hover:text-primary-500 transition-colors'>
            <AiFillLinkedin className='text-3xl' />
          </a>
          <a href="https://github.com/Sjais6165" target="_blank" rel="noopener noreferrer" className='hover:text-primary-500 transition-colors'>
            <AiFillGithub className='text-3xl' />
          </a>
        </div>
      </div>

      <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-2 lg:w-1/2'>
        <div className='dark:text-slate-500 lg:flex gap-6'>
          <input type="hidden" name="access_key" value="a3acc553-464c-4fc0-ab60-2ba7b134788f" />
          <input type="text" name="name" className='w-full my-3 rounded-lg p-4 border-2 border-primary-800 border-glow text-xl bg-white dark:bg-slate-800' placeholder='Enter Your Full Name' required />
          <input type="email" name="email" className='w-full my-3 rounded-lg p-4 border-2 border-primary-800 border-glow text-xl bg-white dark:bg-slate-800' placeholder='Enter Your Email' required />
        </div>
        <textarea name="message" className='w-full my-3 rounded-lg bg-white dark:bg-slate-800 p-4 border-2 border-primary-800 border-glow text-xl' placeholder='Enter Your Message...' cols="20" rows="10" required ></textarea>
        <button
          className='nano-button my-3 shadow-xl hover:shadow-primary-800/50 text-black dark:text-white border-2 hover:bg-primary-800 border-primary-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden border-glow'
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
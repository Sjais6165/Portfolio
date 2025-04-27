import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import img from '../../assets/profile.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Home() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [1000])

  const social = [
    {
      link: 'https://www.linkedin.com/in/sushmitajaiswal/',
      icon: <FaLinkedinIn/>,
    },
    {
      link: 'https://github.com/Sjais6165',
      icon: <AiFillGithub/>,
    }
  ]

  return (
    <div id='Home' className=' bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center '>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal uppercase'>
          Welcome To <span className='text-fuchsia-500'>My Portfolio Website</span>
        </h1>
        <p data-aos='fade-left'>Hi, I'm Sushmita Jaiswal, a Computer Science and Engineering student at Lovely Professional University. I specialize in building modern web applications using technologies like React.js, Node.js, and MongoDB. With a strong foundation in both front-end and back-end development, I'm passionate about creating efficient and user-friendly solutions.</p>
        <div data-aos='fade-up' className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            
            <div className='flex space-x-2'>
              {social.map((social, index) => (
                <a key={index} target="_blank" href={social.link} className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                <div className='text-[28px]'>
                {social.icon}
                </div>
              </a>
              ))}

            </div>
          </div>
        </div>
      </div>
      <img data-aos='fade-up' src={img} width={290} height={290} alt="" className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' />
    </div>
  )
}

export default Home

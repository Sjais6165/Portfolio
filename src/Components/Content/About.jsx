import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/profile.jpg'
import Resume from '../../assets/Resume.pdf'


function About() {

  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left'>
          Hello, I'm Sushmita Jaiswal, a passionate Computer Science and Engineering student at Lovely Professional University. With a strong foundation in both front-end and back-end development, I specialize in building modern web applications using technologies like React.js, Node.js, and MongoDB.
          <br />
          My technical expertise includes C++, Java, JavaScript, and various frameworks like HTML, CSS, Bootstrap, and Node.js. I'm also proficient in tools and platforms such as MongoDB, MySQL, Docker, and Jenkins. My problem-solving skills and adaptability have been demonstrated through various projects, including a Bicycle Buy & Sell Platform and a Secure File Sharing Application.
          <br />
          Currently pursuing my Bachelor of Technology with a CGPA of 6.6, I'm actively seeking opportunities to apply my skills in real-world scenarios. I believe in continuous learning and staying updated with the latest technologies in the ever-evolving field of software development.
        </p>
        <div className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume} target="_blank">
            <div className='nano-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
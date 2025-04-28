import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  const educationData = [
    {
      id: 1,
      school: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      duration: "Aug' 22 – Present",
      details: "CGPA: 6.8"
    },
    {
      id: 2,
      school: "Bishop Academy School",
      location: "Maharajganj, UP",
      degree: "Intermediate",
      duration: "Apr' 21 – Mar' 22",
      details: "Percentage: 83.4%"
    },
    {
      id: 3,
      school: "Bishop Academy School",
      location: "Maharajganj, UP",
      degree: "Matriculation",
      duration: "Apr' 19 – Mar' 20",
      details: "Percentage: 91.4%"
    }
  ]

  return (
    <div id='Education' className='bg-white text-black dark:bg-slate-900 dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-primary-500'>Education</h1>
      
      <div className='w-full max-w-4xl'>
        {educationData.map((edu, index) => (
          <div 
            key={edu.id} 
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} 
            className='mb-10 p-6 rounded-lg border-2 border-primary-800 border-glow hover:shadow-lg transition-all duration-300'
          >
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-2'>
              <h2 className='text-2xl font-bold text-primary-500'>{edu.school}</h2>
              <span className='text-sm text-gray-600 dark:text-gray-400'>{edu.location}</span>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-2'>
              <h3 className='text-xl font-semibold'>{edu.degree}</h3>
              <span className='text-sm text-gray-600 dark:text-gray-400'>{edu.duration}</span>
            </div>
            {edu.field && <p className='text-lg mb-2'>{edu.field}</p>}
            <p className='text-lg font-medium'>{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education 
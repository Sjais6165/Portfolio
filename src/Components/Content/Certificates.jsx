import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ServerSideScripting from '../../assets/Server side scripting.pdf'
import CloudComputing from '../../assets/Cloud Computing.pdf'
import DevopsCertificate from '../../assets/Devops certificate.pdf'
import Javascript from '../../assets/Javascript.pdf'

function Certificates() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  const certificatesData = [
    {
      id: 1,
      title: "Server Side Scripting",
      provider: "Coursera",
      date: "Dec' 24",
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a507212123a0de95/assemble-your-project.png?auto=format%2Ccompress&dpr=1",
      pdf: ServerSideScripting
    },
    {
      id: 2,
      title: "Certification in Cloud Computing",
      provider: "NPTEL",
      date: "Nov' 24",
      image: "https://nptel.ac.in/assets/images/nptel-logo.png",
      pdf: CloudComputing
    },
    {
      id: 3,
      title: "IBM DevOps and Software Engineering",
      provider: "Coursera",
      date: "Nov' 24",
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a507212123a0de95/assemble-your-project.png?auto=format%2Ccompress&dpr=1",
      pdf: DevopsCertificate
    },
    {
      id: 4,
      title: "Server Side Javascript with Node.js",
      provider: "Coursera",
      date: "May' 24",
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a507212123a0de95/assemble-your-project.png?auto=format%2Ccompress&dpr=1",
      pdf: Javascript
    }
  ]

  return (
    <div id='Certificates' className='bg-white text-black dark:bg-slate-900 dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-primary-500'>Certificates</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl'>
        {certificatesData.map((cert, index) => (
          <div 
            key={cert.id} 
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} 
            className='flex flex-col items-center p-6 rounded-lg border-2 border-primary-800 border-glow hover:shadow-lg transition-all duration-300'
          >
            <div className='w-full h-48 mb-4 overflow-hidden rounded-lg'>
              <embed 
                src={cert.pdf + "#toolbar=0&navpanes=0&scrollbar=0"}
                type="application/pdf"
                className="w-full h-full object-contain rounded-lg"
                style={{ height: "100%", width: "100%", minHeight: "200px" }}
              />
            </div>
            <h2 className='text-xl font-bold text-center mb-2'>{cert.title}</h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 mb-1'>{cert.provider}</p>
            <p className='text-sm text-gray-500 dark:text-gray-500 mb-4'>{cert.date}</p>
            <a 
              href={cert.pdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className='nano-button shadow-xl hover:shadow-primary-800/50 text-black dark:text-white border-2 hover:bg-primary-900 border-primary-800 rounded-lg py-2 px-6 uppercase relative overflow-hidden border-glow transition-all duration-300'
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates 
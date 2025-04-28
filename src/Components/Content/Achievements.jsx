import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CommunityProjectPDF from '../../assets/CommunityProject.pdf'
import DSAPDF from '../../assets/DSA.pdf'

function Activities() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  const activitiesData = [
    {
      id: 1,
      title: "Community Development Project (Women Empowerment)",
      organization: "NGO",
      date: "2023",
      description: `Led a comprehensive community development project focused on women empowerment in collaboration with a local NGO. The project involved organizing skill development workshops, awareness campaigns on women's rights, and providing resources for self-employment. Successfully impacted over 200 women by enhancing their skills, boosting their confidence, and enabling them to contribute to their families' income. The project report details the strategies, challenges, and outcomes achieved during the initiative.`,
      pdf: CommunityProjectPDF
    },
    {
      id: 2,
      title: "DSA Course Completion",
      organization: "GeeksforGeeks",
      date: "Jun' 24 – Jul' 24",
      description: `Completed an intensive Data Structures and Algorithms (DSA) course at GeeksforGeeks. The course covered advanced topics such as trees, graphs, dynamic programming, and algorithmic problem-solving. Demonstrated proficiency by solving over 100 coding problems and participating in mock coding interviews. The attached PDF contains the detailed course completion certificate and highlights of the projects and problems solved during the course.`,
      pdf: DSAPDF
    }
  ]

  return (
    <div id='Activities' className='bg-white text-black dark:bg-slate-900 dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-primary-500'>Activities</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl'>
        {activitiesData.map((activity, index) => (
          <div 
            key={activity.id} 
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} 
            className='flex flex-col p-6 rounded-lg border-2 border-primary-800 border-glow hover:shadow-lg transition-all duration-300 h-full items-center'
          >
            {activity.pdf ? (
              <div className='w-full h-48 mb-4 overflow-hidden rounded-lg'>
                <embed 
                  src={activity.pdf + "#toolbar=0&navpanes=0&scrollbar=0"}
                  type="application/pdf"
                  className="w-full h-full object-contain rounded-lg"
                  style={{ height: "100%", width: "100%", minHeight: "200px" }}
                />
              </div>
            ) : null}
            <h2 className='text-xl font-bold mb-2 text-center'>{activity.title}</h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 mb-1'>{activity.organization}</p>
            <p className='text-sm text-gray-500 dark:text-gray-500 mb-3'>{activity.date}</p>
            <p className='text-base mb-4'>{activity.description}</p>
            {activity.pdf && (
              <a 
                href={activity.pdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className='nano-button shadow-xl hover:shadow-primary-800/50 text-black dark:text-white border-2 hover:bg-primary-900 border-primary-800 rounded-lg py-2 px-6 uppercase relative overflow-hidden border-glow transition-all duration-300'
              >
                View PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activities 
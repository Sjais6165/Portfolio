import React, { useEffect, useState } from 'react'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Content/Home'
import About from './Components/Content/About'
import TechStack from './Components/Content/TechStack'
import Projects from './Components/Content/Projects'
import Education from './Components/Content/Education'
import Certificates from './Components/Content/Certificates'
import Activities from './Components/Content/Achievements'
import Contact from './Components/Content/Contact'
import Footer from './Components/Footer/Footer'
import { BallTriangle } from 'react-loader-spinner'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [loading, setLoading] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  //for loading screen
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'About', 'TechStack', 'Projects', 'Education', 'Certificates', 'Activities', 'Contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (top is near the top of the viewport)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {loading ?
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#0073ff"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        :
        <>
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="pt-16"> {/* Add padding to account for fixed navbar */}
            <Home />
            <About />
            <TechStack />
            <Projects />
            <Education />
            <Certificates />
            <Activities />
            <Contact />
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </>}
    </>
  )
}

export default App

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const navItems = [
    { name: 'Home', id: 'Home' },
    { name: 'About', id: 'About' },
    { name: 'TechStack', id: 'TechStack' },
    { name: 'Projects', id: 'Projects' },
    { name: 'Education', id: 'Education' },
    { name: 'Certificates', id: 'Certificates' },
    { name: 'Activities', id: 'Activities' },
    { name: 'Contact', id: 'Contact' },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-primary-900 shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-700 dark:text-primary-400 glow">
              Sushmita Jaiswal
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 nano-button
                    ${activeSection === item.id
                      ? 'bg-primary-200 text-white dark:bg-primary-400 border-glow'
                      : 'text-primary-200 hover:bg-primary-50 dark:text-primary-100 dark:hover:bg-primary-300'
                    }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-primary-700 hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800 transition-all duration-300 nano-button"
              >
                {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-primary-700 hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800 transition-all duration-300 nano-button mr-2"
            >
              {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-primary-700 hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800 transition-all duration-300 nano-button"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-primary-900 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 nano-button
                ${activeSection === item.id
                  ? 'bg-primary-200 text-white dark:bg-primary-400 border-glow'
                  : 'text-primary-200 hover:bg-primary-50 dark:text-primary-100 dark:hover:bg-primary-300'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
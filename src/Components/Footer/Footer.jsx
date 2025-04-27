import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Footer() {

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
        <footer className='md:flex md:px-10 lg:flex bg-white dark:bg-slate-800 text-black dark:text-white lg:px-48 px-4 py-5 justify-between border-t border-slate-800'>
                <div>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2'>Copyright © 2024. All rights are reserved</h2>
                </div>
                <div className='flex gap-4'>
                    {social.map((social, index) => (
                        <a key={index} target="_blank" href={social.link} className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                            <div className='text-[28px]'>
                                {social.icon}
                            </div>
                        </a>
                    ))}
                </div>
        </footer>
    )
}

export default Footer

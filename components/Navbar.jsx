'use client'

import{useState} from 'react'
import { navLinks } from '../data'
import {motion} from 'framer-motion'

import {navVariants} from '../styles/motion'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [navMobile,setNavMobile] = useState(false)
    
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='py-2 px-4 flex justify-between md:justify-start overflow-y-hidden gap-[2rem] md:gap-[8rem] lg:gap-[15rem] items-center h-[11vh] md:sticky md:top-0 wt z-50' >
        <div>
            <img src="/logo.png" alt="logoImage" className='w-20 ' />
        </div>
        <ul className='hidden md:flex items-center gap-10 text-shoot-perple ' >
            {navLinks.map((navLink)=>{
                return(
                    <li key={navLink.id} >
                        <a href={`#${navLink.navId}`}>{navLink.text}</a>
                    </li>
                )
            })}
        </ul>

        <div className='block md:hidden ' >
            {navMobile ? (
                <FaTimes
                className='text-3xl cursor-pointer'
                onClick={()=>setNavMobile(!navMobile)}  />
            ):(
                <FaBars
                className='text-3xl cursor-pointer'
                onClick={()=>setNavMobile(!navMobile)}  />
            )}
            {navMobile && (
                <ul className=' flex flex-col gap-10 text-shoot-white absolute top-[3rem] right-[1rem] bg-shoot-perple py-4 px-8 text-center '>
                {navLinks.map((link,index)=>{
                    return (
                            <li key={index} className='list-none' >
                            <a href={`#${link.navId}`} className='text-white'>
                                {link.text}
                            </a>
                        </li>
                    )
                })}
                </ul>
            )}

        </div>
    </motion.nav>
  )
}

export default Navbar
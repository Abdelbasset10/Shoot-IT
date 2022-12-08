'use client'

import {motion} from 'framer-motion'
import { slideIn, staggerContainer } from '../styles/motion'

import {FaFacebookF, FaYoutube, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className="w-full xl:h-screen bg pt-20 pb-20"
    id='contact'
    >
        <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className="w-[90%] lg:w-[80%] m-auto flex flex-col items-center bgHero2  gap-10">
            <p className=" text-xe sm:text-xl md:text-2xl lg:text-3xl text-shoot-white overflow-y-hidden" >YOU HAVE A QUESTION ? DONT'T HISTATE , CONTACT US </p>
            <img src="/logo.png" alt="logo" className="w-[25rem]" />
            <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row justify-between items-center w-full">
                <div className=' flex items-center flex-wrap justify-center text-shoot-white gap-10' >
                  <a href="https://web.facebook.com/club.scientifique.esi">
                    <FaFacebookF className='sm:text-[3rem] text-[2rem]  cursor-pointer hover:text-shoot-blue'  />
                  </a>   
                  <a href="https://www.youtube.com/@ClubScientifiqueESI-CSE">
                    <FaYoutube className='sm:text-[3rem] text-[2rem] cursor-pointer hover:text-shoot-blue'  />
                  </a>
                  <a href="https://www.instagram.com/cse.club/">
                    <FaInstagram className='sm:text-[3rem] text-[2rem] cursor-pointer hover:text-shoot-blue'  />
                  </a>  
                  <a href="https://www.linkedin.com/company/cse-club/?fbclid=IwAR2_1RlplhAYkXJvC5gvKA5i0xDB2UEMot1hYq7OhX0r-9Z67S370cVIapg">
                    <FaLinkedin className='sm:text-[3rem] text-[2rem] cursor-pointer hover:text-shoot-blue'  />
                  </a>
                  <a href="https://twitter.com/CSESI_Club?t=W9ojoaRo2UvR6dvDVzWDtQ&s=09&fbclid=IwAR2lvOlxQpXjPO-gG35pZ9ez5Xz3K5cJkyQSGpVTar_898aaVoPmFn_F4s8">
                    <FaTwitter className='sm:text-[3rem] text-[2rem] cursor-pointer hover:text-shoot-blue'  />
                  </a>        
                </div>
                <div className='flex items-center gap-4' >
                  <img src="/c.jpg" alt="cseLogo" className='w-[2rem] h-[2rem] rounded-[50%]' />
                  <p className='text-shoot-blue text-3xl lg:text-4xl overflow-y-hidden' >FIND US HERE !!</p>
                </div>
                

            </div>

        </motion.div>

    </motion.div>
  )
}

export default Footer
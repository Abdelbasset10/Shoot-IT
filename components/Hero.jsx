'use client'
import {motion} from 'framer-motion'
import { staggerContainer, textVariant } from '../styles/motion'
import {GiPositionMarker} from 'react-icons/gi'
import {MdOutlineViewAgenda} from 'react-icons/md'


const Hero = () => {
  return (
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className='w-full xl:h-[89vh]  bg pb-16'
    id="home" >
      <div className='w-[90%] lg:w-[80%] overflow-y-hidden m-auto flex flex-col bgHero2 gap-2 text-center items-center justify-center '>
        <motion.img src="/logo.png" alt="logogImg"
        variants={textVariant(1.1)}
        className='w-[10rem]' />
        <motion.h1
        variants={textVariant(1.1)}
         className='text-shoot-white overflow-y-hidden	 text-4xl sm:text-5xl md:text-7xl lgtext-8xl font-bold' >SH<span className='text-shoot-perple' >OO</span>T <span className='text-shoot-perple' >I</span>T</motion.h1>
        <motion.p
        variants={textVariant(1.2)} 
        className='text-base sm:text-xl  md:text-2xl text-shoot-white' >Explore the world around you, discover its secret beauties <br /> and let a new side of yourself shine with Shoot it!</motion.p>
        <motion.p
        variants={textVariant(1.3)}
        className='my-4 text-sm text-shoot-white sm:w-[80%] m-auto'>it's a new idea for an event that will see the light for its first version in April 2023. SHOOT IT will start by offering workshops in photography and editing. It will later on organize an outing to a before-hand chosen location to allow candidates to prepare the necessary photos and videos to finally implement it in the last day competition.</motion.p>
        <motion.div
        variants={textVariant(1.4)}
        className='flex flex-col md:flex-row items-center	 gap-4 md:gap-0 justify-between  w-full'>
        <div className='flex  gap-4 items-center   rounded-[12px] px-4 py-2 bg-shoot-perple w-[70%] md:w-[45%] lg:w-[40%] sm:justify-center  cursor-pointer text-shoot-white '>
            <MdOutlineViewAgenda className='md:text-xl text-2xl xl:text-3xl' />
            <p className='text-lg sm:text-xl overflow-y-hidden	 xl:text-2xl'>April 20-22, 2023</p>
          </div>
          <div className='flex  gap-4 items-center   rounded-[12px] px-4 py-2 bg-shoot-perpleDark w-[70%] md:w-[45%] lg:w-[40%] sm:justify-center cursor-pointer text-shoot-white ' >
            <GiPositionMarker className='md:text-xl text-2xl xl:text-3xl' />
            <p className='text-lg sm:text-xl overflow-y-hidden	 xl:text-2xl' >Marriott Hotel Bab Ezzouar</p>
          </div>

          


        </motion.div>

        <motion.button
        variants={textVariant(1.4)}
        className=' text-xl md:text-2xl text-shoot-perple rounded-[12px] w-[70%] md:w-fit mt-4   px-8 bg-shoot-white px-10 py-2' >Discover more </motion.button>


      </div>
    </motion.div>
  )
}

export default Hero
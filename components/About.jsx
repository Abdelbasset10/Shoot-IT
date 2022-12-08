'use client'
import {motion} from 'framer-motion'
import { slideIn, staggerContainer } from '../styles/motion'


const About = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className='w-full bg py-10'
    id='about'
     >
      
        <div className='w-[90%] m-auto bgHero2 '>
          <h1 className='mb-10 text-4xl overflow-y-hidden	 sm:text-5xl text-shoot-blue font-bold' >Who Are We</h1>
            <motion.div
            variants={slideIn('right','tween',0.2,1)}
            className='gap-8 flex flex-col-reverse md:flex-row justify-between items-center' >
            <div className='flex-[1] flex flex-col gap-4 xl:gap-0 ' >
              <img src="/t1.png" alt="t1Img" className='w-[28rem]' />
              <img src="/t2.png" alt="t2Img" className='w-[28rem] xl:-mt-10  xl:self-end	' />
            </div>

            <div className='sm:px-8 px-4 py-4 flex-[1] wt1 text-shoot-white text-center' >
              <p>CSE -Club Scientifique de l'ESI- is a student club at the Higher National School of Computer Science, Algiers.
                It is created for computer science, high technology, robotics, design and anything else technology-related enthusiasts. CSE's activities made it establish itself on a national & international scale and became one of the country's largest & most active clubs.  </p>
            </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default About
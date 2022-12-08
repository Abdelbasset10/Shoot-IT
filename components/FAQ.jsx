'use client' 
import {motion} from 'framer-motion'
import { slideIn, staggerContainer } from '../styles/motion'
import {FaQuestion} from 'react-icons/fa'
const FAQ = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className="w-full bg  py-10"
    id="faq" >
        <motion.div
        variants={slideIn('left','tween',0.2,1)}
         className="w-[90%] m-auto bgHero2">
          <h1 className="text-4xl font-bold overflow-y-hidden	 text-shoot-white mb-10" >Your Questions</h1>
          <div className=" flex flex-col-reverse md:flex-row justify-between md:items-end" >
          <div className="flex flex-col gap-10 text-shoot-white text-lg sm:text-2xl lg:text-4xl font-bold" >
            <p className='overflow-y-hidden	' >- How can we participate  ?</p>
            <p className='overflow-y-hidden	'>- Do i need to have a team before joining ?</p>
            <p className='overflow-y-hidden	'>- Why join us ?</p>
            <p className='overflow-y-hidden	'>- Is it free ??</p>
          </div>
          <FaQuestion className='hidden md:block lg:text-[15rem] text-shoot-blue' />

          </div>
          
               
        </motion.div>
    </motion.div>
  )
}

export default FAQ
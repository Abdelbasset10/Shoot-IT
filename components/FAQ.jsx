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
    className="w-full bg 2xl:h-screen  py-10"
    id="faq" >
        <motion.div
        variants={slideIn('left','tween',0.2,1)}
         className="w-[90%] m-auto bgHero2">
          <h1 className="text-4xl font-bold overflow-y-hidden	 text-shoot-blue mb-10" >Your Questions</h1>
          <div className=" flex flex-col-reverse md:flex-row justify-between md:items-end" >
          <div className="flex flex-col gap-10 text-shoot-white 	 " >
            <div>
              <p className='overflow-y-hidden text-xl sm:text-2xl lg:text-4xl font-bold' >- How can we participate  ?</p>
              <p className='text-lg' >You find the link to the registrations on our instagram bio or in pinned post on our facebook page </p>
            </div>

            <div>
              <p className='overflow-y-hidden text-xl sm:text-2xl lg:text-4xl font-bold'>- Do i need to have a team before joining ?</p>
              <p className='text-lg'>It's better to have a team of 4 people, But event if you dont'have a freind interested in this event, we will put you with the rest of the participants who don't have a team either</p>
            </div>
            
            
            <div>
              <p className='overflow-y-hidden text-xl sm:text-2xl lg:text-4xl font-bold'>- Why join us ?</p>
              <p className='text-lg'>Shoot it allows you to devolp your skills in th field of videography and introduces you to know people who have common characterestics with you, it will also allow you to live perfect and enjoyable moements</p>
            </div>
            
            <div>
              <p className='overflow-y-hidden text-xl sm:text-2xl lg:text-4xl font-bold'>- Is it free ??</p>
              <p className='text-lg'>Yes, of course , it's free, so what are you waiting for to join us !</p>
            </div>
          </div>
          <FaQuestion className='hidden md:block lg:text-[15rem] text-shoot-blue' />

          </div>
          
               
        </motion.div>
    </motion.div>
  )
}

export default FAQ
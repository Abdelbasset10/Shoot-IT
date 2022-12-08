'use client'
import {useState} from 'react'
import {motion} from 'framer-motion'
import { staggerContainer, slideIn } from '../styles/motion'

import { agendaDay1, agendaDay2, agendaDay3 } from '../data'

import arrow from '../public/arrow.png'


const Agenda = () => {
    const [isDay3,setIsDay3] = useState(false)
  return (
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    className='w-full  py-10'
    id='agenda'>
        <motion.div
        variants={slideIn('left','tween',0.2,1)}
        className='w-[90%] m-auto bgHero2'
        >
            <h1 className='text-4xl overflow-y-hidden	 font-bold  text-shoot-white mb-10 '>Event Agenda</h1>
            {isDay3 ? (
                <div className='text-shoot-white' >
                <h1 className='text-xl sm:text-2xl font-bold text-center' >April 21 , 2023</h1>
                <h1 className='text-xl sm:text-2xl font-bold text-center my-8'>Trip day for shooting & filming</h1>
                <div className='flex flex-col gap-4' >
                    {agendaDay3.map((agenda)=>{
                    return(
                        <div className='flex gap-4 md:gap-10 items-center' key={agenda.id} >
                                <p className='text-xs sm:text-base w-[10rem] sm:w-[15rem]  xl:w-[10rem]' >{agenda.time}</p>
                                <img src="/arrow.png" alt="arrowImg" className='w-4 md:w-10' />
                                <p className='text-xs w-full xl:w-[20rem] sm:text-base' >{agenda.tache}</p>
                            </div>
                    )
                    })}
                </div>
            </div>
            ):(

                <div className='flex flex-col items-start xl:flex-row lg:flex-between gap-8' >
                <div className=' text-shoot-white' >
                    <h1 className='text-xl sm:text-2xl font-bold text-center' >April 20 , 2023</h1>
                    <h1 className='text-xl sm:text-2xl font-bold text-center my-8'>Training & workshops</h1>
                    <div className='flex flex-col gap-4' >
                        {agendaDay1.map((agenda)=>{
                        return(
                            <div className='text-xs flex justify-between gap-4 xl:gap-10 items-center' key={agenda.id} >
                                <p className='text-xs sm:text-base sm:text-base w-[10rem] sm:w-[15rem]  xl:w-[10rem]' >{agenda.time}</p>
                                <img src="/arrow.png" alt="arrowImg" className='w-4 md:w-10' />
                                <p className='w-full sm:text-base xl:w-[20rem]' >{agenda.tache}</p>
                                <div className='hidden xl:block w-1 h-8 bg-shoot-blue' ></div>
                            </div>
                        )
                        })}
                    </div>
                </div>

                <div className=' text-shoot-white' >
                    <h1 className='text-xl sm:text-2xl font-bold text-center' >April 21 , 2023</h1>
                    <h1 className='text-xl sm:text-2xl font-bold text-center my-8'>Trip day for shooting & filming</h1>
                    <div className='flex flex-col gap-4' >
                        {agendaDay2.map((agenda)=>{
                        return(
                            <div className='text-xs flex justify-between gap-4 xl:gap-10 items-center' key={agenda.id} >
                                <p className='text-xs sm:text-base w-[10rem] sm:w-[15rem]  xl:w-[10rem]' >{agenda.time}</p>
                                <img src="/arrow.png" alt="arrowImg" className='w-4 md:w-10' />
                                <p className='w-full sm:text-base xl:w-[20rem]' >{agenda.tache}</p>
                            </div>
                        )
                        })}
                    </div>
                </div>
            </div>
                
            )}
            <button className='self-end px-8 py-2 rounded-[12px] text-shoot-white bg-transparent border-2 mt-4' onClick={()=>setIsDay3(!isDay3)} >{isDay3 ? 'Previous':'Next'}</button>
        </motion.div>
    </motion.div>
  )
}

export default Agenda
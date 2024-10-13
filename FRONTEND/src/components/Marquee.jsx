import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-zinc-500'>
        <div className='text border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration:10}} className='text-[30vh] leading-none font-mono font-semibold pt-5 pb-5 px-5 py-5'>WE ARE GOOD TO GO ;&#41;&emsp;</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration:10}} className='text-[30vh] leading-none font-mono font-semibold pt-5 pb-5 px-5 py-5'>WE ARE GOOD TO GO ;&#41;&emsp;</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration:10}} className='text-[30vh] leading-none font-mono font-semibold pt-5 pb-5 px-5 py-5'>WE ARE GOOD TO GO ;&#41;&emsp;</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
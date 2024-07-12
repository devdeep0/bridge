"use client"
import React from 'react'
import { FlipWordsDemo } from './comps/flipwords'
import Example from './comps/floatingphone'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { TextGenerateEffectDemo } from './comps/fadetext'
import { GlowingStarsBackgroundCardPreview } from './comps/starcards'
import { motion,AnimatePresence  } from "framer-motion";
import { GlobeDemo } from './comps/earth'

import Image from 'next/image'
function Main() {
   
  return (
    <>
    
    <div className=' z-50'>
    <motion.div
    className='flex p-5'
   animate={{}}
   initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    
   transition={{ ease: "easeOut", duration: 2 }}
><FlipWordsDemo/>
<GlobeDemo/> </motion.div>
    
   
    </div>
    <Parallax className='flex z-20'  pages={3} style={{ bottom: '0', left: '0' }}>
      <ParallaxLayer offset={0.9} speed={2.5}>
        <div className='relative z-20'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 329.5" fill="none" preserveAspectRatio="xMidYMid meet" role="img"><path d="M526.435 147.379L407.565 10.9763C401.488 4.00269 392.691 0 383.441 0H0V329.5H1440V158.355H550.559C541.309 158.355 532.512 154.352 526.435 147.379Z" fill="#cf6cfb"></path></svg>
      <div className='h-auto absolute z-20 top-[210px] bg-black w-full mb-1'>
        <div className='text-7xl font-bold p-10'>ABOUT US</div>
        <div className='w-full flex flex-col gap-10 items-center justify-center'>
        <div className='w-2/4 text-center text-xl mt-4'><TextGenerateEffectDemo/></div>
       
        <div className='absolute left-20 top-52 w-full flex items-center justify-center'>
        <div className=' h-[500px] w-[500px] flex items-center justify-center animate-scale'  style={{backgroundImage: `url('/bg/image-eda8ca29-dd8a-4284-b062-f3663c4a9783.webp')`,backgroundSize: 'contain', }}></div>
        </div>
        <div>
        
        <motion.div
    
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    ><GlowingStarsBackgroundCardPreview/></motion.div>

        </div>
        </div>
      
        <div className='relative w-full h-screen'>
        <motion.div
    
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }} 
    >
        <Image
        className='w-full h-full'
        src="/bg/image-6383d679-c05c-48a6-b90b-4ba9e3dabe29.webp"
        alt=''
        width={500} // Replace with your image's width
        height={300} // Replace with your image's height
        objectFit='cover'
      />
      </motion.div>
      <div className='absolute inset-0 flex top-40 text-7xl font-bold justify-center'>Our Vision</div>
      <div className='absolute bottom-40 text-4xl left-40 inset-1 flex justify-center items-end'>To see every African capable of operating an Ethereum node, contributing to a decentralized and empowered continent.</div>
        </div>
     
      </div>
      </div>
      </ParallaxLayer>
    </Parallax>

    </>
  )
}

export default Main
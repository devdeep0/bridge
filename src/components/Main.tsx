"use client"
import React from 'react'
import { FlipWordsDemo } from './comps/flipwords'
import Example from './comps/floatingphone'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { TextGenerateEffectDemo } from './comps/fadetext'
import { GlowingStarsBackgroundCardPreview } from './comps/starcards'
import { motion,AnimatePresence  } from "framer-motion";
import { GlobeDemo } from './comps/earth'
import { WavyBackgroundDemo } from './comps/wave'
import { CardStackDemo } from './comps/cardstack'
import { MeteorsDemo } from './comps/cardagain'
import { CanvasRevealEffectDemo3 } from './comps/betweenbg'
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
<GlobeDemo/>
 </motion.div>
    
   
    </div>
    <Parallax className='flex z-20'  pages={4} style={{ bottom: '0', left: '0' }}>
      <ParallaxLayer offset={0.9} speed={2}>
        <div className='relative z-20'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 329.5" fill="none" preserveAspectRatio="xMidYMid meet" role="img"><path d="M526.435 147.379L407.565 10.9763C401.488 4.00269 392.691 0 383.441 0H0V329.5H1440V158.355H550.559C541.309 158.355 532.512 154.352 526.435 147.379Z" fill="#cf6cfb"></path></svg>
      <div className='h-auto fixed z-20 top-[210px] bg-black w-full mb-1'>
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
    transition={{ duration: 3 }} 
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
      <div className='absolute bottom-40 text-4xl left-40 inset-1 flex  justify-center items-end'>To see every African capable of operating an Ethereum node, contributing to a decentralized and empowered continent.</div>
        </div>
        
      <div className='relative flex h-[500px]'>
      <video
      className='p-5 m-5'
      width="30%"
      autoPlay
      loop
      muted
      playsInline
      disableRemotePlayback
    >
      <source src="https://resources.suku.world/SukuVideos/sphere.mp4" type="video/mp4; codecs='hvc1'" />
      <source src="https://resources.suku.world/SukuVideos/sphere.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    <div className='flex flex-col items-center justify-center gap-5 h-full '>
    <div className='text-5xl font-bold'>
    Blockchain Health and Resilience
    </div>
    <div className='w-3/4'>The health, resilience, and censorship resistance of blockchains depend on having many independently operated and geographically dispersed full nodes. Each full node can help other new nodes obtain the block data to bootstrap their operation, as well as offer the operator an authoritative and independent verification of all transactions and contracts.</div>
    </div>
    <div>

    </div>
    </div>
      <div className='relative mt-72 z-20 h-full'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.000005595059974439209 -0.00011755200830521062 1440 254.5001220703125" fill="none" preserveAspectRatio="xMidYMid meet" role="img">
<path d="M886.873 54.6273L932.127 9.3725C938.129 3.37134 946.268 -8.27254e-05 954.755 -8.34673e-05L1440 -0.000117552L1440 254.5L3.54062e-05 254.5L5.59506e-06 64L864.245 63.9999C872.732 63.9999 880.871 60.6285 886.873 54.6273Z" fill="#FFF4E1"></path>
</svg>

<div className=' h-auto flex flex-col items-center absolute z-20 top-[240px] bg-black w-full '>
<div className='text-6xl w-full  m-5 flex items-start justify-end font-bold'>PROGRAMS</div>
<WavyBackgroundDemo/>
<div className='flex gap-40 h-full'>
  <div className='flex gap-10 flex-col items-center justify-center'>
    <h1 className='text-4xl '>Community Engagement</h1>
    <p>At NodeBridge, your voice matters. Participate in our forums, propose new ideas, and collaborate with peers.</p>
  </div>
<CardStackDemo/>
</div>
<div className='flex flex-col gap-20 w-full'>
<div className='flex flex-col mt-60 gap-5'>
<h1 className='text-4xl text-center'>Technical Support</h1>
<p className='text-center'>Overcome the technical challenges of running a node with our comprehensive support system.</p>
</div>
<MeteorsDemo/>
</div>

<div className='h-auto w-full mt-60'>
  <div className='relative'>
<svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 329.5" fill="none" preserveAspectRatio="xMidYMid meet" role="img"><path d="M526.435 147.379L407.565 10.9763C401.488 4.00269 392.691 0 383.441 0H0V329.5H1440V158.355H550.559C541.309 158.355 532.512 154.352 526.435 147.379Z" fill="#cf6cfb"></path></svg>
<div className='h-screen w-full absolute top-[200px] z-30'>
<CanvasRevealEffectDemo3/>
</div>
<div className='h-screen w-full '>
  
</div>
</div>
</div>
</div>
      </div>
      </div>
      </div>
      </ParallaxLayer>
      
    </Parallax>

   
    </>
  )
}

export default Main
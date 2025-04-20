'use client'
import Sliders from '@/components/Sliders'
import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

const page = () => {
     const [sliderPics, setSliderPics] = useState(['banner.jpg', 
      'banner.jpg', 'banner.jpg', 'banner.jpg'])

      useEffect(() => {
         const locomotiveScroll = new LocomotiveScroll();
       
         
       }, [])
  return (
    <div>
        <section className='max-w-7xl mx-auto px-4 py-5'>
            <Sliders pics={sliderPics} />
        </section>
    </div>
  )
}

export default page
'use client'
import HeroSection from '@/components/HeroSection'
import OurCoachingProgarm from '@/components/OurCoachingProgarm'
import Sliders from '@/components/Sliders'
import WhyChoose from '@/components/WhyChoose'
import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

const page = () => {
  const [sliderPics, setSliderPics] = useState(['Images/banner.jpg', 'Images/banner.jpg', 'Images/banner.jpg', 'Images/banner.jpg'])
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  
    
  }, [])
  
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4'>
        <Sliders pics={sliderPics} />
        <HeroSection/>
        
        <OurCoachingProgarm/>
      </div>
    </div>
  )
}

export default page
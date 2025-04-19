'use client'
import Sliders from '@/components/Sliders'
import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import ContactForm from '@/components/ContactForm';

const page = () => {
     const [sliderPics, setSliderPics] = useState(['images/banner.jpg', 'images/banner.jpg', 'images/banner.jpg', 'images/banner.jpg'])

      useEffect(() => {
         const locomotiveScroll = new LocomotiveScroll();
       
         
       }, [])
  return (
    <div>
        <section className='max-w-7xl mx-auto px-4 py-5'>
            <Sliders pics={sliderPics} />
            <ContactForm/>
        </section>
    </div>
  )
}

export default page
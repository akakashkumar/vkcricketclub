'use client'
import Sliders from '@/components/Sliders'
import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import ContactForm from '@/components/ContactForm';
import LocationMap from '@/components/LocationMap';

const page = () => {
     const [sliderPics, setSliderPics] = useState(['Images/banner.jpg', 'Images/banner.jpg', 'Images/banner.jpg', 'Images/banner.jpg'])

      useEffect(() => {
         const locomotiveScroll = new LocomotiveScroll();
       
         
       }, [])
  return (
    <div>
        <section className='max-w-7xl mx-auto px-4 py-5'>
            <Sliders pics={sliderPics} />
            <ContactForm/>
            <LocationMap/>
        </section>
    </div>
  )
}

export default page
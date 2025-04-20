'use client'
import Sliders from '@/components/Sliders'
import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

const page = () => {
     const [sliderPics, setSliderPics] = useState(['Images/banner.jpg', 'Images/banner.jpg', 'Images/banner.jpg', 'Images/banner.jpg'])
    const [pics, setPics] = useState([
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
        'Images/banner.jpg',
    ])
      useEffect(() => {
         const locomotiveScroll = new LocomotiveScroll();
       
         
       }, [])
  return (
    <div>
        <section className='max-w-7xl mx-auto px-4 py-5'>
            <Sliders pics={sliderPics} />
            <h2 className='text-3xl font-[font1] text-orange-600'>Gallery</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                {pics.map((pic, index)=>{
                    return(
                        <img className='rounded-xl ' src={pic} alt="image" key={index}/>
                    )
                })}
            </div>
        </section>
    </div>
  )
}

export default page
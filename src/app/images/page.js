'use client'
import Sliders from '@/components/Sliders'
import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

const page = () => {
     const [sliderPics, setSliderPics] = useState(['banner.jpg',
         'banner.jpg', 'banner.jpg', 'banner.jpg'])
    const [pics, setPics] = useState([
      
     'img.png',
       'img1.png',
       'img2.png',
       'img3.png',
       'img4.png',
       'img5.png',
       'img6.png',
       'img7.png',
       'img8.png',
       'img9.png',
       'img10.png',
       
       'img12.png',
       'img13.png',
       'img14.png',
       'img15.png',
       'img16.png',
       'img17.png',
      
    ])
      useEffect(() => {
         const locomotiveScroll = new LocomotiveScroll();
       
         
       }, [])
  return (
    <div>
        <section className='max-w-7xl mx-auto px-4 py-5'>
            <Sliders pics={sliderPics} />
            <h2 className='text-2xl  md:text-3xl  lg:text-4xl xl:text-5xl font-extralight font-sans'>Images</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                {pics.map((pic, index)=>{
                    return(
                        <img className='w-full rounded' src={pic} alt="image" key={index}/>
                    )
                })}
            </div>
        </section>
    </div>
  )
}

export default page
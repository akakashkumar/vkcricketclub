"use client";
import Sliders from "@/components/Sliders";
import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  const [sliderPics, setsliderPics] = useState([
    "banner.jpg",
    "banner.jpg",
    "banner.jpg",
    "banner.jpg",
  ]);
  const [videos, setVideos] = useState([
    {
      title: "Fitness session",
      video: "https://youtube.com/embed/MFZoZdHmGjc?si=v8G5MSWHrKG8MsZr",
    },
    {
      title: "Fitness Training",
      video: "https://youtube.com/embed/FhCeSBxrAko?si=g93wOaaSt6gqvwc6",
    },
    {
      title: "Back foot shorts",
      video: "https://youtube.com/embed/RnTr9bdrxPc?si=Vcvd5CeJtFUZqTno",
    },
    {
      title: "Junior team match",
      video: "https://youtube.com/embed/D67Y1gyZ-HU?si=Wzdea1Wpd1AaM91c",
    },
    {
      title: "Fitness training session",
      video: "https://youtube.com/embed/sbaXmfIZOPQ?si=Hs7Sej1korDJNDdd",
    },
    {
      title: "Hitting session",
      video: "https://youtube.com/embed/12lQc-xBXXs?si=MSuHIDifaQUzRMmR",
    },
    {
      title: "Warm-up",
      video: "https://youtube.com/embed/Xk8Oyubi-Cs?si=W_skevmz5LhccMnY",
    },
    {
      title: "Pull shorts",
      video: "https://youtube.com/embed/aVKSQJ02TMI?si=hjBzlgCNwrKB4lF5",
    },
  ]);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-5">
        <Sliders pics={sliderPics} />
        <h2 className="text-2xl md:text-3xl lg:4xl xl:text-5xl mb-3 font-sans font-extralight">Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {videos.map((video, index) => {
            return (
              <div key={index} >
                <h2 className="text-lg  mb-2 font-medium font-mono">{video.title}</h2>
                <iframe
                    className="w-full h-[72vh] rounded border"
                    src={video.video}
                    title="YouTube video player"
                    
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
              </div>
                 
               
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;

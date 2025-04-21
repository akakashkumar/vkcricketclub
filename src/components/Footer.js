"use client";
import Link from "next/link";
import React, {  useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import LocomotiveScroll from "locomotive-scroll";


const Footer = () => {
  const qickLinks = [
    {
      item: "About Us",
      path: "/about",
    },
    {
      item: "Players",
      path: "/players",
    },
    {
      item: "Matches",
      path: "/matches",
    },
    {
      item: "Images",
      path: "/images",
    },
  ];
  const [contactDetail, setContactDetail] = useState([
    {
      icon: <FaPhoneAlt />,
      item: 7903466054,
    },
    {
      icon: <MdEmail />,
      item: "vkcricketclub@gmail.com",
    },
    {
      icon: <FaLocationDot />,
      item: "Near Birsa Mundra Airport, Hundru Ranchi, Jharkhand",
    },
  ]);
  const [socialLinks, setSocialLinks] = useState([
    {
      item: "Instagram",
      icon: <FaInstagram />,
      path: "https://www.instagram.com/vkcricketclub",
    },
    {
      item: "Facebook",
      icon: <FaFacebook />,
      path: "https://www.facebook.com/profile.php?id=61565353854290",
    },
    {
      item: "Youtube",
      icon: <FaYoutube />,
      path: "https://www.youtube.com/@VkcricketClub-o3b",
    },
  ]);
       useEffect(() => {
          const locomotiveScroll = new LocomotiveScroll();
        }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      <footer className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
        <div className=" flex  flex-col">
          <Link className="flex lg:gap-3 gap-2 items-center" href={"/"}>
            <img className="lg:h-10 h-7" src="logo.png" alt="logo" />
            <h6 className="lg:text-2xl text-sm text-[#206a1d] dark:text-[#38ae33] font-sans">
              Vk Cricket Club
            </h6>
          </Link>
          <h6 className="text-sm mt-2 text-slate-700 dark:text-slate-400 text-justify font-sans">
            Our cricket club is a community of passionate players and fans
            dedicated to promoting the spirit of cricket. We welcome players of
            all skill levels, host regular matches and training sessions, and
            aim to foster teamwork, sportsmanship, and a love for the game.
          </h6>
        </div>
        <div>
          <h2 className="text-2xl text-orange-600">Quick Links</h2>
          <ul>
            {qickLinks.map((item, index) => {
              return (
                <li key={index} className="text-slate-700 dark:text-slate-400">
                  <Link href={item.path}>{item.item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-orange-600">Contact Us</h2>
          <ul>
            {contactDetail.map((e, i) => {
              return (
                <li
                  className=" text-slate-700 dark:text-slate-400 flex items-center gap-1"
                  key={i}
                >
                  {e.icon}
                  <p>{e.item}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-orange-600">Social Media Links</h2>
          <ul>
            {socialLinks.map((e, i) => {
              return (
                <li
                  className="flex items-center gap-1 text-slate-700 dark:text-slate-400 text-xl"
                  key={i}
                >
                  {e.icon}
                  <Link className="text-blue-600 underline hover:text-blue-700" href={e.path} target="_blank">
                    {e.item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
      <h6 className=" text-center mt-2 text-sm text-slate-700 dark:text-slate-400">
      &copy; 2025 Copyright, Vk Cricket Club
      </h6>
    </div>
  );
};

export default Footer;

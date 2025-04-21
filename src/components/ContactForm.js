import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const ContactForm = () => {
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
  return (
    <div>
      <h2 className="text-2xl mt-5 mb-2 sm:text-3xl md:text-4xl lg:text-5xl  font-extralight font-sans ">
        Contact Us
      </h2>
      <section className="  flex flex-col  lg:flex-row items-center gap-5 lg:gap-10 xl:gap-20">
        <div className=" w-full lg:w-1/2 flex flex-col gap-5">
          {contactDetail.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className="flex flex-col items-center ">
                  <CardTitle className="text-5xl">{item.icon}</CardTitle>
                  <CardDescription className="text-2xl text-center">
                    {item.item}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
        <div className="w-full lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 className="text-center text-xl font-sans font-normal lg:text-2xl">
                  Send Us a Message
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-5" action="">
                <input
                  className="p-2 px-4 border text-xl lg:w-full rounded"
                  required
                  type="text"
                  placeholder="Enter name "
                />
                <input
                  className="p-2 px-4 border lg:w-full text-xl rounded"
                  required
                  type="number"
                  placeholder="Enter phone number"
                />
                <input
                  className="p-2 px-4 border lg:w-full text-xl rounded"
                  required
                  type="email"
                  placeholder="Enter email"
                />
                <textarea
                  className="h-30  lg:h-40 lg:w-full text-xl border rounded p-2 px-4"
                  required
                  name=""
                  id=""
                  placeholder="Ente Message"
                ></textarea>
                <Button className="pointer-cursor">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="w-full py-5">
        <h2 className="text-2xl lg:text-4xl xl:text-5xl mb-4 mt-6 font-extralight font-sans">
          Social Media Links
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {socialLinks.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader >
                  <Link className="flex flex-col items-center gap-2" href={item.path} target="_blank">
                    <CardTitle className="text-5xl">{item.icon}</CardTitle>
                    <CardDescription className="text-2xl text-center hover:text-blue-700 text-blue-600 underline">
                      {item.item}
                    </CardDescription>
                  </Link>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

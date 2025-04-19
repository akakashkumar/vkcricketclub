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
  return (
    <div>
      <section className="  py-5 flex flex-col  lg:flex-row items-center gap-5 lg:gap-10 xl:gap-20">
        <div className=" w-full lg:w-1/2 flex flex-col gap-5">
          {contactDetail.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader className='flex flex-col items-center '>
                  <CardTitle className='text-5xl'>{item.icon}</CardTitle>
                  <CardDescription className='text-2xl text-center'>{item.item}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
        <div className="  ">
          <h3 className="mb-3 text-center text-2xl font-medium">
            Send Us a Message
          </h3>
          <form className="flex flex-col gap-5" action="">
            <input
              className="p-2 px-4 border text-xl lg:w-[400px] rounded"
              required
              type="text"
              placeholder="Enter name "
            />
            <input
              className="p-2 px-4 border lg:w-[400px] text-xl rounded"
              required
              type="number"
              placeholder="Enter phone number"
            />
            <input
              className="p-2 px-4 border lg:w-[400px] text-xl rounded"
              required
              type="email"
              placeholder="Enter email"
            />
            <textarea
              className="max-h-24  lg:h-40 lg:w-[400px] text-xl border rounded p-2 px-4"
              required
              name=""
              id=""
              placeholder="Ente Message"
            ></textarea>
            <Button className="pointer-cursor">Submit</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;

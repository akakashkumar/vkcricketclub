import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OurCoachingProgarm = () => {
  const [ourProgram, setOurProgram] = useState([
    {
      title: "Kids Cricket Coaching",
      content: "Fun and engaging introduction to the sport for young talents.",
    },
    {
      title: "Junior Development Program",
      content: "Building a strong foundation for aspiring cricketers..",
    },
    {
      title: "Advanced Skill Training",
      content: "Honing techniques for competitive play.",
    },
    {
      title: "Individual Coaching",
      content: "Personalized attention for focused improvement.",
    },
  ]);
  return (
    <div>
      <div className="py-5">
        <h2 className="text-3xl font-medium  ">Our Coaching Program</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {ourProgram.map((program, index) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.content}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCoachingProgarm;

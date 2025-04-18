import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Sliders = ({pics}) => {
  return (
    <div>
         <div className="  mx-auto pb-10">
              <Carousel
              plugins={[Autoplay({delay: 2000})]}
              className="w-full ">
                <CarouselContent>
                  {pics.map((pic, i) => {
                    return (
                      <CarouselItem key={i} >
                        <div>
                          <Card className='p-0 rounded '>
                            <CardContent className="p-0 ">
                              <img className="w-full rounded h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px]" src={pic} alt="" />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                
              </Carousel>
            </div>
    </div>
  )
}

export default Sliders
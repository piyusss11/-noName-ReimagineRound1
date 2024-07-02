import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemCard from "./ItemCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const ShopCarousel = (props) => {
  const { infoList, name } = props;
  const div = React.useRef();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".card",{
        x:-200,
        scrollTrigger:{
          scrub:true,
          trigger:div.current,
          // markers:true,
          end:"bottom 80%"
        }
      });
    },
    { scope: div }
  );
  return (
    <div ref={div} className="h-screen mt-10">
      <h1 className="pl-6 text-3xl font-semibold py-2">{name}</h1>
      <Carousel className="w-full ">
        <CarouselContent className="-ml-1">
          {infoList.map((item) => (
            <CarouselItem
              key={item?.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <CardContent className="card flex aspect-square items-center justify-center ">
                <ItemCard info={item} />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ShopCarousel;

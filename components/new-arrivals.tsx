"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedShoeCard from "./featured-shoe-card";

import { newArrivalsShoes } from "@/lib/data";

const NewArrivals = () => {
  return (
    <section>
      <header>
        <h1 className="text-3xl font-semibold mb-4 ml-1">New Arrivals</h1>
      </header>

      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[80%] md:w-[90%] lg:w-[95%]"
        >
          <CarouselContent>
            {newArrivalsShoes.map((shoe, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <FeaturedShoeCard shoe={shoe} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
export default NewArrivals;

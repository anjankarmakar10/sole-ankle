"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedShoeCard from "./featured-shoe-card";

import useFilterShoes from "@/hooks/useFilterShoes";
import { Skeleton } from "./ui/skeleton";

const NewArrivals = () => {
  const { shoes, loading } = useFilterShoes("new");

  return (
    <section>
      <header>
        <h1 className="text-2xl font-semibold mb-4 ml-1">New Arrivals</h1>
      </header>

      {loading ? (
        <div className="flex gap-4">
          <Skeleton className="h-[310px] w-full rounded-xl hidden lg:block" />
          <Skeleton className="h-[310px] w-full rounded-xl hidden md:block" />
          <Skeleton className="h-[310px] w-full rounded-xl" />
        </div>
      ) : (
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[80%] md:w-[90%] lg:w-[95%]"
          >
            <CarouselContent>
              {shoes?.map((shoe, index) => (
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
      )}
    </section>
  );
};
export default NewArrivals;

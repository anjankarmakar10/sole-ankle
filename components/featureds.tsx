"use client";

import { STARPI_URL } from "@/lib/constants";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import useFeaturedProducts from "@/hooks/useFeaturedProducts";

const Featureds = () => {
  const { data, isLoading } = useFeaturedProducts();

  if (isLoading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
        <Skeleton className="w-full h-80 sm:h-60 rounded-md " />
        <Skeleton className="w-full   h-80 sm:h-60 rounded-md " />
        <Skeleton className=" w-full   h-80 sm:h-60 rounded-md " />
        <Skeleton className="w-full h-80 sm:h-60 rounded-md " />
      </div>
    );

  return (
    <section>
      <header>
        <h1 className="text-2xl font-semibold mb-4 ml-1">Featured</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4">
        {data?.data?.slice(1, 5).map((shoe) => (
          <Link
            key={shoe.id}
            href="/"
            className="relative h-64 sm:h-60 shadow rounded-md "
          >
            <Image
              src={STARPI_URL + shoe.attributes.image.data.attributes.url}
              alt={shoe.attributes.name}
              loading="lazy"
              fill
              className="rounded-md object-cover 
            md:brightness-90 
            will-change-transform
            origin-[50% 75%]
            duration-700 
            transition-all

            hover:scale-110
            hover:transition-all
            hover:duration-300
            hover:brightness-100
            focus:scale-110
            focus:brightness-100
            focus:transition-all
            focus:duration-400

            group-hover:scale-110
            group-hover:transition-all
            group-hover:duration-300
            group-hover:brightness-100
            group-focus:scale-110
            group-focus:brightness-100
            group-focus:transition-all
            group-focus:duration-400
            "
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Featureds;

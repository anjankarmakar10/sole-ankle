"use client";

import useFilterShoes from "@/hooks/useFilterShoes";
import { STARPI_URL } from "@/lib/constants";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

const Featureds = () => {
  const { shoes, loading } = useFilterShoes("featured");

  if (!shoes) return;

  const shoe1 = shoes[1];
  const shoe2 = shoes[2];
  const shoe3 = shoes[3];
  const shoe4 = shoes[4];

  if (loading)
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
        <Link href="/" className="relative h-64 sm:h-60 shadow rounded-md ">
          <Image
            src={STARPI_URL + shoe1.attributes.image.data.attributes.url}
            alt={shoe1.attributes.name}
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
        <Link href="/" className="relative  h-64 sm:h-60">
          <Image
            src={STARPI_URL + shoe2.attributes.image.data.attributes.url}
            alt={shoe2.attributes.name}
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
        <Link href="/" className=" relative  h-64 sm:h-60">
          <Image
            src={STARPI_URL + shoe3.attributes.image.data.attributes.url}
            alt={shoe3.attributes.name}
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
        <Link href="/" className="relative h-64 sm:h-60 shadow rounded-md ">
          <Image
            src={STARPI_URL + shoe4.attributes.image.data.attributes.url}
            alt={shoe4.attributes.name}
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
      </div>
    </section>
  );
};
export default Featureds;

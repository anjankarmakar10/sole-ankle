"use client";

import Link from "next/link";
import ShoeCard from "./shoe-card";
import { getShoes } from "@/lib/api";
import useShoes from "@/hooks/useShoes";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { Skeleton } from "./ui/skeleton";
import useProducts from "@/hooks/useProducts";
const ShoeGrid = () => {
  const category = useSelector((state: RootState) => state.category.value);
  // const { shoes, loading } = useShoes(category)

  const { data, isLoading } = useProducts(category);

  const shoes = data?.data;

  if (shoes?.length === 0) return <div>no data found</div>;
  if (isLoading)
    return (
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {new Array(6).fill("").map((_, index) => (
          <article key={index} className="flex  flex-col gap-[14px] ">
            <Skeleton className="w-[327px] h-[218px] rounded-s-2xl  rounded-e-2xl  rounded-b-lg " />

            <div className="flex  justify-between gap-1 items-center">
              <Skeleton className="h-6 w-[226px]" />
              <Skeleton className="h-6 w-[64px]" />
            </div>
            <Skeleton className="h-6 w-[50px]" />
          </article>
        ))}
      </section>
    );

  return (
    <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {shoes?.map((shoe) => (
        <Link key={shoe.id} href={`/shoes/${shoe.id}`}>
          <ShoeCard shoe={shoe} />
        </Link>
      ))}
    </section>
  );
};
export default ShoeGrid;

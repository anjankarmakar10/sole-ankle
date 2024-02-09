import ShoeCardSkeleton from "@/components/shoe-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <div className="mt-8 md:mt-8 px-8 pb-8 flex flex-col gap-8">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <div className="md:basis-[100px] lg:basis-[248px]">
          <Skeleton className="h-5 w-[152px]" />
        </div>
        <div className="flex-1 flex justify-between items-center">
          <div>
            <Skeleton className="h-8 w-[95px]" />
          </div>
          <div>
            <Skeleton className="h-9 w-[228px]" />
          </div>
        </div>
      </div>

      <div className="flex gap-8 justify-center">
        <div className=" flex-col gap-2  text-gray-700 basis-[240px] font-medium  hidden md:flex md:basis-[120px] lg:basis-[240px]">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
        </div>
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {new Array(6).fill("").map((_, index) => (
            <ShoeCardSkeleton key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};
export default LoadingPage;

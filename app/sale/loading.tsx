import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <div className="mt-8 md:mt-8 px-8 pb-8 flex flex-col gap-8">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <div className="lg:basis-[248px] ">
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
        <div className=" flex-col gap-2  text-gray-700 basis-[248px] font-medium  hidden md:flex">
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
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
      </div>
    </div>
  );
};
export default LoadingPage;

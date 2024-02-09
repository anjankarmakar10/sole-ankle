import { Skeleton } from "./ui/skeleton";

const ShoeCardSkeleton = () => {
  return (
    <article className="flex  flex-col gap-[14px] w-full">
      <div className="w-full">
        <Skeleton className="w-full h-[218px] rounded-s-2xl  rounded-e-2xl  rounded-b-lg " />
      </div>
      <div className="flex  justify-between gap-1 items-center">
        <Skeleton className="h-6 w-[226px]" />
        <Skeleton className="h-6 w-[64px]" />
      </div>
      <Skeleton className="h-6 w-[50px]" />
    </article>
  );
};
export default ShoeCardSkeleton;

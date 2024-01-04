import { shoes } from "@/lib/data";
import ShoeImage from "./ShoeImage";
import convertToUSD from "@/lib/convertToUSD";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const ShoeGrid = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {shoes.map((shoe) => (
        <article
          className="flex flex-col gap-[14px] cursor-pointer"
          key={shoe.id}
        >
          <ShoeImage ratio={18 / 12} src={shoe.imageSrc} alt={shoe.name} />

          <div className="flex  flex-col gap-[6px]">
            <div className="flex  justify-between gap-1 items-center">
              <h2 className="font-semibold line-clamp-1 text-gray-800">
                {shoe.name}
              </h2>
              <span className="font-semibold text-gray-600">
                {convertToUSD(shoe.price)}
              </span>
            </div>
            <p className="text-gray-500">{shoe.numOfColors} colors </p>
          </div>
        </article>
      ))}
    </section>
  );
};
export default ShoeGrid;

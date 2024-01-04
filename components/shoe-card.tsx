import ShoeImage from "./ShoeImage";
import convertToUSD from "@/lib/convertToUSD";
import { Badge } from "./ui/badge";

interface Props {
  shoe: Shoe;
}

const ShoeCard = ({ shoe }: Props) => {
  return (
    <article className="flex flex-col gap-[14px] cursor-pointer  relative">
      {shoe.isNew && (
        <Badge className="absolute top-3 right-[-4px] z-10 py-[6px] bg-hot-blue hover:bg-hot-pink">
          Just Released!
        </Badge>
      )}

      <div className=" rounded-s-2xl isolate rounded-e-2xl overflow-hidden ">
        <ShoeImage ratio={18 / 12} src={shoe.imageSrc} alt={shoe.name} />
      </div>

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
  );
};
export default ShoeCard;

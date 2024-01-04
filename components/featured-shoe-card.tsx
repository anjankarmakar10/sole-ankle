import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import convertToUSD from "@/lib/convertToUSD";

import ShoeImage from "./ShoeImage";

interface Props {
  shoe: Shoe;
}

const FeaturedShoeCard = ({ shoe }: Props) => {
  return (
    <Card>
      <CardHeader className="p-4 overflow-hidden group cursor-pointer">
        <ShoeImage src={shoe.imageSrc} alt={shoe.name} />
        <CardTitle className="line-clamp-1 pt-1">{shoe.name}</CardTitle>
        <CardDescription>Number of colors: {shoe.numOfColors}</CardDescription>
        <CardDescription className="text-base font-semibold">
          Price: {convertToUSD(shoe.price)}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
export default FeaturedShoeCard;

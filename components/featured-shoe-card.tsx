import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import convertToUSD from "@/lib/convertToUSD";
import ShoeImage from "./ShoeImage";
import { STARPI_URL } from "@/lib/constants";

interface Props {
  shoe: Shoe;
}

const FeaturedShoeCard = ({ shoe }: Props) => {
  return (
    <Card>
      <CardHeader className="p-4 overflow-hidden group cursor-pointer">
        <ShoeImage
          src={STARPI_URL + shoe.attributes.image.data.attributes.url}
          alt={shoe.attributes.name}
        />
        <CardTitle className="line-clamp-1 pt-1">
          {shoe.attributes.name}
        </CardTitle>
        <CardDescription>Number of colors: {2}</CardDescription>
        <CardDescription className="text-base font-semibold">
          Price: {convertToUSD(shoe.attributes.price)}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
export default FeaturedShoeCard;

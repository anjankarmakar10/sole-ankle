import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import convertToUSD from "@/lib/convertToUSD";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

interface Props {
  shoe: Shoe;
}

const FeaturedShoeCard = ({ shoe }: Props) => {
  return (
    <Card>
      <CardHeader className="p-4 overflow-hidden group cursor-pointer">
        <AspectRatio
          ratio={16 / 10}
          className="bg-muted overflow-hidden rounded"
        >
          <Image
            src={shoe.imageSrc}
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover 
            brightness-90 
            will-change-transform
            origin-[50% 75%]
            duration-700 transition-all
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
        </AspectRatio>
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

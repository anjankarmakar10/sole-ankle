import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
  src: string;
  alt: string;
  ratio?: number;
}

const ShoeImage = ({ src, alt, ratio }: Props) => {
  return (
    <AspectRatio
      ratio={ratio || 16 / 10}
      className="bg-muted overflow-hidden rounded"
    >
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        fill
        className="rounded-md object-cover 
            brightness-90 
            will-change-transform
            origin-[50% 75%]
            duration-700 transition-all

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
    </AspectRatio>
  );
};
export default ShoeImage;

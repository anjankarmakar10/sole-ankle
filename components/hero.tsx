import heroImage from "@/public/hero-image.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = async () => {
  return (
    <section className="mx-auto flex items-center  flex-col md:flex-row  py-8 gap-8 md:gap-4 hero-height">
      <div className="flex-1 self-center text-center lg:text-start">
        <h1 className=" text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight md:leading-normal lg:leading-[108px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="mx-auto lg:mx-0 py-5 font-semibold leading-6 max-w-md text-[#5A5959]">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <Button size={"lg"} className="px-8">
          Shop now
        </Button>
      </div>
      <div className="flex-1 self-center lg:flex justify-end hidden">
        <Image className="animate-bounce " src={heroImage} alt="banner" />
      </div>
    </section>
  );
};
export default Hero;

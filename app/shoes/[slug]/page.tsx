import ShoeImage from "@/components/ShoeImage";
import { Button } from "@/components/ui/button";

import { getShoe } from "@/lib/api";
import { STARPI_URL } from "@/lib/constants";
import convertToUSD from "@/lib/convertToUSD";
import { Heart } from "lucide-react";

interface Params {
  params: {
    slug: string;
  };
}
const ShoeDetailsPage = async ({ params }: Params) => {
  const { data } = await getShoe(params.slug);

  console.log(data.attributes.colors.data);

  return (
    <section className=" mt-8 md:my-16 px-4 md:px-10 lg:px-20 pb-8 grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 md:items-center">
      <ShoeImage
        ratio={16 / 12}
        src={STARPI_URL + data.attributes.image.data.attributes.url}
        alt={data.attributes.name}
      />
      <div>
        <div>
          <h1 className="text-2xl font-bold capitalize">
            {data.attributes.name}
          </h1>
          <span className="font-semibold text-gray-500">
            Price: {convertToUSD(data.attributes.price)}
          </span>
        </div>
        <div className="py-8">
          <h2 className="text-lg font-semibold">Select Size</h2>
          <div className="flex gap-4 flex-wrap my-2 justify-center sm:justify-normal">
            {data.attributes.sizes.data.map((size) => (
              <article
                className="px-8 py-3 border rounded-md cursor-pointer hover:border-blue-500 transition-all"
                key={size.id}
              >
                EU {size.attributes.number}
              </article>
            ))}
          </div>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Button className="w-full text-lg py-8">Add to Bag</Button>
          <Button className="w-full text-lg py-8 gap-1" variant={"outline"}>
            Favourite
            <Heart width={18} height={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ShoeDetailsPage;

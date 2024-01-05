import ShoeCard from "./shoe-card";
import { getShoes } from "@/lib/api";

const ShoeGrid = async () => {
  const data: Response = await getShoes();

  console.log(data.data);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {data.data.map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe} />
      ))}
    </section>
  );
};
export default ShoeGrid;

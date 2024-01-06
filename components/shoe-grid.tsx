import Link from "next/link";
import ShoeCard from "./shoe-card";
import { getShoes } from "@/lib/api";

const ShoeGrid = async () => {
  const data = await getShoes();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {data.data.map((shoe) => (
        <Link key={shoe.id} href={`/shoes/${shoe.id}`}>
          <ShoeCard shoe={shoe} />
        </Link>
      ))}
    </section>
  );
};
export default ShoeGrid;

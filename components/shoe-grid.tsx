import { shoes } from "@/lib/data";

import ShoeCard from "./shoe-card";

const ShoeGrid = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {shoes.map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe} />
      ))}
    </section>
  );
};
export default ShoeGrid;

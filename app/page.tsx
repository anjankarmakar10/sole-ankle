import Featureds from "@/components/featureds";
import Hero from "@/components/hero";
import NewArrivals from "@/components/new-arrivals";

export default function Home() {
  return (
    <>
      <main className="mt-8 md:mt-8 px-8 flex flex-col gap-8">
        <Hero />
        <NewArrivals />
        <Featureds />
      </main>
    </>
  );
}

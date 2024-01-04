import ShoeGrid from "@/components/shoe-grid";
import ShoePageHeader from "@/components/shoe-page-header";
import Sidebar from "@/components/shoe-sidebar";

const SalePage = () => {
  return (
    <div className="mt-8 md:mt-8 px-8 pb-8 flex flex-col gap-8">
      <header>
        <ShoePageHeader />
      </header>

      <div className="flex gap-8 justify-center">
        <Sidebar />
        <ShoeGrid />
      </div>
    </div>
  );
};
export default SalePage;

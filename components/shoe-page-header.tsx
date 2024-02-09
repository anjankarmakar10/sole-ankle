import CategoryHeader from "./category-header";
import FilterSort from "./filter-sort";
import MobileFilters from "./mobile-filters";

const ShoePageHeader = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <div className="lg:basis-[248px]">
        <ol className="list-reset flex text-sm text-gray-600 font-medium">
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2 ">/</span>
          </li>

          <li className="">Shop</li>
        </ol>
      </div>
      <div className="flex-1 flex justify-between items-center">
        <CategoryHeader />
        <div className="hidden sm:flex">
          <FilterSort />
        </div>
        <div className="block sm:hidden">
          <MobileFilters />
        </div>
      </div>
    </div>
  );
};
export default ShoePageHeader;

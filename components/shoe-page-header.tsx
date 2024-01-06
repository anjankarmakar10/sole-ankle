import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShoePageHeader = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <div className="lg:basis-[248px] ">
        <ol className="list-reset flex text-sm text-gray-600 font-medium">
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2 ">/</span>
          </li>

          <li className="">Sale</li>
        </ol>
      </div>
      <div className="flex-1 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">All Shoes</h1>
        <div className=" items-center gap-4 hidden sm:flex">
          <span className="text-gray-600">Sort</span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="font-medium">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="newest">Newest Releases</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
export default ShoePageHeader;

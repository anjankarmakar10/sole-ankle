import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShoePageHeader = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <div className="lg:basis-[248px] ">
        <ol className="list-reset flex text-sm text-gray-600">
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2 ">/</span>
          </li>
          <li>
            <a href="#" className="">
              Sale
            </a>
          </li>
          <li>
            <span className="mx-2 ">/</span>
          </li>
          <li className="">Shoes</li>
        </ol>
      </div>
      <div className="flex-1 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Running</h1>
        <div className=" items-center gap-4 hidden sm:flex">
          <span className="text-gray-600">Sort</span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
export default ShoePageHeader;

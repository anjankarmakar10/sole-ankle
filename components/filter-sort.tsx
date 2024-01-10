"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setFilters } from "@/redux/state/filters/filtersSlice";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";

const FilterSort = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filters);
  return (
    <div className="flex items-center gap-4 ">
      <span className="text-gray-600">Sort</span>
      <Select
        onValueChange={(value) =>
          dispatch(
            setFilters({
              price: value,
              category: filter.category,
            })
          )
        }
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Sort by price" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="font-medium">
            <SelectItem value=" ">None</SelectItem>
            <SelectItem value="price:asc">Price: Low to High</SelectItem>
            <SelectItem value="price:desc">Price: High to Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default FilterSort;

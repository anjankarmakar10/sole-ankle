"use client";

import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";

const CategoryHeader = () => {
  const category = useSelector((state: RootState) => state.filters.category);

  return (
    <h1 className="text-2xl font-semibold capitalize">
      {category ? category : "all shoes"}
    </h1>
  );
};
export default CategoryHeader;

"use client";

import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";

const CategoryHeader = () => {
  const category = useSelector((state: RootState) => state.category.value);

  return <h1 className="text-2xl font-semibold capitalize">{category}</h1>;
};
export default CategoryHeader;

"use client";

import { setCategory } from "@/redux/state/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const categories: SubCategory[] = [
  {
    id: 0,
    attributes: {
      name: "all shoes",
    },
  },
  {
    id: 1,
    attributes: {
      name: "running",
    },
  },
  {
    id: 2,
    attributes: {
      name: "jordan",
    },
  },
  {
    id: 3,
    attributes: {
      name: "lifestyle",
    },
  },
  {
    id: 4,
    attributes: {
      name: "football",
    },
  },
  {
    id: 5,
    attributes: {
      name: "walking",
    },
  },
  {
    id: 6,
    attributes: {
      name: "basketball",
    },
  },
  {
    id: 7,
    attributes: {
      name: "tennis",
    },
  },
  {
    id: 8,
    attributes: {
      name: "athletics",
    },
  },
  {
    id: 9,
    attributes: {
      name: "golf",
    },
  },
  {
    id: 10,
    attributes: {
      name: "training",
    },
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.category.value);

  return (
    <div className=" flex-col gap-2  text-gray-700 basis-[248px] font-medium hidden md:flex capitalize cursor-pointer">
      {categories.map((item) => (
        <div
          className={`${
            item.attributes.name === category ? "font-bold text-gray-800" : ""
          }`}
          onClick={() => dispatch(setCategory(item.attributes.name))}
          key={item.id}
        >
          {item.attributes.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

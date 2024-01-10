"use client";

import { setFilters } from "@/redux/state/filters/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const categories: SubCategory[] = [
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
  const filter = useSelector((state: RootState) => state.filters);

  return (
    <div className=" sm:flex-col sm:gap-2  text-gray-700 md:basis-[120px] lg:basis-[248px] font-medium  capitalize cursor-pointer flex flex-wrap gap-5">
      <div
        className={`${
          "" === filter.category
            ? "font-bold border sm:border-none   text-gray-800"
            : " "
        } px-2  py-1 sm:p-0 rounded transition-all`}
        onClick={() =>
          dispatch(
            setFilters({
              category: "",
              price: filter.price,
            })
          )
        }
      >
        All Shoes
      </div>
      {categories.map((item) => (
        <div
          className={`${
            item.attributes.name === filter.category
              ? "font-bold sm:border-none  border text-gray-800"
              : " "
          } px-2  py-1 sm:p-0 rounded transition-all`}
          onClick={() =>
            dispatch(
              setFilters({
                category: item.attributes.name,
                price: filter.price,
              })
            )
          }
          key={item.id}
        >
          {item.attributes.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

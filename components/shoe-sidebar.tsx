import { STARPI_URL } from "@/lib/constants";
import Link from "next/link";

interface ResponseData {
  data: SubCategory[];
  meta: Meta;
}

const Sidebar = async () => {
  const res = await fetch(`${STARPI_URL}/api/sub-categories`);
  const data: ResponseData = await res.json();

  return (
    <div className=" flex-col gap-2  text-gray-700 basis-[248px] font-medium  hidden md:flex capitalize cursor-pointer">
      {data.data.map((item) => (
        <div key={item.id}>{item.attributes.name}</div>
      ))}
    </div>
  );
};

export default Sidebar;

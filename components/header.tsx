import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="sticky top-[-10px] md:top-[-40px] transition-all">
      <div className="md:hidden h-2 bg-gray-700"></div>
      <section className="hidden md:flex px-8  h-10  items-center bg-gray-700 text-white justify-between">
        <span className="text-sm font-medium">
          Free shipping on domestic orders over $75!
        </span>
        <div className="flex gap-6">
          <form className="flex items-center gap-2 border-b pb-1">
            <Search width={16} height={16} />
            <Input
              className="text-gray-300  p-0 placeholder:text-gray-300 border-0 h-4 focus-visible:ring-0"
              type="search"
              placeholder="Search"
            />
          </form>
          <Link className="text-sm" href={"/"}>
            Help
          </Link>
          <ShoppingBag />
        </div>
      </section>
      <Navbar />
    </header>
  );
};
export default Header;

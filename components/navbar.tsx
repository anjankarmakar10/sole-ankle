import Link from "next/link";
import NavLink from "./navlink";
import { Menu, Search, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b shadow-sm px-8 h-[72px] flex items-center justify-between gap-8  ">
      <Link className="font-extrabold text-gray-800 text-2xl" href={"/"}>
        Sole&Ankle
      </Link>
      <div className=" hidden md:flex items-center gap-12">
        <NavLink href="/">Sale</NavLink>
        <NavLink href="/">New Releases</NavLink>
        <NavLink href="/">Men</NavLink>
        <NavLink href="/">Women</NavLink>
        <NavLink href="/">Kids</NavLink>
        <NavLink href="/">Collections</NavLink>
      </div>
      <div>
        <div className="flex md:hidden gap-4 sm:gap-8 items-center">
          <ShoppingBag />
          <Search />
          <Menu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

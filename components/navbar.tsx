import Link from "next/link";
import NavLink from "./navlink";
import { Search, ShoppingBag } from "lucide-react";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <nav className="border-b shadow-sm px-4 md:px-8  h-[72px]  md:h-fit lg:h-[72px] flex items-center justify-between md:gap-4 lg:gap-8  md:flex-col lg:flex-row pt-0 md:pt-2 lg:pt-0">
      <Link className="font-extrabold text-gray-800 text-2xl" href={"/"}>
        Sole&Ankle
      </Link>
      <div className="hidden md:flex items-center gap-12">
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
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLink from "./navlink";
import Link from "next/link";
const MobileMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-5 py-8">
            <NavLink href="/">Sale</NavLink>
            <NavLink href="/">Men</NavLink>
            <NavLink href="/">Women</NavLink>
            <NavLink href="/">Kids</NavLink>
            <NavLink href="/">Collections</NavLink>
          </div>
          <SheetFooter>
            <div className="flex flex-col gap-3 mr-auto text-sm">
              <Link href="/">Terms and Conditions</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;

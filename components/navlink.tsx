import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const NavLink = ({ children, href }: Props) => {
  return (
    <Link href={href} className="nav-link ">
      <span className="text main-text text">{children}</span>
      <span className="text hover-text ">{children}</span>
    </Link>
  );
};
export default NavLink;

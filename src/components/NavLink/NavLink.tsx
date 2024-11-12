"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

const NavLink = ({ href, exact, children, ...props }: any) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link href={href} {...props} className={isActive ? styles.active : ""}>
      {children}
    </Link>
  );
};

export default NavLink;

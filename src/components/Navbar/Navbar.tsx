import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import Toggle from "../Toggle/Toggle";
import NavLink from "../NavLink/NavLink";

const links = [
  {
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    title: "Experience",
    url: "/experience",
  },
  {
    title: "Education",
    url: "/education",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftNav}>
        <NavLink href="/" className={styles.logo} exact={true}>
          chelsieconrad
        </NavLink>
      </div>
      <div className={styles.links}>
        <Toggle />
        {links.map((link, index) => (
          <NavLink href={link.url} key={index} className={styles.link}>
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

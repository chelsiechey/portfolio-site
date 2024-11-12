import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/icons/icons8-github.svg";
import LinkedInIcon from "@/icons/icons8-linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href="https://www.github.com/chelsiechey" target="_blank">
        <GithubIcon width={20} height={20} className={styles.icon} />
      </Link>
      <Link href="https://www.linkedin.com/in/chelsieconrad" target="_blank">
        <LinkedInIcon width={20} height={20} className={styles.icon} />
      </Link>
    </div>
  );
};

export default Footer;

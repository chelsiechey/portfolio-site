import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./GithbubProjectLink.module.css";

const GithubProjectLink = () => {
  const pathname = usePathname();
  return (
    <p>
      To see the code for this project, see my Github repository{" "}
      <Link
        href="https://github.com/chelsiechey/portfolio-site"
        target="_blank"
        className={styles.link}
      >
        portfolio-site
      </Link>{" "}
      at{" "}
      <Link
        href={`https://github.com/chelsiechey/portfolio-site/blob/main/src/app${pathname}/page.tsx`}
        target="_blank"
        className={styles.link}
      >
        src/app{pathname}
        /page.tsx
      </Link>
    </p>
  );
};

export default GithubProjectLink;

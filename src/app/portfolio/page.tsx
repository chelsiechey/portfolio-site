"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import CardList from "@/components/CardList/CardList";
import { useRouter } from "next/navigation";
import TextStroke from "@/components/TextStroke/TextStroke";

const Portfolio = () => {
  const { push } = useRouter();
  const links = [
    {
      href: "",
      text: "Portfolio Site: You're Already Here!",
    },
    {
      href: "/portfolio/design-patterns/command",
      text: "Command Design Pattern: Restaurant Orders",
    },
    {
      href: "",
      text: "Check Back Soon For More Projects!",
    },
    // TO DO - Add back once complete!
    // {
    //   href: "/portfolio/illustrations",
    //   text: "Factory Pattern: User Creation",
    // },
    // {
    //   href: "/portfolio/illustrations",
    //   text: "Flyweight Pattern: Reading List",
    // },
  ];

  return (
    <CardList
      handleClick={(index) => {
        const href = links[index].href;
        if (href) {
          push(href);
        }
      }}
      itemClassName={styles.item}
      cardContent={links.map((link, index) => (
        <Link href={link.href} key={index}>
          <p className={styles.cardTitle}>
            {index === links.length - 1 && <TextStroke>...</TextStroke>}
            <TextStroke>{link.text}</TextStroke>
          </p>
        </Link>
      ))}
    />
  );
};

export default Portfolio;

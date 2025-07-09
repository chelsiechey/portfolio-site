"use client";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { Squares } from "@/components/Squares/Squares";

export default function Home() {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          {"Chelsie Conrad\nFrontend Engineer\nWeb Developer"}
        </h1>
        <Button onPress={() => push("/portfolio")}>See Portfolio</Button>
      </div>
      <div className={styles.imgContainer}>
        <Squares />
      </div>
    </div>
  );
}

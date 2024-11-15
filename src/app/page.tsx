"use client";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Spinner from "@/components/Spinner/Spinner";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          {"Chelsie Conrad\nFrontend Engineer\nWeb Developer"}
        </h1>
        <p className={styles.description}>Creating Engaging Web Experiences</p>
        <Button onPress={() => push("/portfolio")}>See Portfolio</Button>
      </div>
      <div className={styles.imgContainer}>
        <Spinner />
      </div>
    </div>
  );
}

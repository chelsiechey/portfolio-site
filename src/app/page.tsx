import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Spinner from "@/components/Spinner/Spinner";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          {"Chelsie Conrad\nFrontend Engineer\nWeb Developer"}
        </h1>
        <p className={styles.description}>Creating Engaging Web Experiences</p>
        <Button url="/portfolio">See Portfolio</Button>
      </div>
      <div className={styles.imgContainer}>
        <Spinner />
      </div>
    </div>
  );
}

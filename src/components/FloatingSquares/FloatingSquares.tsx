import React from "react";
import styles from "./FloatingSquares.module.css";

const FloatingSquares: React.FC = () => {
  return (
    <ul className={styles.squares}>
      {Array.from({ length: 10 }, (_, index) => {
        return <li key={index} className={styles.square} />;
      })}
    </ul>
  );
};

export default FloatingSquares;

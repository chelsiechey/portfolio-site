import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Squares.module.css";

export const Squares = () => {
  const initialColors = React.useMemo(
    () => [
      "rgb(var(--primary-color))",
      "rgb(var(--gray-color-2))",
      "rgb(var(--secondary-color))",
      "rgb(var(--gray-color-1))",
    ],
    []
  );
  const [colors, setColors] = useState(initialColors);

  const shuffleArray = (array: string[]) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    setTimeout(() => setColors(shuffleArray(colors)), 1000);
  }, [colors]);

  const getRandomShape = (index: number) => {
    const random = Math.random();

    if (random < 0.05) {
      return {
        borderRadius: "50%",
        clipPath: "none",
        transform: "none",
        visibility: "visible",
      };
    }

    if (random < 0.1) {
      return {
        borderRadius: "0",
        clipPath:
          'path("M69 24.426c-18.09-31.031-69-21.94-69 16.918 0 26.739 32.04 54.888 69 91.808 37.03-36.713 69-64.934 69-91.808 0-37.317-51.13-47.739-69-16.918z")',
        transform: "none",
        visibility: "visible",
      };
    }

    return {
      borderRadius: "10px",
      clipPath: "none",
      transform: "none",
      visibility: "visible",
    };
  };

  const spring = React.useMemo(
    () => ({
      type: "spring",
      damping: 20,
      stiffness: 300,
    }),
    []
  );

  return (
    <ul className={styles.ul}>
      {colors.map((background, index) => {
        const { borderRadius, clipPath, transform } = getRandomShape(index);
        return (
          <motion.li
            key={background}
            layout
            transition={spring}
            animate={{
              borderRadius,
            }}
            style={{
              background,
              borderRadius,
              clipPath,
              transform,
            }}
            className={styles.li}
          />
        );
      })}
    </ul>
  );
};

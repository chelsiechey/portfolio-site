import React from "react";
import Image from "next/image";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Image
        fill
        src="https://cdn.pixabay.com/photo/2021/02/16/16/22/d-d-6021557_1280.png"
        alt=""
        role="presentation"
        className={styles.img}
      />
    </div>
  );
};

export default Spinner;

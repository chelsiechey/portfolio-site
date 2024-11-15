"use client";

import React from "react";
import ColorForm from "@/components/design-patterns/factory/ColorForm/ColorForm";
import styles from "../page.module.css";
import ThemeList from "@/components/design-patterns/factory/ThemeList/ThemeList";
import GithubProjectLink from "@/components/design-patterns/GithubProjectLink/GithubProjectLink";

const Factory = () => {
  return (
    <div className={styles.container}>
      <section className={styles.description}>
        <h2>Theme Creator - Factory Pattern</h2>
        <p>
          The <span className={styles.bold}>Theme Creator</span> project is a
          tool that allows users to create custom themes by defining a set of
          colors and applying them to a webpage. It uses the{" "}
          <span className={styles.bold}>Factory Pattern</span>, a design pattern
          that provides a way to create objects without explicitly using the
          `new` keyword. In this project, the `createTheme` function acts as the
          factory. It accepts a range of color values, such as primary,
          background, and text colors, and returns a theme object. This object
          contains not only the provided colors but also a method called
          `apply`. The `apply` method dynamically sets the colors as CSS custom
          properties (variables) on the `document.body`, making the theme
          visually reflected across the page.
        </p>
        <p>
          If a color is not provided, the factory function falls back to
          existing values from the document&apos;s current CSS variables. This
          allows for a flexible and modular way of managing theme creation. By
          using the Factory Pattern, the theme is created in a centralized
          manner, ensuring consistency and maintainability. The pattern also
          simplifies object creation and enables easy updates to the theme logic
          without needing to modify multiple parts of the codebase.{" "}
        </p>
        <GithubProjectLink />
      </section>
      <section className={styles.projectSection}>
        <ColorForm />
        <ThemeList />
      </section>
    </div>
  );
};

export default Factory;

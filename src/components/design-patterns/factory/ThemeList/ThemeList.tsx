import React, { useContext } from "react";
import styles from "./ThemeList.module.css";
import Button from "@/components/Button/Button";
import { ThemeContext } from "@/context/ThemeContext";
import ColorSwatch from "../ColorSwatch/ColorSwatch";

const ThemeList = () => {
  const { themes, applyTheme, removeTheme } = useContext(ThemeContext);

  if (themes.length) {
    return (
      <div className={styles.container}>
        <h2>Created Themes</h2>
        {themes.map((theme, index) => {
          return (
            <div key={index} className={styles.themesContainer}>
              <h3>{theme.name ? theme.name : `Theme ${index + 1}`}</h3>
              {theme.backgroundColor && (
                <div className={styles.theme}>
                  <p>Background Color</p>
                  <ColorSwatch color={theme.backgroundColor} />
                </div>
              )}
              {theme.textColor && (
                <div className={styles.theme}>
                  <p>Text Color</p>
                  <ColorSwatch color={theme.textColor} />
                </div>
              )}
              {theme.primaryColor && (
                <div className={styles.theme}>
                  <p>Primary Color</p>
                  <ColorSwatch color={theme.primaryColor} />
                </div>
              )}
              <div className={styles.buttons}>
                <Button onPress={() => applyTheme(theme)}>Apply</Button>
                <Button variant="secondary" onPress={() => removeTheme(theme)}>
                  Remove
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return <></>;
};

export default ThemeList;

import React, { useContext } from "react";
import styles from "./ThemeList.module.css";
import Button from "@/components/Button/Button";
import { ThemeContext } from "@/context/ThemeContext";
import ColorSwatch from "../ColorSwatch/ColorSwatch";
import FullPageModal from "@/components/FullPageModal/FullPageModal";
import { OverlayTriggerState } from "react-stately";

interface ThemeListProps {
  state: OverlayTriggerState;
}
const ThemeList = ({ state }: ThemeListProps) => {
  const { themes, applyTheme, removeTheme, lightTheme, darkTheme } =
    useContext(ThemeContext);

  return (
    <FullPageModal state={state}>
      <div className={styles.container}>
        <h1>Saved Themes</h1>
        <div className={styles.themes}>
          {[...themes, lightTheme, darkTheme].map((theme, index) => {
            return (
              <div key={index} className={styles.themeContainer}>
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
                {theme.secondaryColor && (
                  <div className={styles.theme}>
                    <p>Secondary Color</p>
                    <ColorSwatch color={theme.secondaryColor} />
                  </div>
                )}
                {theme.neutralColor && (
                  <div className={styles.theme}>
                    <p>Neutral Color</p>
                    <ColorSwatch color={theme.neutralColor} />
                  </div>
                )}
                {theme.neutralColor2 && (
                  <div className={styles.theme}>
                    <p>Neutral Color 2</p>
                    <ColorSwatch color={theme.neutralColor2} />
                  </div>
                )}
                <div className={styles.buttons}>
                  <Button onPress={() => applyTheme(theme)}>Apply</Button>
                  {theme.name !== "Light Theme" &&
                    theme.name !== "Dark Theme" && (
                      <Button
                        variant="secondary"
                        onPress={() => removeTheme(theme)}
                      >
                        Remove
                      </Button>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </FullPageModal>
  );
};

export default ThemeList;

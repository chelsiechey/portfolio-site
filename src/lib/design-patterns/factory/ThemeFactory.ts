import { RGB } from "@/types/design-patterns/factory/types";

export interface Theme {
  id: string;
  name: string;
  apply(): void;
  black?: RGB;
  white?: RGB;
  backgroundColor?: RGB;
  textColor?: RGB;
  primaryColor?: RGB;
  primaryColor2?: RGB;
  neutralColor?: RGB;
  neutralColor2?: RGB;
}

export interface CreateThemeProps extends Omit<Theme, "id" | "apply"> {}

const getCommaSeparatedRgb = (color: RGB): string =>
  `${color.r}, ${color.g}, ${color.b}`;

export const createTheme = ({
  name,
  black,
  white,
  backgroundColor,
  textColor,
  primaryColor,
  primaryColor2,
  neutralColor,
  neutralColor2,
}: CreateThemeProps): Theme => {
  const uniqueId = `theme-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  return {
    id: uniqueId,
    name,
    black,
    white,
    backgroundColor,
    textColor,
    primaryColor,
    primaryColor2,
    neutralColor,
    neutralColor2,
    apply() {
      black &&
        document.body.style.setProperty("--black", getCommaSeparatedRgb(black));
      white &&
        document.body.style.setProperty("--white", getCommaSeparatedRgb(white));
      backgroundColor &&
        document.body.style.setProperty(
          "--background-color",
          getCommaSeparatedRgb(backgroundColor)
        );
      textColor &&
        document.body.style.setProperty(
          "--text-color",
          getCommaSeparatedRgb(textColor)
        );
      primaryColor &&
        document.body.style.setProperty(
          "--primary-color",
          getCommaSeparatedRgb(primaryColor)
        );
      primaryColor2 &&
        document.body.style.setProperty(
          "--primary-color-2",
          getCommaSeparatedRgb(primaryColor2)
        );
      neutralColor &&
        document.body.style.setProperty(
          "--gray-color-1",
          getCommaSeparatedRgb(neutralColor)
        );
      neutralColor2 &&
        document.body.style.setProperty(
          "--gray-color-2",
          getCommaSeparatedRgb(neutralColor2)
        );
    },
  };
};

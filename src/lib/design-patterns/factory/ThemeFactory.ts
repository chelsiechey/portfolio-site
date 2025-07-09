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
  secondaryColor?: RGB;
  neutralColor?: RGB;
  neutralColor2?: RGB;
}

export interface CreateThemeProps extends Omit<Theme, "id" | "apply"> {}

const getCommaSeparatedRgb = (color: RGB): string =>
  `${color.r}, ${color.g}, ${color.b}`;

const getLuminance = (color: RGB): number => {
  return 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
};

const adjustColor = (color: RGB): RGB => {
  const luminance = getLuminance(color);

  if (luminance < 128) {
    const factor = 0.2; // Lighten by 20%

    const adjust = (value: number) =>
      Math.max(0, Math.min(255, value + (255 - value) * factor));

    return {
      r: adjust(color.r),
      g: adjust(color.g),
      b: adjust(color.b),
    };
  } else {
    const factor = 0.8; // Darken by 20%

    const adjust = (value: number) =>
      Math.max(0, Math.min(255, value * factor));

    return {
      r: adjust(color.r),
      g: adjust(color.g),
      b: adjust(color.b),
    };
  }
};

export const createTheme = ({
  name,
  black,
  white,
  backgroundColor,
  textColor,
  primaryColor,
  secondaryColor,
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
    secondaryColor,
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
      secondaryColor &&
        document.body.style.setProperty(
          "--secondary-color",
          getCommaSeparatedRgb(secondaryColor)
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
      neutralColor &&
        document.body.style.setProperty(
          "--gray-color-1-shimmer",
          getCommaSeparatedRgb(adjustColor(neutralColor))
        );
    },
  };
};

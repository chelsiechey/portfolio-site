import { LabelAriaProps, useLabel } from "react-aria";
import { RgbColorPicker } from "react-colorful";
import styles from "./ColorPicker.module.css";
import { useState } from "react";
import { RGB } from "@/types/design-patterns/factory/types";
import { PopoverTrigger } from "@/components/react-aria/PopoverTrigger/PopoverTrigger";
import { Dialog } from "@/components/react-aria/Dialog/Dialog";
import ColorSwatch from "../ColorSwatch/ColorSwatch";

export interface ColorPickerProps extends LabelAriaProps {
  color: RGB;
  setColor: (newColor: RGB) => void;
}

export const ColorPicker = ({
  color,
  setColor,
  ...props
}: ColorPickerProps) => {
  const { labelProps, fieldProps } = useLabel(props);
  const [currColor, setCurrColor] = useState(color);

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <label {...labelProps}>{props.label}</label>
        <PopoverTrigger
          label={<ColorSwatch color={currColor} />}
          onPopoverClose={() => setColor(currColor)}
        >
          <Dialog>
            <RgbColorPicker
              color={color}
              onChange={setCurrColor}
              {...fieldProps}
            />
          </Dialog>
        </PopoverTrigger>
      </div>
    </div>
  );
};

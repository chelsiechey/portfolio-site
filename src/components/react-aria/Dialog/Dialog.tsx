import { useRef } from "react";
import { AriaDialogProps, useDialog } from "react-aria";

interface DialogProps extends AriaDialogProps {
  children: React.ReactNode;
}

export const Dialog = ({ children, ...props }: DialogProps) => {
  const ref = useRef(null);
  const { dialogProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  );
};

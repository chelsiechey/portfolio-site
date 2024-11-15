import { useRef } from "react";
import { DismissButton, Overlay, usePopover } from "react-aria";
import type { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";

interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: React.ReactNode;
  state: OverlayTriggerState;
  onClose?: () => void;
}

export function Popover({
  children,
  state,
  offset = 8,
  onClose,
  ...props
}: PopoverProps) {
  const popoverRef = useRef(null);
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
      shouldFlip: true,
    },
    {
      ...state,
      close: () => {
        state.close();
        onClose && onClose();
      },
    }
  );

  return (
    <Overlay>
      <div {...underlayProps} />
      <div {...popoverProps} ref={popoverRef}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}

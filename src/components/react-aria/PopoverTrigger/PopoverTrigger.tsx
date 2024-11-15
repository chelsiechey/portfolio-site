import { ReactElement, cloneElement, useEffect, useRef } from "react";
import { useOverlayTriggerState } from "react-stately";
import { Placement, useOverlayTrigger } from "react-aria";
import { Button } from "../Button/Button";
import { Popover } from "../Popover/Popover";

interface PopoverTriggerProps {
  label: string | ReactElement;
  children: ReactElement;
  onPopoverClose?: () => void;
  placement?: Placement;
}

export const PopoverTrigger = ({
  label,
  children,
  onPopoverClose,
  placement = "bottom start",
  ...props
}: PopoverTriggerProps) => {
  const ref = useRef(null);
  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    ref
  );

  return (
    <>
      <Button {...triggerProps} buttonRef={ref} type="button">
        {label}
      </Button>
      {state.isOpen && (
        <Popover
          {...props}
          triggerRef={ref}
          state={state}
          placement={placement}
          onClose={onPopoverClose}
        >
          {cloneElement(children, overlayProps)}
        </Popover>
      )}
    </>
  );
};

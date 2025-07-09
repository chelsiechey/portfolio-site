import { Overlay, useButton } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { ReactNode, useEffect, useRef } from "react";
import styles from "./FullPageModal.module.css";
import CloseIcon from "@/icons/icons8-close.svg";
import FloatingSquares from "../FloatingSquares/FloatingSquares";

interface FullPageModalProps {
  children?: ReactNode;
  state: OverlayTriggerState;
}

export function FullPageModal({ state, children }: FullPageModalProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton({ onPress: state.close }, ref);

  useEffect(() => {
    if (state.isOpen) {
      document.body.classList.add(styles.bodyNoScroll);
    } else {
      document.body.classList.remove(styles.bodyNoScroll);
    }

    return () => document.body.classList.remove(styles.bodyNoScroll);
  }, [state.isOpen]);

  return (
    <Overlay>
      <div className={styles.container}>
        <button {...buttonProps} className={styles.closeButton}>
          <CloseIcon width={20} height={20} />
        </button>
        {children}
        <FloatingSquares />
      </div>
    </Overlay>
  );
}

export default FullPageModal;

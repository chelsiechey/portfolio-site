import { Overlay, useButton } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { ReactNode, useRef } from "react";
import styles from "./FullPageModal.module.css";
import CloseIcon from "@/icons/icons8-close.svg";

interface FullPageModalProps {
  children?: ReactNode;
  state: OverlayTriggerState;
}

export function FullPageModal({ state, children }: FullPageModalProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton({ onPress: state.close }, ref);
  return (
    <Overlay>
      <div className={styles.container}>
        <button {...buttonProps} className={styles.closeButton}>
          <CloseIcon width={20} height={20} />
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </Overlay>
  );
}

export default FullPageModal;

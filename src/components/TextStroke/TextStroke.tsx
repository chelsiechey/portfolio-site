import styles from "./TextStroke.module.css";

interface TextStrokeProps {
  children: string;
}

export function TextStroke({ children }: TextStrokeProps) {
  return (
    <span data-text={children} className={styles.text}>
      {children}
    </span>
  );
}

export default TextStroke;

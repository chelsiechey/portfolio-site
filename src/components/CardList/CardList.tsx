import React, { ReactNode, useRef } from "react";
import styles from "./CardList.module.css";
import { AriaButtonProps, PressEvent, useButton } from "react-aria";

type CardListProps = {
  cardContent: ReactNode[];
  itemClassName?: string;
  selectedItemClassName?: string;
  selectedIndex?: number;
  handleClick?: (index: number) => void;
} & AriaButtonProps;
const CardList = ({
  cardContent,
  itemClassName = "",
  handleClick,
  ...props
}: CardListProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { buttonProps } = useButton(
    {
      ...props,
      onPress: (e: PressEvent) =>
        handleClick && handleClick(parseInt(e.target.id)),
    },
    ref
  );
  return (
    <div className={styles.items}>
      {cardContent.map((content, index) => (
        <div
          id={index.toString()}
          key={index}
          className={`${styles.item} ${itemClassName}`}
          ref={ref}
          {...buttonProps}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default CardList;

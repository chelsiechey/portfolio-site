import React, { ReactNode, useState } from "react";
import styles from "./EduExpCardList.module.css";
import Image from "next/image";
import CardList from "../CardList/CardList";
import { useOverlayTriggerState } from "react-stately";
import FullPageModal from "../FullPageModal/FullPageModal";
import TextStroke from "../TextStroke/TextStroke";

type EduExpCardListProps = {
  itemList: {
    institution: string;
    title: string;
    description: ReactNode;
    startDate: string;
    endDate: string;
    imgSrc: string;
    imgAlt: string;
    skillList?: string[];
  }[];
};
const EduExpCardList = ({ itemList }: EduExpCardListProps) => {
  const [selectedIndex, setSelectedIndex] = useState(
    undefined as number | undefined
  );
  const modalState = useOverlayTriggerState({});

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    modalState.open();
  };

  const selectedItem =
    typeof selectedIndex !== undefined
      ? itemList[selectedIndex as number]
      : undefined;

  return (
    <>
      <CardList
        handleClick={handleCardClick}
        itemClassName={styles.item}
        cardContent={itemList.map((item, index) => (
          <div className={styles.itemInner} key={index}>
            <div className={styles.cardTop}>
              <Image
                src={item.imgSrc}
                alt={item.imgAlt}
                width={100}
                height={100}
                className={styles.img}
              />
              <p className={styles.institution}>
                <TextStroke>{item.institution}</TextStroke>
              </p>
              <p className={styles.title}>{item.title}</p>
            </div>
            <p className={styles.dates}>
              {item.startDate === item.endDate
                ? item.startDate
                : `${item.startDate} - ${item.endDate}`}
            </p>
          </div>
        ))}
      />
      {selectedItem && modalState.isOpen && (
        <FullPageModal state={modalState}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeading}>
              <Image
                src={selectedItem.imgSrc}
                alt={selectedItem.imgAlt}
                width={100}
                height={100}
              />
              <p className={styles.institution}>
                <TextStroke>{selectedItem.institution}</TextStroke>
              </p>
              <p className={styles.title}>{selectedItem.title}</p>
              <p className={styles.dates}>
                {selectedItem.startDate === selectedItem.endDate
                  ? selectedItem.startDate
                  : `${selectedItem.startDate} - ${selectedItem.endDate}`}
              </p>
              {selectedItem.skillList?.length && (
                <ul className={styles.skillList}>
                  {selectedItem.skillList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
            <p className={styles.desc}>{selectedItem.description}</p>
          </div>
        </FullPageModal>
      )}
    </>
  );
};

export default EduExpCardList;

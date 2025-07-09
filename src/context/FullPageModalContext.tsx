"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type FullPageModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

type FullPageModalProviderType = {
  children: any;
};

export const FullPageModalContext = createContext(
  {} as FullPageModalContextType
);

export const FullPageModalProvider = ({
  children,
}: FullPageModalProviderType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FullPageModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </FullPageModalContext.Provider>
  );
};

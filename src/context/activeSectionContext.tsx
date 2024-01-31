"use client";
import { TypeSectionsName } from "@/lib/types";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ActiveSectionContextType = {
  activeSection: TypeSectionsName;
  setActiveSection: Dispatch<SetStateAction<TypeSectionsName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveContext = createContext<ActiveSectionContextType | null>(
  null
);

const ActiveSectionContext = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<TypeSectionsName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveSectionContext;

export function useActiveSectionContext() {
  const context = useContext(ActiveContext);
  if (context === null)
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );

  return context;
}

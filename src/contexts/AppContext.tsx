import { createContext, useState, useRef } from "react";

import type { ContextProps } from "../types/Context";
import type { BaseNavStyles, ExtraNavStyles } from "../types/NavStyles";

type modifyBaseStyleFunc = ContextProps["modifyBaseStyle"];
type modifyExtraStyleFunc = ContextProps["modifyExtraStyle"];

const AppContext = createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const navElemRef = useRef<HTMLDivElement>(null);

  const defaultBaseStyles: BaseNavStyles = {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
  };

  const defaultExtraStyles: ExtraNavStyles = {
    ["selectedColor"]: { property: "color", value: "black" },
  };

  const [tabs, setTabs] = useState<string[]>([]);
  const [baseStyles, setBaseStyles] =
    useState<BaseNavStyles>(defaultBaseStyles);
  const [extraStyles, setExtraStyles] =
    useState<ExtraNavStyles>(defaultExtraStyles);

  const navStyles = {
    base: baseStyles,
    extras: extraStyles,
  };

  const addTab = (tab: string) => {
    if (!tabs.includes(tab)) {
      setTabs([...tabs, tab]);
    } else {
      alert("¡Ya existe un tab con ese nombre!");
    }
  };

  const modifyBaseStyle: modifyBaseStyleFunc = (key, value) => {
    setBaseStyles({ ...baseStyles, [key]: value });
  };

  const modifyExtraStyle: modifyExtraStyleFunc = (key, value) => {
    const newState = { ...extraStyles };
    newState[key].value = value;

    setExtraStyles(newState);
  };

  const contextProps: ContextProps = {
    tabs,
    addTab,
    navStyles,
    modifyBaseStyle,
    modifyExtraStyle,
    navElemRef,
  };

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };

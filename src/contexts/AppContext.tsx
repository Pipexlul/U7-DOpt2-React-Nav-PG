import { createContext, useState } from "react";

import type { ContextProps } from "../types/Context";
import type { NavStyles } from "../types/NavStyles";

type modifyStyleFunc = ContextProps["modifyStyle"];

const AppContext = createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const defaultStyles = {
    backgroundColor: "black",
    color: "white",
    selectedColor: "red",
    fontWeight: "bold",
    fontSize: "2rem",
  };

  const [tabs, setTabs] = useState<string[]>([]);
  const [navStyles, setNavStyles] = useState<NavStyles>(defaultStyles);

  const addTab = (tab: string) => {
    if (!tabs.includes(tab)) {
      setTabs([...tabs, tab]);
    } else {
      alert("¡Ya existe un tab con ese nombre!");
    }
  };

  const modifyStyle: modifyStyleFunc = (key, value) => {
    setNavStyles({ ...navStyles, [key]: value });
  };

  const contextProps: ContextProps = {
    tabs,
    addTab,
    navStyles,
    modifyStyle,
  };

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };

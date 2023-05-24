import { createContext, useState } from "react";

import { getFirstValidPathCharIndex } from "../utils/stringUtils";

import type { ContextProps } from "../types/Context";
import type { BaseNavStyles, ExtraNavStyles } from "../types/NavStyles";

type modifyBaseStyleFunc = ContextProps["modifyBaseStyle"];
type modifyExtraStyleFunc = ContextProps["modifyExtraStyle"];

type tabsType = ContextProps["tabs"];

const AppContext = createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const defaultBaseStyles: BaseNavStyles = {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
  };

  const defaultExtraStyles: ExtraNavStyles = {
    ["selectedColor"]: { property: "backgroundColor", value: "yellow" },
  };

  const [tabs, setTabs] = useState<tabsType>([]);
  const [baseStyles, setBaseStyles] =
    useState<BaseNavStyles>(defaultBaseStyles);
  const [extraStyles, setExtraStyles] =
    useState<ExtraNavStyles>(defaultExtraStyles);

  const navStyles = {
    base: baseStyles,
    extras: extraStyles,
  };

  const addTab = (tab: string, path: string): void => {
    if (tabs.findIndex((item) => item[0] === tab) === -1) {
      const validChar = getFirstValidPathCharIndex(path);
      if (validChar === null) {
        alert("La ruta es invalida, no se encontraron caracteres validos");
        return;
      } else if (validChar !== 0) {
        path = path.slice(validChar);
        alert(`La ruta es valida, pero fue modificada a ${path}`);
      }

      setTabs([...tabs, [tab, path]]);
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
  };

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };

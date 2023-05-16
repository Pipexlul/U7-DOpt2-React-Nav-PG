import { createContext, useState } from "react";

import type { ContextProps } from "../types/Context";

const AppContext = createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [tabs, setTabs] = useState<string[]>([]);

  const addTab = (tab: string) => {
    if (!tabs.includes(tab)) {
      setTabs([...tabs, tab]);
    } else {
      alert("¡Ya existe un tab con ese nombre!");
    }
  };

  const contextProps: ContextProps = {
    tabs,
    addTab,
  };

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };

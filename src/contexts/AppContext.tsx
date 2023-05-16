import { createContext, useState } from "react";

const AppContext = createContext<any>(null);

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

  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export { AppContext };

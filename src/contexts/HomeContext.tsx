import { createContext, useState } from "react";

import type { HomeContextProps } from "../types/HomeContext";
import type { FormInputValues, FormChild } from "../types/Components";

const HomeContext = createContext<HomeContextProps | null>(null);

const HomeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const tabForm: FormChild[] = [
    {
      labelName: "Nombre de opción",
      type: "text",
    },
    {
      labelName: "Ruta de opción",
      type: "text",
    },
    {
      labelName: "Enviar",
      type: "submit",
    },
  ];

  const styleForm: FormChild[] = [];

  const [inputValues, setInputValues] = useState<FormInputValues[]>([]);

  const handleInputValue = (name: string, value: string) => {
    const newState = [...inputValues];

    const idx = newState.findIndex((item) => item.name === name);
    if (idx === -1) {
      newState.push({ name, value });
    } else {
      newState[idx].value = value;
    }

    setInputValues(newState);
  };

  return (
    <HomeContext.Provider
      value={{ inputValues, handleInputValue, tabForm, styleForm }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
export { HomeContext };

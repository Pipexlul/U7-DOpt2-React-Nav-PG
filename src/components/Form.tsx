import { useContext } from "react";
import type { ReactNode } from "react";

import { AppContext } from "../contexts/AppContext";
import type { ContextProps } from "../types/Context";

import { HomeContext } from "../contexts/HomeContext";
import type { HomeContextProps } from "../types/HomeContext";

import type { FormProps } from "../types/Components";

import { TabFormFunc } from "../utils/formSubmitUtils";

const Form: React.FC<FormProps> = ({ formName, children }) => {
  const { addTab } = useContext(AppContext) as ContextProps;

  const { inputValues, handleInputValue } = useContext(
    HomeContext
  ) as HomeContextProps;

  const getControlName = (name: string) => {
    return `${formName}.${name}`;
  };

  const getControlValue = (controlName: string) => {
    return inputValues.find((item) => item.name === controlName)?.value ?? "";
  };

  const controls: ReactNode[] = [];

  children.forEach((child, idx) => {
    idx = idx === 0 ? idx : idx + 1;

    switch (child.type) {
      case "text":
        controls.push(
          <label key={idx} className="flex flex-col items-center">
            <span className="text-center inline-block w-full">
              {child.labelName}
            </span>
            <input
              type="text"
              className="w-4/5"
              value={getControlValue(getControlName(child.labelName))}
              onChange={(e) => {
                handleInputValue(
                  getControlName(child.labelName),
                  e.target.value
                );
              }}
            />
          </label>
        );
        break;
      case "submit":
        controls.push(
          <button
            key={idx}
            className="rounded text-center w-1/2 bg-gradient-to-r from-indigo-700 to-indigo-400 text-white py-2 text-lg font-semibold "
            type="submit"
          >
            {child.labelName}
          </button>
        );
        break;
    }
  });

  return (
    <form
      className="flex flex-col items-center gap-y-4 bg-slate-300"
      onSubmit={(e) => {
        e.preventDefault();

        // Definitely not a maintainable solution, but this will do for now.
        switch (formName) {
          case "TabsForm": {
            TabFormFunc(
              formName,
              children,
              inputValues,
              addTab,
              handleInputValue
            );

            break;
          }
        }
      }}
    >
      {controls}
    </form>
  );
};

export default Form;

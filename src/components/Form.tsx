import { useContext } from "react";
import type { ReactNode } from "react";

import { HomeContext } from "../contexts/HomeContext";
import type { HomeContextProps } from "../types/HomeContext";

import type { FormProps } from "../types/Components";

const Form: React.FC<FormProps> = ({ formName, submitAction, children }) => {
  const { inputValues, handleInputValue } = useContext(
    HomeContext
  ) as HomeContextProps;

  const getControlName = (name: string) => {
    return `${formName}.${name}`;
  };

  const controls: ReactNode[] = [];

  children.forEach((child, idx) => {
    const origIdx = idx;

    idx = idx === 0 ? idx : idx + 1;

    switch (child.type) {
      case "text":
        controls.push(
          <label key={idx}>
            <span className="text-center inline-block w-full">
              {child.labelName}
            </span>
            <br />
            <input
              type="text"
              name={getControlName(child.labelName)}
              onChange={(e) => {
                handleInputValue(child.labelName, e.target.value);
              }}
            />
          </label>
        );
        break;
      case "submit":
        controls.push(
          <button key={idx} className="text-center w-1/2" type="submit">
            {child.labelName}
          </button>
        );
        break;
    }
  });

  return (
    <form className="flex flex-col items-center" onSubmit={submitAction}>
      {controls}
    </form>
  );
};

export default Form;

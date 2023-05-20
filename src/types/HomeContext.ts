import type { FormInputValues, FormChild } from "./Components";

export interface HomeContextProps {
  inputValues: FormInputValues[];
  tabForm: FormChild[];
  styleForm: FormChild[];
  handleInputValue: (name: string, value: string) => void;
}

import type { FormChild, FormInputValues } from "../types/Components";

const missingValue = "Por favor, llene todos los campos";

const getControlName = (formName: string) => (controlName: string) =>
  `${formName}.${controlName}`;

const TabFormFunc = (
  formName: string,
  children: FormChild[],
  inputValues: FormInputValues[],
  addTab: (tab: string, path: string) => boolean,
  handleInputValue: (name: string, value: string) => void
) => {
  const controlGetter = getControlName(formName);

  const [inputTab, inputPath] = children;

  const tabControlName = controlGetter(inputTab.labelName);
  const pathControlName = controlGetter(inputPath.labelName);

  const tabValue = inputValues.find((item) => item.name === tabControlName);

  if (!tabValue || !tabValue.value) {
    alert(missingValue);
    return;
  }

  const pathValue = inputValues.find((item) => item.name === pathControlName);

  if (!pathValue || !pathValue.value) {
    alert(missingValue);
    return;
  }

  console.log(tabValue);
  console.log(pathValue);

  if (addTab(tabValue.value, pathValue.value)) {
    handleInputValue(tabControlName, "");
    handleInputValue(pathControlName, "");
  }
};

export { TabFormFunc };

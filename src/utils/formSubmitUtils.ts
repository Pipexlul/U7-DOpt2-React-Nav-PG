import type { FormChild, FormInputValues } from "../types/Components";

const missingValue = "Por favor, llene todos los campos";

const getControlName = (formName: string) => (controlName: string) =>
  `${formName}.${controlName}`;

const TabFormFunc = (
  formName: string,
  children: FormChild[],
  inputValues: FormInputValues[],
  addTab: (tab: string, path: string) => void
) => {
  const controlGetter = getControlName(formName);

  const [inputTab, inputPath] = children;

  const tabValue = inputValues.find(
    (item) => item.name === controlGetter(inputTab.labelName)
  );

  if (!tabValue || !tabValue.value) {
    alert(missingValue);
    return;
  }

  const pathValue = inputValues.find(
    (item) => item.name === controlGetter(inputPath.labelName)
  );

  if (!pathValue || !pathValue.value) {
    alert(missingValue);
    return;
  }

  console.log(tabValue);
  console.log(pathValue);

  addTab(tabValue.value, pathValue.value);
};

export { TabFormFunc };

import type { ContextProps } from "../types/Context";

type refType = ContextProps["navElemRef"];
type stylesType = ContextProps["navStyles"];

const applyStyles = (element: refType, navStyles: stylesType) => {
  const elem = element.current?.style;
  if (elem) {
    elem.backgroundColor = navStyles.backgroundColor;
    elem.color = navStyles.color;
    elem.fontSize = navStyles.fontSize;
    elem.fontWeight = navStyles.fontWeight;
  }
};

export { applyStyles };

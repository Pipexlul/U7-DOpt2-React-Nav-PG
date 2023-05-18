import type { ContextProps } from "../types/Context";
import type { ResultHolder } from "../types/NavStyles";

type StylesType = ContextProps["navStyles"];
type BaseStylesType = ContextProps["navStyles"]["base"];
type ExtrasStylesType = ContextProps["navStyles"]["extras"];

type MiniCSSFunc = (
  baseKeys?: (keyof BaseStylesType)[],
  extraKeys?: (keyof ExtrasStylesType)[]
) => React.CSSProperties;

const getStyleFromContext = (styles: StylesType): MiniCSSFunc => {
  const baseStyles = styles.base;
  const extraStyles = styles.extras;

  const retFunc: MiniCSSFunc = (baseKeys, extraKeys) => {
    const result: ResultHolder = {};

    if (baseKeys) {
      baseKeys.forEach((key) => {
        result[key] = baseStyles[key];
      });
    }

    if (extraKeys) {
      extraKeys.forEach((key) => {
        const { value, property } = extraStyles[key];

        result[property] = value;
      });
    }

    return result as React.CSSProperties;
  };

  return retFunc;
};

export { getStyleFromContext };

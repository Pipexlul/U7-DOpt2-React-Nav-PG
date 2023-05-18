import type { ContextProps } from "../types/Context";

type StylesType = ContextProps["navStyles"];
type BaseStylesType = ContextProps["navStyles"]["base"];
type ExtrasStylesType = ContextProps["navStyles"]["extras"];

type MiniCSSFunc = (
  baseKeys: (keyof BaseStylesType)[],
  extraKeys: (keyof ExtrasStylesType)[]
) => React.CSSProperties;

const getStyleFromContext = (styles: StylesType): MiniCSSFunc => {
  const baseStyles = styles.base;
  const extraStyles = styles.extras;

  const retFunc: MiniCSSFunc = (baseKeys, extraKeys) => {
    const result: React.CSSProperties = {};

    baseKeys.forEach((key) => {
      result[key] = baseStyles[key];
    });

    extraKeys.forEach((key) => {
      const { value, property } = extraStyles[key];

      result[property] = value;
    });

    return result;
  };

  return retFunc;
};

export { getStyleFromContext };

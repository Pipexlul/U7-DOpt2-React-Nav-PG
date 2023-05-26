import type { ContextProps } from "../types/Context";
import type {
  BaseNavStyles,
  ExtraNavStyles,
  ResultHolder,
} from "../types/NavStyles";

type StylesType = ContextProps["navStyles"];
type BaseStylesType = ContextProps["navStyles"]["base"];
type ExtrasStylesType = ContextProps["navStyles"]["extras"];

const defaultBaseStyles: BaseNavStyles = {
  backgroundColor: "black",
  color: "white",
  fontWeight: "bold",
  fontSize: "2rem",
};

const defaultExtraStyles: ExtraNavStyles = {
  ["selectedColor"]: { property: "backgroundColor", value: "yellow" },
};

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
        if (!baseStyles[key] || !CSS.supports(key, baseStyles[key])) {
          result[key] = defaultBaseStyles[key];
        } else {
          result[key] = baseStyles[key];
        }
      });
    }

    if (extraKeys) {
      extraKeys.forEach((key) => {
        const { value, property } = extraStyles[key];

        if (!extraStyles[key].value || !CSS.supports(property, value)) {
          result[property] = defaultExtraStyles[key].value;
        } else {
          result[property] = value;
        }
      });
    }

    return result as React.CSSProperties;
  };

  return retFunc;
};

export { getStyleFromContext, defaultBaseStyles, defaultExtraStyles };

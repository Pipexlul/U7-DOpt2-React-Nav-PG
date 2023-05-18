const validBaseProps = [
  "backgroundColor",
  "color",
  "fontWeight",
  "fontSize",
] as const;

const validExtraProps = [
  { customName: "selectedColor", realProp: "backgroundColor" },
] as const;

type ValidExtraProps = (typeof validExtraProps)[number]["customName"];

type RealPropByCustomName<T extends ValidExtraProps> = Extract<
  (typeof validExtraProps)[number],
  { customName: T }
>["realProp"];

type ExtraNavStyles = {
  [K in ValidExtraProps]: {
    value: string;
    property: RealPropByCustomName<K>;
  };
};

type ValidBaseProps = (typeof validBaseProps)[number];
type BaseNavStyles = {
  [K in ValidBaseProps]: string;
};

type ResultHolder = {
  [K in keyof React.CSSProperties]: string;
};

export type { BaseNavStyles, ExtraNavStyles, ResultHolder };

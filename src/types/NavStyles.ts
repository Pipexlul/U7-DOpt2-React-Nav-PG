const validBaseProps = [
  "backgroundColor",
  "color",
  "fontSize",
  "fontWeight",
] as const;

const validExtraProps = [
  { customName: "selectedColor", realProp: "color" },
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
type BaseNavStyles = Pick<React.CSSProperties, ValidBaseProps>;

export type { BaseNavStyles, ExtraNavStyles };

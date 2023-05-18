import type { BaseNavStyles, ExtraNavStyles } from "./NavStyles";

export interface ContextProps {
  tabs: string[];
  addTab: (tab: string) => void;
  navStyles: {
    base: BaseNavStyles;
    extras: ExtraNavStyles;
  };
  modifyBaseStyle: (key: keyof BaseNavStyles, value: string) => void;
  modifyExtraStyle: (key: keyof ExtraNavStyles, value: string) => void;
}

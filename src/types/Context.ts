import type { BaseNavStyles, ExtraNavStyles } from "./NavStyles";

type TabTuple = [string, string];

export interface ContextProps {
  tabs: TabTuple[];
  addTab: (tab: string, path: string) => boolean;
  navStyles: {
    base: BaseNavStyles;
    extras: ExtraNavStyles;
  };
  modifyBaseStyle: (key: keyof BaseNavStyles, value: string) => void;
  modifyExtraStyle: (key: keyof ExtraNavStyles, value: string) => void;
}

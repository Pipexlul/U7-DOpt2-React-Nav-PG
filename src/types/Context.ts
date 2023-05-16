import { NavStyles } from "./NavStyles";

export interface ContextProps {
  tabs: string[];
  addTab: (tab: string) => void;
  navStyles: NavStyles;
  modifyStyle: <K extends keyof NavStyles>(key: K, value: NavStyles[K]) => void;
}

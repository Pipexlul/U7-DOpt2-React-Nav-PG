import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import type { ContextProps } from "../types/Context";

import NavLink from "./NavLink";

import { getStyleFromContext } from "../utils/styleUtils";

const Navbar: React.FC = () => {
  const { tabs, navStyles } = useContext(AppContext) as ContextProps;

  const styl = getStyleFromContext(navStyles);
  const navCss = styl(["backgroundColor"]);

  return (
    <nav className="flex justify-evenly items-center py-4" style={navCss}>
      {tabs.map((tab) => (
        <NavLink key={tab} label={tab} isActive={tab === tabs[0]} />
      ))}
    </nav>
  );
};

export default Navbar;

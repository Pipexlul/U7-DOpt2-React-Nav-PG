import { useContext } from "react";
import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

import { AppContext } from "../contexts/AppContext";
import type { ContextProps } from "../types/Context";

import CustomNavTab from "./NavLink";

import { getStyleFromContext } from "../utils/styleUtils";

type NavBarChildFuncType = NavLinkProps["children"];
const childFunc = (tab: string): NavBarChildFuncType => {
  return ({ isActive }) => <CustomNavTab label={tab} isActive={isActive} />;
};

const Navbar: React.FC = () => {
  const { tabs, navStyles } = useContext(AppContext) as ContextProps;

  const styl = getStyleFromContext(navStyles);
  const navCss = styl(["backgroundColor"]);

  return (
    <nav
      className="flex justify-start items-center py-4 gap-x-2 divide-x-2 divide-gray-400"
      style={navCss}
    >
      <div className="flex justify-start items-center px-4">
        <NavLink to="/Home">{childFunc("Home")}</NavLink>
      </div>
      <div className="flex justify-start items-center px-4 divide-x divide-gray-400 divide-opacity-70">
        {tabs.map(([tab, path]) => (
          <NavLink className="px-3" key={tab} to={`/${path}`}>
            {childFunc(tab)}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

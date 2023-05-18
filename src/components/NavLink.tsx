import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import type { ContextProps } from "../types/Context";
import type { NavLinkProps } from "../types/Components";

import { getStyleFromContext } from "../utils/styleUtils";

const NavLink = ({ label, isActive }: NavLinkProps) => {
  const { navStyles } = useContext(AppContext) as ContextProps;
  const styl = getStyleFromContext(navStyles);

  return (
    <div className="relative">
      <span
        className="text-base transition font-semibold"
        style={styl("color", "backgroundColor")}
      >
        {label}
      </span>
      <span
        className={`absolute bottom-0 left-0 h-1 transform ${
          isActive ? bgColor : "text-gray-400"
        } w-0 transition-all duration-300 ease-in ${
          isActive ? "w-7/12" : "w-0"
        }`}
      />
      <span
        className={`absolute bottom-0 right-0 h-1 transform ${
          isActive ? bgColor : "text-gray-400"
        } w-0 transition-all duration-300 ease-in ${
          isActive ? "w-7/12" : "w-0"
        }`}
      />
    </div>
  );
};

export default NavLink;

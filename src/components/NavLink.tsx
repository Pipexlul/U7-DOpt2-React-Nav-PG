import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import type { ContextProps } from "../types/Context";
import type { NavLinkProps } from "../types/Components";

import { getStyleFromContext } from "../utils/styleUtils";

const NavLink = ({ label, isActive }: NavLinkProps) => {
  const { navStyles } = useContext(AppContext) as ContextProps;
  const styl = getStyleFromContext(navStyles);

  const bgColor = styl(undefined, ["selectedColor"]);
  const text = styl(["color", "fontSize", "fontWeight"]);

  return (
    <div className="relative">
      <span className="text-base transition font-semibold" style={text}>
        {label}
      </span>
      <span
        className={`absolute bottom-0 left-0 h-1 transform w-0 transition-all duration-300 ease-in ${
          isActive ? "w-7/12" : "w-0"
        }`}
        style={bgColor}
      />
      <span
        className={`absolute bottom-0 right-0 h-1 transform w-0 transition-all duration-300 ease-in ${
          isActive ? "w-7/12" : "w-0"
        }`}
        style={bgColor}
      />
    </div>
  );
};

export default NavLink;

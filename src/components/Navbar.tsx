import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import type { ContextProps } from "../types/Context";

const Navbar: React.FC = () => {
  const { tabs, navStyles } = useContext(AppContext) as ContextProps;

  return <nav></nav>;
};

export default Navbar;

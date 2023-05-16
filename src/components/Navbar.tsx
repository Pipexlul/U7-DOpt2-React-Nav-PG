import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import type { ContextProps } from "../types/Context";

const Navbar: React.FC = () => {
  const { tabs, navStyles, navElemRef } = useContext(
    AppContext
  ) as ContextProps;

  return <nav ref={navElemRef}></nav>;
};

export default Navbar;

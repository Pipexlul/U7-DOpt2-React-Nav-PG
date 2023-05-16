import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const Root: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;

import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

import AppContextProvider from "../contexts/AppContext";

const Root: React.FC = () => {
  return (
    <AppContextProvider>
      <Navbar />
      <Outlet />
    </AppContextProvider>
  );
};

export default Root;

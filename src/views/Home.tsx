import { useContext } from "react";

import HomeContextProvider, { HomeContext } from "../contexts/HomeContext";
import type { HomeContextProps } from "../types/HomeContext";

import Form from "../components/Form";

// Helper component that gets wrapped by the main component to be able to use useContext
const HomeContent: React.FC = () => {
  const { tabForm, styleForm } = useContext(HomeContext) as HomeContextProps;

  return (
    <div className="flex flex-col">
      <h2 className="text-center text-3xl">Bienvenido</h2>
      <h1 className="text-center text-5xl">💻 React Navbar Playground 💻</h1>

      <div className="flex">
        <Form formName="TabsForm">{tabForm}</Form>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <HomeContextProvider>
      <HomeContent />
    </HomeContextProvider>
  );
};

export default Home;

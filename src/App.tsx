import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./views/Home";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

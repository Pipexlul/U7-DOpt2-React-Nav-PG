import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Root from "./views/Root";
import Home from "./views/Home";
import Default from "./views/Default";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: null,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/:custom",
        element: <Default />,
      },
    ],
  },
]);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

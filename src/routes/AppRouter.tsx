import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Todo/Todo";
import Inprogress from "../pages/Inprogress/Inprogress";
import Finished from "../pages/Finished/Finished";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/inprogress",
        element: <Inprogress />,
      },
      {
        path: "/finished",
        element: <Finished />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

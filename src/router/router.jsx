import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/Category/:id",
        element: <p>hi</p>,
      },
    ],
  },
  {
    path: "/news",
    element: <div>news</div>,
  },
  {
    path: "/auth",
    element: <div>news</div>,
  },
  {
    path: "*",
    element: <div>ERROR</div>,
  },
]);


export default router;
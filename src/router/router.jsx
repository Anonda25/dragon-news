import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import AllNewsCategory from "../Components/AllNewsCategory";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/Category/1"}></Navigate>,
      },
      {
        path: "/Category/:id",
        element: <AllNewsCategory></AllNewsCategory>,
        loader: ({params}) =>
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
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
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import AllNewsCategory from "../Components/AllNewsCategory";
import UserLogin from "../Layout/UserLogin";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";


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
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/userlogin",
    element: <UserLogin></UserLogin>,
    children: [
      {
        path: "/userlogin/login",
        element:<Login></Login>
      },
      {
        path: "/userlogin/register",
        element:<Register></Register>
      },
    ],
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
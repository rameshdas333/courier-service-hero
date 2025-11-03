import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

import HomePage from "./HomePage/HomePage";
import AboutUs from "./pages/AboutUs";
import AuthLayout from "./AuthLayout/AuthLayout";
import Login from "./AuthLayout/Login";
import Register from "./AuthLayout/Register";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
        {index:true, Component:HomePage},
        {path:"about", Component:AboutUs},
    ]
  },
  {
    path:"/",
    Component:AuthLayout,
    children:[
      {path:"login", Component:Login},
      {path:"register", Component:Register},
    ]
  }
]);

export default router
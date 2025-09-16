import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

import HomePage from "./HomePage/HomePage";
import AboutUs from "./pages/AboutUs";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
        {index:true, Component:HomePage},
        {path:"about", Component:AboutUs},
    ]
  },
]);

export default router
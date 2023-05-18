import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/shared/home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

export default router;
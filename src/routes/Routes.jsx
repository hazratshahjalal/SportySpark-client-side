import { MemoryRouter, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/shared/home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AllToys/AllToys";
import NotFound from "../pages/NotFound/NotFound";
import AddToy from "../pages/AddToy/AddToy";
import ContactUs from "../pages/ContactUs/ContactUs";
import MyToys from "../pages/MyToys/MyToys";

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
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
      },
      {
        path: '/addToy',
        element: <AddToy></AddToy>
      },
      {
        path: '/myToys',
        element: <MyToys></MyToys>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Terms from "../pages/Terms/Terms";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import Trainers from "../pages/Trainers/Trainers";
import Sports from "../pages/Home/Sports/Sports";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'trainers',
        element:<Trainers />
      },
      {
        path:'sports',
        element:<Sports />
      },
      {
        path:'blog',
        element:<Blog />
      },
      {
        path:'contact',
        element:<Contact />
      },
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signUp',
    element: <SignUp />
  },
  {
    path: 'terms',
    element: <Terms />
  }

]);

export default router;
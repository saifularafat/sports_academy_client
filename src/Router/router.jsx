import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Terms from "../pages/Terms/Terms";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
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
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
import Dashboard from "../layouts/Dashboard";
import MySelected from "../pages/Dashboard/AllUsers/MySelected/MySelected";
import MyAdmission from "../pages/Dashboard/AllUsers/MyAdmission/MyAdmission";
import Payment from "../pages/Dashboard/AllUsers/Payment/Payment";
import AddSports from "../pages/Dashboard/Instructors/AddSports";
import InstructorsAllClass from "../pages/Dashboard/Instructors/InstructorsAllClass";
import ManageAllUser from "../pages/Dashboard/Admin/ManageAllUser";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import PrivateRouter from "./PrivateRouter";

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
        path: 'trainers',
        element: <Trainers />
      },
      {
        path: 'sports',
        element: <Sports />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
  // login and SignUP from router
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
  },
  // dashboard router
  {
    path: '/dashboard',
    element: <PrivateRouter><Dashboard /></PrivateRouter>,
    children: [
      // users rout
      {
        path: '/dashboard/mySelected',
        element: <MySelected />
      },
      {
        path: '/dashboard/myAdmission',
        element: <MyAdmission />
      },
      {
        path: '/dashboard/payment',
        element: <Payment />
      },
      // Instructors rout
      {
        path: '/dashboard/addSports',
        element: <AddSports />
      },
      {
        path: '/dashboard/instructorsAllClass',
        element: <InstructorsAllClass />
      },
      // Admin route
      {
        path: '/dashboard/manageAllUsers',
        element: <ManageAllUser />
      },
      {
        path: '/dashboard/manageClasses',
        element: <ManageClasses />
      },
    ]
  },

]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Terms from "../pages/Terms/Terms";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import Trainers from "../pages/Trainers/Trainers";
import Classes from "../pages/Classes/Classes";
import Blog from "../pages/Blog/Blog";
import Dashboard from "../layouts/Dashboard";
import MySelected from "../pages/Dashboard/AllUsers/MySelected/MySelected";
import MyAdmission from "../pages/Dashboard/AllUsers/MyAdmission/MyAdmission";
import Payment from "../pages/Dashboard/AllUsers/Payment/Payment";
import AddSports from "../pages/Dashboard/Instructors/AddSports";
import InstructorsAllClass from "../pages/Dashboard/Instructors/InstructorsAllClass";
import ManageAllUser from "../pages/Dashboard/Admin/ManageAllUser";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Trainers/Details";
import Update from "../pages/Dashboard/Instructors/Update";
import PaymentHistory from "../pages/Dashboard/Admin/PaymentHistory";

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
        path: '/details/:id',
        element: <Details />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/classes/${params.id}`)
        // fetch(`${import.meta.env.VITE_API_URL}/classes?email=${params?.email})
      },
      {
        path: 'classes',
        element: <Classes />
      },
      {
        path: 'blog',
        element: <Blog />
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
    // element: <Dashboard />,
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
        path: '/dashboard/payment/:id',
        element: <PrivateRouter><Payment /></PrivateRouter>
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
      {
        path: '/dashboard/update/:id',
        element: <Update />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/classes/${params.id}`)
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
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory />
      },
    ]
  },

]);

export default router;
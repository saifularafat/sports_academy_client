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
import AdminRouter from "./AdminRouter";
import Post from "../pages/CommentInfo/Post";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/Instructors/InstructorHome";
import UserDashboard from "../pages/Dashboard/AllUsers/User/UserDashboard";
import InstructorRouter from "./InstructorRouter";

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
      {
        path: 'comment',
        element: <Post />
      }
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

   ///// DASHBOARD ROUT /////
  {
    path: '/dashboard',
    element: <PrivateRouter><Dashboard /></PrivateRouter>,
    children: [
      // Admin rout
      {
        path: '/dashboard/adminHome',
        element: <AdminRouter><AdminHome /></AdminRouter> 
      },
      {
        path: '/dashboard/manageAllUsers',
        element: <AdminRouter><ManageAllUser /></AdminRouter>
      },
      {
        path: '/dashboard/manageClasses',
        element: <AdminRouter><ManageClasses /></AdminRouter>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <AdminRouter><PaymentHistory /></AdminRouter>
      },
      // Instructors rout
      {
        path: '/dashboard/instructorHome',
        element: <InstructorRouter><InstructorHome /></InstructorRouter>  
      },
      {
        path: '/dashboard/addSports',
        element: <InstructorRouter><AddSports /></InstructorRouter>
      },
      {
        path: '/dashboard/instructorsAllClass',
        element: <InstructorRouter><InstructorsAllClass /></InstructorRouter>
      },
      {
        path: '/dashboard/update/:id',
        element: <InstructorRouter><Update /></InstructorRouter>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/classes/${params.id}`)
      },
      // user route
      {
        path: '/dashboard/studentHome',
        element: <UserDashboard /> 
      },
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
    ]
  },

]);

export default router;
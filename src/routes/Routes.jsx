import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Courses from "../pages/Courses/Courses";
import Mycart from "../pages/Dashboard/Mycart/Mycart";
import MySelectedClass from "../pages/Dashboard/My Selected Classes/MySelectedClass";
import MyEnrolledClasses from "../pages/Dashboard/My Enrolled Class/MyEnrolledClasses";
import ManagerUsers from "../pages/Dashboard/ManagerUsers/ManagerUsers";
import ManageClasses from "../pages/Dashboard/Manage Classes/ManageClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import About from "../Components/About/About";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/courses",
        element: <Courses></Courses>
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>
      },
      {
        path: "/courses",
        element: <Courses></Courses>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      
    ]


  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "mycart",
        element: <Mycart></Mycart>
      },
      {
        path: "mycart/myselectedclasses",
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path: "mycart/myenrolledclasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path: "mycart/manageusers",
        element: <ManagerUsers></ManagerUsers>
      },
      {
        path: "mycart/msnsgeclasses",
        element: <ManageClasses></ManageClasses>
      },
      {
        path: "mycart/myselectedclasses/payment",
        element: <Payment></Payment>
      }


    ]

  }

]);

export default router;
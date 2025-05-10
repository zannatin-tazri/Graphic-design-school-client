import{
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signin/SignIn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Home/Dashboard";
import WorkGalleryAdmin from "../pages/Home/WorkGalleryAdmin";
import AboutusDetails from "../pages/Home/AboutusDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/aboutdetails',
                element: <PrivateRoute><AboutusDetails></AboutusDetails></PrivateRoute>
            },
            {
                path: '/manageadmin',
                element: <PrivateRoute><WorkGalleryAdmin></WorkGalleryAdmin></PrivateRoute>
            },
            
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/signin',
                element:<SignIn></SignIn>
            }
            
        ]
    },
]);
export default router;
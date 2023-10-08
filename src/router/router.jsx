import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
// import MainLayout from "../MainLayout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import EventDetails from "../pages/EventDetails/EventDetails";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";

// const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/eventdetails',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>
            },
            {
                path: '/contactus',
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            }
        ]
    }
]);

export default router;
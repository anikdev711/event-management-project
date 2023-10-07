import { Outlet } from "react-router-dom";
// import Home from "../pages/Home/Home";
import Navbar from "../components/Header/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
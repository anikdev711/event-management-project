import { Outlet } from "react-router-dom";
// import Home from "../pages/Home/Home";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
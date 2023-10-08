import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOutFromAccount } = useContext(AuthContext);

    const handleLogOutFromAccount = () => {
        logOutFromAccount()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/eventdetails'>Book Events</NavLink></li>
        <li><NavLink to='/contactus'>Contact Us</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">EduQuest Events</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div className="flex gap-2 items-center">

                            <p>{user.email}</p>
                            <p>{user.displayName?user.displayName:'N/A'}</p>
                            <img src={user.photoURL? user.photoURL:'N/A'} alt="" />
                            <button onClick={handleLogOutFromAccount}
                                className="btn btn-ghost">Logout</button>
                        </div>
                            :
                            <Link to='/login'>
                                <a className="btn">Login</a>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
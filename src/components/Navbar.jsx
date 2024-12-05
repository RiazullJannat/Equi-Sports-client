import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    // Define navigation links
    const links = (
        <>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active btn-ghost" : "btn-ghost")}>
                <li>Home</li>
            </NavLink>
            <NavLink to="/allEquipments" className={({ isActive }) => (isActive ? "active btn-ghost" : "btn-ghost")}>
                <li>All Sports Equipments</li>
            </NavLink>
            {user && (
                <>
                    <NavLink to="/addEquipments" className={({ isActive }) => (isActive ? "active btn-ghost" : "btn-ghost")}>
                        <li>Add Equipments</li>
                    </NavLink>
                    <NavLink to="/myEquipments" className={({ isActive }) => (isActive ? "active btn-ghost" : "btn-ghost")}>
                        <li>My Equipments</li>
                    </NavLink>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100">
            {/* Navbar start: Branding and dropdown */}
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Sports Equipments</a>
            </div>

            {/* Navbar center: Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-3">{links}</ul>
            </div>

            {/* Navbar end: Action button */}
            <div className="navbar-end">
                <div className="navbar-start">
                    {
                        user ? <div className="dropdown">
                            <button tabIndex={0} className="p-2 btn-ghost border-3 border-red-600 rounded-full">
                                <img className="h-14 w-14 rounded-full" src={user.photoURL ? user.photoURL : "https://i.ibb.co.com/GtRSfPc/profile.png"} />
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li onClick={logout} className="btn z-50">Log Out</li>
                            </ul>
                        </div> : 
                        <div className="flex gap-3 ">
                            <NavLink to="/signIn" className="">
                                SignIn
                            </NavLink>
                            or
                            <NavLink to="/signUp" className="">
                                SignUp
                            </NavLink>
                        </div >
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
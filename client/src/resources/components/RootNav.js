import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/navbar.css";

const RootNav = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    const logout = () => {
        localStorage.clear();
        window.location.replace("/admin");
    };
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">Hiring Needs</div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <MenuIcon />
                </div>
                <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <NavLink to="/root/admin-list">
                                Admin List <i class="fa fa-home" aria-hidden="true"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/">
                                Applications <i class="fa fa-home" aria-hidden="true"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/job-list">
                                Listed Jobs <i class="fa fa-briefcase" aria-hidden="true"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/post-a-new-job">
                                New Job <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </NavLink>
                        </li>
                        <li onClick={logout}>

                            Logout <i class="fa fa-pencil-square-o" aria-hidden="true"></i>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default RootNav;

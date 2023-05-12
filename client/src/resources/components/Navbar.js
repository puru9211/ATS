import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">HiringNeeds<span className="logo-dot">.</span></div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">
                Home <i class="fa fa-home" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs">
                Jobs <i class="fa fa-briefcase" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/apply">
                Apply <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/check-status">
                Check Status{" "}
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/support">
                Support <i class="fa fa-ticket" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

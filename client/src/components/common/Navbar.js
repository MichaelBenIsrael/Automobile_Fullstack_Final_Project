import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <NavLink to="/" exact clNavLinkssName="nav-logo">
          SiteLogo
        </NavLink>
        <button className="btn nav-btn" type="button">
          <i className="fas fa-align-justify"></i>
        </button>
      </div>
      <div className="nav-links">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/contactus" className="nav-link active">
          Contact Us
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;

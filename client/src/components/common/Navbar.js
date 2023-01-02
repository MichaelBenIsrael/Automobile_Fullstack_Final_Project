import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ links, currentActive }) => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <NavLink to="/" className="nav-logo">
          SiteLogo
        </NavLink>
        {links && 
        <button className="btn nav-btn" type="button">
          <i className="fas fa-align-justify"></i>
        </button>
        }
      </div>
      <div className="nav-links">
        {links?.map((link, id) =>
        {
          let className = "nav-link";
          if(link.name === currentActive)
          {
            className += " active";
          }
          return <NavLink key={id} to={link.url} className={className}>{link.name}</NavLink>
        })}
      </div>
    </div>
  </nav>
);

export default Navbar;

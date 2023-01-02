import {React, useState} from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ links, currentActive }) => 
{

    const [heightState, setHeightState] = useState(0);

    const showNav = () => 
    {
        if(heightState === 0)
        {
            setHeightState(61 * links.length);
        }else
        {
            setHeightState(0);
        }
    }

    return (
          <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
                <NavLink to="/" className="nav-logo">
                SiteLogo
                </NavLink>
                {links && 
                <button className="btn nav-btn" type="button" onClick={() => showNav()}>
                <i className="fas fa-align-justify"></i>
                </button>
                }
            </div>
            <div className="nav-links" style={{height: heightState}}>
                {links?.map((link, id) =>
                {
                let className="nav-link";
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
};

export default Navbar;

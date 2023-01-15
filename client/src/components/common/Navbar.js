import { React } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ links, currentActive }) => {
    const showNav = () => {
        document.querySelector('.nav-links').classList.toggle('show-links');
    }

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <NavLink to="/" className="nav-logo">
                        SnM Garage
                    </NavLink>
                    {links &&
                        <button className="btn nav-btn" type="button" onClick={() => showNav()}>
                            <GiHamburgerMenu style={{ verticalAlign: "middle", height: "30px" }} />
                        </button>
                    }
                </div>
                {links &&
                    <div className="nav-links">
                        {links.map((link, id) => {
                            let className = "nav-link";
                            if (link.name === currentActive) {
                                className += " active";
                            }
                            return <NavLink key={id} to={link.url} className={className}>{link.name}</NavLink>
                        })}
                    </div>}
            </div>
        </nav>
    );
};

export default Navbar;

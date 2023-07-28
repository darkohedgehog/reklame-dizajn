import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../assets/dizajn-studio-low-resolution-logo-color-on-transparent-background.png";
import { links } from "../data";
import {FaBars} from "react-icons/fa";
import {MdOutlineClose} from "react-icons/md";




const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
        <div className="container nav_container">
           <Link to="/" className="logo">
            <img src={Logo} alt="Dizajn Studio" />
           </Link>
           <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav_toggle-btn" onClick={() => setIsNavShowing (!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose /> : <FaBars />
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar;
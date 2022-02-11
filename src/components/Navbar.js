// Navigation module to direct visitors to different pages
import React, { useState } from 'react';
import { Link } from "react-router-dom";
//import AnimatedPage from "../components/AnimatedPage"

const Navbar = () => {

    const [isTop, setTop] = useState(true);

    return (
        <div className={isTop ? "navbarTop" : "navbarBot"}>  
            <li>
                <Link to="/" onClick={() => setTop(true)}>Home</Link>
            </li>
            <li>
                <Link to="/about" onClick={() => setTop(true)}>About</Link>
            </li>
            <li>
                <Link to="/projects" onClick={() => setTop(true)}>Projects</Link>
            </li>
            <li>
                <Link to="/hobbies" onClick={() => setTop(true)}>Hobbies</Link>
            </li>
            <li>
                <Link to="/contact" onClick={() => setTop(true)}>Contact</Link>
            </li>
            </div>
    );
}

export default Navbar;

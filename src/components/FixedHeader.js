import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const FixedHeader = () => {

    const [open, setOpen] = useState(false);

    const ref = useRef();

    /* closing menu on when clicking outside of menu*/

    const checkMouseClickOutside = useCallback(e => {
        if (open && ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
        }
    },
        [setOpen, open]
    );
    useEffect(() => {
        document.addEventListener('mousedown', checkMouseClickOutside);
        return () => document.removeEventListener('mousedown', checkMouseClickOutside)
    });

    return (
        <>
            
        <div className="fixedHeader">
                <div className="buttonAndNameWrap" ref={ref}>
                    {open ? (
                        <MenuOpenIcon className="menuButton" onClick={() => setOpen(!open)} />
                    ) : (
                            <MenuIcon className="menuButton"onClick={() => setOpen(!open)} />
                    )}
                    <div className="menuTitle" onClick={() => setOpen(!open)} > Menu </div>
                    <Link to="/" className="headerRight"> JED MANDY NUGAL </Link>
                </div>
            
            <div className={open ? "fixedNavbar open" : "fixedNavbar"} ref={ref}>
                <li className="homeLink">
                    <Link to="/">Home</Link>
                </li>
                <li className="aboutLink">
                    <Link to="/about">About</Link>
                </li>
                <li className="projectsLink">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="hobbiesLink">
                    <Link to="/hobbies">Hobbies</Link>
                </li>
                <li className="contactLink">
                    <Link to="/contact">Contact</Link>
                </li>
                </div>
            </div>
            
            
        </>
    );
}

export default FixedHeader;
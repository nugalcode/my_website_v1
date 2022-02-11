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
                <div className="navbarLinksTopWrap" ref={ref}>
                    <li >
                        <Link className="navbarLinksTop" to="/about">About</Link>
                    </li>
                    <li >
                        <Link className="navbarLinksTop" to="/projects">Projects</Link>
                    </li>
                    <li >
                        <Link className="navbarLinksTop" to="/"> JED MANDY NUGAL </Link>
                    </li>
                    <li >
                        <Link className="navbarLinksTop" to="/hobbies">Hobbies</Link>
                    </li>
                    <li >
                        <Link className="navbarLinksTop" to="/contact">Contact</Link>
                    </li>
                </div>
            </div>
            
            
        </>
    );
}

export default FixedHeader;
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import '../css/FixedHeaderLinksTop.css'

const FixedHeader = () => {

    const [open, setOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState("home");

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
                        <Link
                            className={currentPage === "about" ? "navbarLinksTop currentPage" : "navbarLinksTop" }
                            to="/about"
                            onClick={() => setCurrentPage("about")}
                        >
                            About
                        </Link>
                    </li>
                    <li >
                        <Link
                            className={currentPage === "projects" ? "navbarLinksTop currentPage" : "navbarLinksTop"}
                            to="/projects"
                            onClick={() => setCurrentPage("projects")}
                        >
                            Projects
                        </Link>
                    </li>
                    <li >
                        <Link
                            className={currentPage === "home" ? "navbarLinksTop currentPage" : "navbarLinksTop"}
                            to="/"
                            onClick={() => setCurrentPage("home")}
                        >
                            JED MANDY NUGAL
                        </Link>
                    </li>
                    <li >
                        <Link
                            className={currentPage === "hobbies" ? "navbarLinksTop currentPage" : "navbarLinksTop"}
                            to="/hobbies"
                            onClick={() => setCurrentPage("hobbies")}
                        >
                            Hobbies
                        </Link>
                    </li>
                    <li >
                        <Link
                            className={currentPage === "contact" ? "navbarLinksTop currentPage" : "navbarLinksTop"}
                            to="/contact"
                            onClick={() => setCurrentPage("contact")}
                        >
                            Contact
                        </Link>
                    </li>
                </div>
            </div>
            
            
        </>
    );
}

export default FixedHeader;
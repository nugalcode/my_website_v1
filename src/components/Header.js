/* Header */
import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="blockdesign"> </div>
                <Link to="/" id="name"> JED MANDY NUGAL </Link>
            <div className="blockdesign"> </div>
        </header>
    )
}

export default Header;

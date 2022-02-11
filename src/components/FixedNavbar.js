import { Link } from "react-router-dom";

const FixedNavbar = ({className}) => {

    return (
        <div className={className}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/hobbies">Hobbies</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </div>
    );


}

export default FixedNavbar;


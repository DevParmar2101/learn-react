import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1>React Learning</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/components">User Info</Link>
                </li>
                <li>
                    <Link to="/props">Props</Link>
                </li>
                <li>
                    <Link to="/map">Maps</Link>
                </li>
                <li>
                    <Link to="/counter">Counters</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
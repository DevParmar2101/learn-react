import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>React Learning</h2>

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
                    <Link to="/use-state">UseState</Link>
                </li>
                <li>
                    <Link to="/use-state-form">UseState Form</Link>
                </li>
                <li>
                    <Link to="/use-effect">UseEffect Class</Link>
                </li>
                <li>
                    <Link to="/use-ref">UseRef Class</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
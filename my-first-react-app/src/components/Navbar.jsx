import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h2>React Learning</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/components">Components</Link>
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
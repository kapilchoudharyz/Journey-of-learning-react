import {NavLink} from "react-router-dom";

function Navbar() {
    return <nav>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About Me</NavLink>

            </li>
            <li>
                <NavLink to={'/portfolio'}>Portfolio</NavLink>
            </li>
        </ul>
    </nav>

}

export default Navbar;
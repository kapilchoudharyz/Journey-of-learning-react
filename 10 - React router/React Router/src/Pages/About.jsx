import {NavLink, Outlet} from "react-router-dom";

function About() {
    return (
        <div>
            <h1>
                This is About me Page
            </h1>
            <NavLink to={'name'}>
                My name
            </NavLink>
            <Outlet/>

        </div>
    );
}

export default About;
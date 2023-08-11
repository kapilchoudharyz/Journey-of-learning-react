import {Link} from "react-router-dom";
function Portfolio() {

    return (
        <div>
            <h1>
                This is a Portfolio Page
            </h1>
            <Link to={'/portfolio/1'}>Something 1</Link>
            <Link to={'/portfolio/2'}>Something 2</Link>


        </div>
    );
}

export default Portfolio;
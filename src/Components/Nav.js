import React, {Link} from "react-router-dom";
const Nav = () => {
    return (
        <nav>
            <Link to="/" className="links"><h1>Graphics by Racheal</h1></Link>
            <ul>
                <Link to="/about" className="links">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
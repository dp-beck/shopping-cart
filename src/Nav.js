import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                                
                <Link to='/shop'>                
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
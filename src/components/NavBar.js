import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand">5i</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Applications</Link>
                </li>
            </ul>
        </div>
        
        </nav>
    );
};

export default NavBar;

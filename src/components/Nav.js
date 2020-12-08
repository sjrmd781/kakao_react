import React from 'react'
import {NavLink} from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <footer>
            <ul className="nav">
                <NavLink to="/" exact={true} activeClassName="on">
                    <li>
                        <i className="fas fa-user"></i>Friends
                    </li>
                </NavLink>
                <NavLink to="/Chats" activeClassName="on">
                    <li>
                        <i className="fas fa-comment"></i>Chats
                    </li>
                </NavLink>
                <NavLink to="/Find" activeClassName="on">
                    <li>
                        <i className="fas fa-search"></i>Find
                    </li>
                </NavLink>
                <NavLink to="/More" activeClassName="on">
                    <li>
                        <i className="fas fa-ellipsis-h"></i>More
                    </li>
                </NavLink>
            </ul>
        </footer>
    )
}

export default Nav
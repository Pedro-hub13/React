import './nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                    <i className="fa-home"></i> Start
            </Link>
            <Link to="/users">
                    <i className="f-users"></i> Users
            </Link>
        </nav>
    </aside> 
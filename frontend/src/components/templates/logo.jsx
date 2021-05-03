import './logo.css'
import  React from 'react'
import logo from '../../assests/images/logo192.png'
import { Link } from 'react-router-dom'

export default props =>
    <asside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </asside> 
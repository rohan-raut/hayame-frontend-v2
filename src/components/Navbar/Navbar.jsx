import React, { useContext, useEffect, useState } from 'react';
import './navbar.css';
import AuthContext from '../../context/AuthContext';
import { Logo } from '../../assets';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const { authTokens, user, logoutUser } = useContext(AuthContext);

    return (
        <nav>
            <div>
                <Link class="navbar-home-link" to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>

            <input type="checkbox" id="navbar-sidebar-active" />
            <label id="navbar-overlay" for="navbar-sidebar-active"></label>
            <label for="navbar-sidebar-active" class="navbar-open-sidebar-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </label>


            <div class="navbar-links-container">
                <label for="navbar-sidebar-active" class="navbar-close-sidebar-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </label>

                <ul className="navbar-ul">
                    <li><Link to="about.html" className="navbar-link">About Us</Link></li>
                    <li><Link to="/contact-us" className="navbar-link">Contact Us</Link></li>
                    <li><Link to="/book" className="navbar-link">Make Booking</Link></li>
                    {(authTokens !== null) ? (
                        <li className="navbar-dropdown-1">
                            <span className="navbar-link">
                                {user['first_name'] + " " + user['last_name']} <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-360 280-560h400L480-360Z"/></svg>
                            </span>
                            <div className="navbar-dropdown">
                                <ul>
                                    <li><Link to='/booking-history' className="navbar-link p-0">Booking History</Link></li>
                                    {(user['user_role'] === 'Admin' || user['user_role'] === 'Manager') ? <li><Link to='/check-bookings' className="navbar-link p-0">Check Bookings</Link></li> : ""}
                                    <li>Profile</li>
                                    <li onClick={logoutUser} className="cursor-pointer">Logout</li>
                                </ul>
                            </div>
                        </li>
                    ) : (
                        <li><Link to="/login" className="navbar-link">Login</Link></li>
                    )}
                </ul>


            </div>
        </nav>

    )
}

export default Navbar
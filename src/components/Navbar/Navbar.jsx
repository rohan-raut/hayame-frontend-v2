import React from 'react';
import './navbar.css';


const Navbar = () => {

    return (
        <nav>
            <input type="checkbox" id="navbar-sidebar-active" />
            <label for="navbar-sidebar-active" class="navbar-open-sidebar-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </label>
            <label id="navbar-overlay" for="navbar-sidebar-active"></label>
            <div class="navbar-links-container">
                <label for="navbar-sidebar-active" class="navbar-close-sidebar-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </label>

                <a class="navbar-home-link" href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="products.html">Products</a>
                <a href="blog.html">Blog</a>
                <a href="login.html">Login</a>

            </div>
        </nav>
    )
}

export default Navbar
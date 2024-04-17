import React from 'react';
import './login.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import { Logo } from '../../assets';
import ShortCustomerReviews from '../../components/ShortCustomerReviews/ShortCustomerReviews';


const Login = () => {


    return (
        <div>
            <div className="row m-0">
                <div className="col-4 login-left-sidebar">
                    <div className="login-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, cum enim dolorem harum rem soluta et. Laudantium eveniet repellendus quia, tenetur nisi obcaecati, a molestiae nihil distinctio sapiente, nostrum deleniti exercitationem? Quasi, culpa veniam optio repellat, illum, rerum cupiditate temporibus qui praesentium blanditiis repudiandae. Autem necessitatibus quae maiores illo eaque.
                    </div>
                    <div>
                        <ShortCustomerReviews />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
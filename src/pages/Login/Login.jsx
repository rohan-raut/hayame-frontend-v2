import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import { Logo } from '../../assets';
import ShortCustomerReviews from '../../components/ShortCustomerReviews/ShortCustomerReviews';
import { GoogleLogin } from '@react-oauth/google';


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
                <div className="col-8">
                    <div className="row m-0 login-right-content">
                        <div className="col-6 login-form-card">
                            <h2 className="login-h2">Sign In</h2>
                            <p>New here? Create an Account</p>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                            <form className="login-form">
                                <div className="row m-0">
                                    <div class="mb-4 p-0">
                                        <input type="email" className="input-field" placeholder="Email" required />
                                    </div>
                                    <div class="mb-2 p-0">
                                        <input type="password" className="input-field" placeholder="Password" required />
                                    </div>
                                    <div class="mb-2 p-0 text-end">
                                        Forgot Password?
                                    </div>
                                    <div class="my-4 p-0 d-flex justify-content-end">
                                        <button className="login-form-btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import { Logo } from '../../assets';
import ShortCustomerReviews from '../../components/ShortCustomerReviews/ShortCustomerReviews';
import { GoogleLogin, useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import AuthContext from '../../context/AuthContext';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    let { loginUser, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLoginStart = () => {
        alert('login start');
    };

    const onLogoutSuccess = () => {
        alert('logout success');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        let data = await loginUser(e);
        console.log(data);

        if (data['success']) {
            toast.success(data['response'], {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            navigate('/');
        }
        else {
            toast.error(data['response'], {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    const handleGoogleSignIn = async (response) => {
        let data = await googleSignIn(response);
        if (data['success']) {
            toast.success(data['response'], {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            navigate('/');
        }
        else {
            toast.error(data['response'], {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }


    return (
        <div>
            <div className="row m-0">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 login-left-sidebar">
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
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="row m-0 login-right-content">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 login-form-card">
                            <h2 className="login-h2">Sign In</h2>
                            <p>New here? <Link to='/register' className="hayame-link">Create an Account</Link></p>
                            <div className="row m-0 social-login-div">
                                <div className="col-6 my-2">

                                    <LoginSocialGoogle
                                        client_id="311936151809-eupfq5t4fcg43bu87kne2jnkssovhh27.apps.googleusercontent.com"
                                        onResolve={(response) => {
                                            handleGoogleSignIn(response);
                                        }}
                                    >
                                        <button className="google-login-btn"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" version="1.1" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></g></svg> Login with Google</button>
                                    </LoginSocialGoogle>
                                </div>
                                <div className="col-6 my-2">
                                    <LoginSocialFacebook
                                        appId="801701281917720"
                                        onResolve={(response) => {
                                            console.log(response);
                                        }}
                                        onReject={(err) => {
                                            console.log(err);
                                        }}
                                    >
                                        <button className="facebook-login-btn"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 90 90"><g><path d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z" fill="#FFFFFF"></path></g></svg> Login with Facebook</button>
                                    </LoginSocialFacebook>
                                </div>
                            </div>


                            <form onSubmit={handleLogin} className="login-form">
                                <div className="row m-0">
                                    <div class="mb-4 p-0">
                                        <input type="email" className="input-field" placeholder="Email" required name="username" />
                                    </div>
                                    <div class="mb-2 p-0">
                                        <input type="password" className="input-field" placeholder="Password" name="password" required />
                                    </div>
                                    <div class="mb-2 p-0 text-end">
                                        <Link to='/forgot-password' className="hayame-link">Forgot Password?</Link>
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
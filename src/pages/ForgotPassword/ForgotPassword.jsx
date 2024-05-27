import React, { useState, useEffect } from 'react';
import "./forgotPassword.css";
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const ForgotPassword = () => {
    const [Inputs, setInputs] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };


    const handelForgotPassword = async (e) => {
        e.preventDefault();

        let response = await fetch('https://djangotest.hayame.my/api/forgot-password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': Inputs.email
            })
        })
        let data = await response.json()

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
    }


    return (
        <div>
            <Navbar />
            <div className="row m-0 justify-content-center align-items-center forgot-password-row">
                <div className="col-11 col-sm-11 col-md-6 col-lg-4 forgot-password-card">
                    <div className="forgot-password-header">
                        <h3 className="forgot-password-h3">Forgot Password</h3>
                    </div>
                    <div className="forgot-password-form">
                        <form onSubmit={handelForgotPassword}>
                            <div class="mb-4 p-0">
                                <label for="email" className="mb-2">Enter your registered email</label>
                                <input type="email" class="input-field" placeholder="Email" name="email" onChange={handleChange} required />
                            </div>
                            <div class="mb-4 p-0">
                                <button className="forgot-password-form-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
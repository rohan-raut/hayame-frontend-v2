import React, { useState, useEffect } from 'react';
import "./resetPassword.css";
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const ResetPassword = () => {
    const [Inputs, setInputs] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };


    const verifyForm = () => {

        if (Inputs.password === Inputs.confirmPassword) {
            toast.error("Password and Confirm Password does not match", {
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
            return false;
        }

        let exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!Inputs.password.match(exp)) {
            toast.error("Password should contain characters between 6 to 20 which contain at least one numeric digit, one uppercase and one lowercase letter", {
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
            return false;
        }

        return true;
    }


    const handelResetPassword = async (e) => {
        e.preventDefault();

        let paramString = (window.location.search).split('?')[1];
        let queryString = new URLSearchParams(paramString);
        let user = ""
        for (let pair of queryString.entries()) {
            user = pair[1]
        }

        if (verifyForm()) {
            let api = 'http://127.0.0.1:8000/api/reset-password/' + user

            let response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'password': Inputs.password,
                    'confirm_password': Inputs.confirmPassword
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
        else {
            toast.error("Password and Confirm Password does not match", {
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
            <Navbar />
            <div className="row m-0 justify-content-center reset-password-row">
                <div className="col-11 col-sm-11 col-md-6 col-lg-4 reset-password-card">
                    <div className="reset-password-header">
                        <h3 className="reset-password-h3">Reset Password</h3>
                    </div>
                    <div className="reset-password-form">
                        <form onSubmit={handelResetPassword}>
                            <div class="mb-4 p-0">
                                <input type="password" class="input-field" placeholder="New Password" name="password" onChange={handleChange} required />
                            </div>
                            <div class="mb-4 p-0">
                                <input type="password" class="input-field" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} required />
                            </div>
                            <div class="mb-4 p-0">
                                <button className="reset-password-form-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResetPassword
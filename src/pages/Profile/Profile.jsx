import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./profile.css";
import AuthContext from '../../context/AuthContext';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Profile = () => {
    const [FormInput, setFormInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    let { authTokens } = useContext(AuthContext);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };

    const getUserDetails = async () => {
        let response = await fetch('https://django.hayame.my/api/get-user-details/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens, 
            }
        })
        let data = await response.json()
        setFormInputs({
            firstName: data['first_name'],
            lastName: data['last_name'],
            email: data['email'],
            phone: data['phone']
        })
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    const notify = (message, type) => {
        if (type === "success") {
            toast.success(message, {
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
            toast.error(message, {
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

    const verifyPassword = () => {
        console.log("hello password");
        let exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(!FormInput.password.match(exp)){
            notify("Password should contain characters between 6 to 20 which contain at least one numeric digit, one uppercase and one lowercase letter", "error")
            return false;
        }
        if(FormInput.password !== FormInput.confirmPassword){
            notify("Password and Confirm Password doesn't match", "error");
            return false;
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(FormInput.password !== ""){
            if(verifyPassword()){
                let response = await fetch('https://django.hayame.my/api/change-password/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + authTokens, 
                    },
                    body: JSON.stringify({
                        'password': FormInput.password,
                        'confirm_password': FormInput.confirmPassword
                    })
                })
                let data = await response.json()
                if(data['success']){
                    notify(data['response'], "success");
                }
                else{
                    notify(data['response'], "error");
                }
            }
        }

        let response = await fetch('https://django.hayame.my/api/update/user-details/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens, 
            },
            body: JSON.stringify({
                'first_name': FormInput.firstName,
                'last_name': FormInput.lastName,
                'email': FormInput.email,
                'phone': FormInput.phone
            })
        })
        let data = await response.json()
        if(data['success']){
            notify(data['response'], 'success');
        }
        else{
            notify(data['response'], 'error');
        }

    }


    return (
        <div>
            <Helmet>
                <title>Profile - Hayame</title>
                <link rel="canonical" href="/profile" />
                <meta name="robots" content="noindex" />
            </Helmet>

            <Navbar />
            <div className="row mx-0 justify-content-center my-5">
                <div className="col-11 col-sm-11 col-md-11 col-lg-7">
                    <h1 className="profile-h1">Profile</h1>
                    <form className="profile-form-card" onSubmit={handleSubmit}>
                        <div className="row m-0">
                            <div className="col-6 mb-3">
                                <label for="firstName" className="form-label">First Name</label>
                                <input type="text" className="input-field" onChange={handleChange} name="firstName" defaultValue={FormInput.firstName} required />
                            </div>
                            <div className="col-6 mb-3">
                                <label for="lastName" className="form-label">Last Name</label>
                                <input type="text" className="input-field" onChange={handleChange} name="lastName" defaultValue={FormInput.lastName} required />
                            </div>
                            <div className="col-6 mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="input-field" onChange={handleChange} name="email" defaultValue={FormInput.email} disabled required />
                            </div>
                            <div className="col-6 mb-3">
                                <label for="phone" className="form-label">Phone</label>
                                <input type="text" className="input-field" onChange={handleChange} name="phone" defaultValue={FormInput.phone} required />
                            </div>
                            <div className="col-6 mb-3">
                                <label for="password" className="form-label">Change Password</label>
                                <input type="password" className="input-field" onChange={handleChange} name="password" />
                            </div>
                            <div className="col-6 mb-3">
                                <label for="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="input-field" onChange={handleChange} name="confirmPassword" />
                            </div>
                        </div>
                        <div className="row mx-0 my-3 justify-content-end">
                        <button className="profile-form-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Profile
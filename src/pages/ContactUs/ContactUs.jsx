import React from 'react';
import './contactUs.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const ContactUs = () => {
    const [contactInputs, setContactInputs] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContactInputs((values) => ({ ...values, [name]: value }));
    };

    const handleContactForm = async(e) => {
        e.preventDefault();

        let response = await fetch('http://djangotest.hayame.my/api/send-query/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'first_name': contactInputs.first_name,
                'last_name': contactInputs.last_name,
                'email': contactInputs.email,
                'subject': contactInputs.subject,
                'message': contactInputs.message
            })
        })
        let data = await response.json();

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

            <div className="container my-5 contact-us-container">
                <div className="row m-0">
                    <div className="col-4 contact-us-contact-info">
                        <h2 className="contact-us-h2">Contact Information</h2>
                        <div>Hayame Solutions SDN BHD, A-6-4, Block A, Megan Phoenix, Jalan 2/142A, Off Jalan Cheras, WP Kuala Lumpur</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                            <span className="px-2">support@hayame.my</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                            <span className="px-2">+60 12-4343-470</span>
                        </div>
                    </div>
                    <div className="col-8 contact-us-form-container">
                        <h2 className="contact-us-h2">Send us a message</h2>
                        <form onChange={handleContactForm}>
                            <div className="row m-0">
                                <div class="mb-4 col-6">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="text" className="input-field" onChange={handleChange} required />
                                </div>
                                <div class="mb-4 col-6">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="text" className="input-field" onChange={handleChange} required />
                                </div>
                                <div class="mb-4 col-6">
                                    <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                    <input type="email" className="input-field" onChange={handleChange} required />
                                </div>
                                <div class="mb-4 col-6">
                                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                                    <input type="number" className="input-field" onChange={handleChange} required />
                                </div>
                                <div class="mb-4 col-12">
                                    <label for="exampleInputEmail1" class="form-label">Subject</label>
                                    <input type="text" className="input-field" onChange={handleChange} required />
                                </div>
                                <div class="mb-4 col-12">
                                    <label for="exampleInputEmail1" class="form-label">Message</label>
                                    <textarea type="text" className="input-field" onChange={handleChange} rows="3" required ></textarea>
                                </div>
                                <div class="my-4 d-flex justify-content-end">
                                    <button className="contact-us-form-btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs
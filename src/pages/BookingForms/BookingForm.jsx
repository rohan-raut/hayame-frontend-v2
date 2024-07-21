import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Select from "react-select";
import './bookingForm.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import CleanerBooking from './CleanerBooking/CleanerBooking';
import { useNavigate } from 'react-router-dom';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';

const BookingForm = () => {
    const [service, setService] = useState();
    const [postcode, setPostcode] = useState();
    const [availablePostCode, setAvailablePostCode] = useState();

    const ServiceOptions = [
        { value: "Cleaner", label: "Cleaner" },
        { value: "General Worker", label: "General Worker" },
        { value: "Gardener", label: "Gardener" },
        { value: "Mover-Packer", label: "Mover-Packer"},
        { value: "Elderly-Care", label: "Elderly-Care"},
        { value: "Task-Errands", label: "Task-Errands"},
    ];

    const navigate = useNavigate();

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

    const getAllPostCodes = async () => {
        let response = await fetch('https://django.hayame.my/api/get-all-postcodes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json();
        setAvailablePostCode(data);
    }

    useEffect(() => {
        getAllPostCodes();
    }, []);


    const validateForm = () => {
        let selectedPostCode = parseInt(postcode);
        if (availablePostCode.includes(selectedPostCode) === false) {
            notify("Currently we do not provide Services at this Location", "error");
            return false;
        }
        return true;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            if (service === "Cleaner") {
                navigate('/book-cleaner', { state: { postcode: postcode } });
            }
            else if (service === "General Worker") {
                navigate('/book-general-worker', { state: { postcode: postcode } });
            }
            else if (service === "Gardener") {
                navigate('/book-gardener', { state: { postcode: postcode } });
            }
            else if (service === "Mover-Packer") {
                navigate('/book-mover-packer', { state: { postcode: postcode } });
            }
            else if (service === "Elderly-Care") {
                navigate('/book-elderly-care', { state: { postcode: postcode } });
            }
            else if (service === "Task-Errands") {
                navigate('/book-task-errands', { state: { postcode: postcode } });
            }
        }

    }

    return (
        <div>
            <Navbar />

            <div className="container my-5">
                <div className="row m-0">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 booking-form-container">

                        <h2 className="booking-form-h2">Instructions</h2>

                        <ul className="booking-form-instructions">
                            <li>Fill out the booking form with your address, skill, number of workers, start and end dates, and start and end times. Currently, we provide services only in the Selangor and Kuala Lumpur regions.</li>
                            <li>After completing the booking form, click on the Next button. You will see all the details of your booking, including worker and transportation costs.</li>
                            <li>Click on Confirm if you want to proceed with the booking. A popup message will appear.</li>
                            <li>Read the message and click on Confirm. You will be redirected to the payment page.</li>
                            <li>After completing the payment, you will receive the invoice via email.</li>
                            <li>If you don't receive the invoice after payment or notice any discrepancies while booking, please contact us immediately at support@hayame.my.</li>
                        </ul>

                        <form onSubmit={handleSubmit}>
                            <div className="row mx-0 py-4">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <Select
                                        options={ServiceOptions}
                                        placeholder="Select Service"
                                        onChange={(e) => {
                                            setService(e.value);
                                        }}
                                        required

                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 6,
                                            minHeight: 40,
                                            colors: {
                                                ...theme.colors,
                                                primary25: '#A4E2D5',
                                                primary: '#58BBA6',
                                            },
                                        })}

                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderColor: state.isFocused ? '#A4E2D5' : 'gray',
                                                padding: '4px'
                                            }),
                                        }}
                                    />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <input
                                        type="text"
                                        className="input-field"
                                        name="postCode"
                                        placeholder="Post Code"
                                        onChange={(e) => setPostcode(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mx-0 justify-content-end my-2">
                                <button className="booking-form-btn" type="submit">
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />
            <SocialMediaIcons />

        </div>
    );
}

export default BookingForm
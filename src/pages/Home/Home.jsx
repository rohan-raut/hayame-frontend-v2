import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import FAQ from '../../components/FAQ/FAQ';
import { ResidentialCleaning, CleaningInstruments, HomeCleaning, CleaningIcon, GardenerIcon, GeneralWorkerIcon, ElderlyCareIcon, MoversPackersIcon, TaskErrandsIcon, MissionIcon, ValuesIcon, VisionIcon } from '../../assets';
import "./home.css";
import Footer from '../../components/Footer/Footer';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet';

const Home = () => {
    const [service, setService] = useState();
    const [postcode, setPostcode] = useState();
    const [availablePostCode, setAvailablePostCode] = useState();

    const ServiceOptions = [
        { value: "Cleaner", label: "Cleaner" },
        { value: "General Worker", label: "General Worker" },
        { value: "Gardener", label: "Gardener" },
        { value: "Mover-Packer", label: "Mover-Packer" },
        { value: "Elderly-Care", label: "Elderly-Care" },
        { value: "Task-Errands", label: "Task-Errands" },
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

            <Helmet>
                <title>Hayame - Professional Home Service Provider in Malaysia</title>
                <meta name="description" content="Hayame is one of the best service providers in Malaysia, we provide different services as cleaning, gardening, elderly care, movers and packers." />
                <link rel="canonical" href="/" />
            </Helmet>

            <Navbar />

            <div className="row mx-0 home-header-section">
                <div className="home-main-image"></div>

                <div className="home-service-form">
                    <h1 className="home-h1">Book Your Service </h1>
                    <p className="home-tagline">Your Convenience, Our Priority!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="row mx-0 py-3">
                            <div className="col-10 col-sm-10 col-md-4 col-lg-5 mb-3">
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
                            <div className="col-10 col-sm-10 col-md-4 col-lg-5 mb-3">
                                <input
                                    type="text"
                                    className="input-field"
                                    name="postCode"
                                    placeholder="Post Code"
                                    onChange={(e) => setPostcode(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-5 col-sm-5 col-md-1 col-lg-2">
                                <button className="booking-form-btn" type="submit">
                                    Next
                                </button>
                            </div>
                        </div>

                    </form>
                </div>

                <div className="container d-flex justify-content-center home-services-container">
                    <div className="row mx-0 justify-content-center home-services-row">
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                            <img src={CleaningIcon} alt="Cleaning Service Icon" />
                            <div className="home-services-name">
                                <p>Cleaning</p>
                            </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                            <img src={GardenerIcon} alt="Gardening Service Icon" />
                            <div className="home-services-name">
                                <p>Gardening</p>
                            </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                            <img src={ElderlyCareIcon} alt="Elderly Care Service Icon" />
                            <div className="home-services-name">
                                <p>Elderly Care</p>
                            </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                            <img src={MoversPackersIcon} alt="Movers and Packers Service Icon" />
                            <div className="home-services-name">
                                <p>Movers & Packers</p>                        </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                            <img src={GeneralWorkerIcon} alt="General Workers Service Icon" />
                            <div className="home-services-name">
                                <p>General Workers</p>                        </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2 col-lg-2 home-services-icon">
                            <img src={TaskErrandsIcon} alt="Task and Errands Service Icon" />
                            <div className="home-services-name">
                                <p>Task & Errands</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* Testimonials */}
            <CustomerReviews />

            {/* Mission, Vision & Values */}
            <div className="container home-mvv-section">
                <div className="row mx-0 justify-content-center">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center mb-5">
                        <div className="home-mvv-card">
                            <div className="home-mvv-header">
                                <img src={MissionIcon} alt="Company Mission Icon" />
                                <h2>Mission</h2>
                            </div>
                            <div className="home-mvv-details">
                                Our mission is to revolutionize home and professional services in Malaysia by leveraging state-of-the-art technology to provide efficient, reliable, and high-quality solutions that meet the diverse needs of our customers.
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center mb-5">
                        <div className="home-mvv-card">
                            <div className="home-mvv-header">
                                <img src={ValuesIcon} alt="Company Values Icon" />
                                <h2>Values</h2>
                            </div>
                            <div className="home-mvv-details">
                                We value innovation, leveraging cutting-edge technology to enhance our services. Reliability and quality are at the core of our operations, ensuring dependable and high-standard service delivery. We prioritize customer satisfaction, always striving to exceed expectations. Integrity and transparency guide our business practices, and we foster collaboration with our service partners for the best outcomes.
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center mb-5">
                        <div className="home-mvv-card">
                            <div className="home-mvv-header">
                                <img src={VisionIcon} alt="Company Vision Icon" />
                                <h2>Vision</h2>
                            </div>
                            <div className="home-mvv-details">
                                Our vision is to become the leading one-stop platform in Malaysia for home and professional services, known for our innovation, customer-centric approach, and commitment to excellence.
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* FAQ */}
            <FAQ />


            <SocialMediaIcons />

            {/* Footer */}
            <Footer />



        </div>
    )
}

export default Home
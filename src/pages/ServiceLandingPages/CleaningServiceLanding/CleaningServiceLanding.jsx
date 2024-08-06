import React, { useState, useEffect } from 'react';
import "./cleaningServiceLanding.css";
import Navbar from '../../../components/Navbar/Navbar';
import CustomerReviews from '../../../components/CustomerReviews/CustomerReviews';
import Footer from '../../../components/Footer/Footer';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { CleanKitchen, CleanBalcony, CleanBathroom, CleanBedroom, CleanLivingRoom, CleanersMovingBoxes, HayameCleaner } from '../../../assets';
import Slider from "react-slick";
import { Helmet } from 'react-helmet';

const CleaningServiceLanding = () => {
    const [postcode, setPostcode] = useState();
    const [availablePostCode, setAvailablePostCode] = useState();

    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: "linear",
                }
            }
        ]
    };

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

    const OpenCloseFAQ = (e) => {
        let accordionContent = e.target.nextElementSibling;
        let headerElement = e.target;

        // if clicked on cross icon, get the parent's sibling element
        if (accordionContent == null) {
            accordionContent = e.target.parentElement.nextElementSibling;
            headerElement = e.target.parentElement;
        }

        headerElement.classList.toggle('active');

        if (headerElement.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            navigate('/book-cleaner', { state: { postcode: postcode } });
        }

    }


    return (
        <div>
            <Helmet>
                <title>House Cleaning Service Company in Malaysia - Hayame</title>
                <meta name="description" content="Hayame is one of the best house cleaning service providers in various regions of Malaysia like Alam Impian, Klang, Shah Alam, Subang, Petaling Jaya and Damansara." />
                <link rel="canonical" href="/book-cleaning-service" />
            </Helmet>

            <Navbar />
            <div className="row m-0 cleaning-service-landing-header-section">
                <div className="cleaning-service-landing-header-img"></div>
                <div className="cleaning-sevice-landing-form-section">
                    <h1 className="cleaning-service-landing-h1">House Cleaning Service in Malaysia - Kuala Lumpur and Selangor</h1>

                    <p className="color-white mb-4">Hayame House Cleaning Service aims to provide a comprehensive and reliable solution for maintaining a clean and comfortable home environment.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="row m-0">
                            <div className="col-10 col-sm-10 col-md-4 col-lg-5 mb-3 px-0">
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
            </div>


            <div className="row mx-0 justify-content-evenly cleaning-service-landing-process-section">
                <h2 className="cleaning-service-landing-h2 mb-5">Easy 3 Step House Cleaning Service Booking</h2>
                <div className="col-10 col-sm-10 col-md-3 col-lg-3 mb-3 cleaning-service-landing-process-card p-4">
                    <div className="text-center mb-1">
                        Step 1
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#58BBA6"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                        <h3 className="cleaning-service-landing-h3 px-1">Booking Details</h3>
                    </div>
                    <div>
                        Select the date and time for the service as per your convenience with the number of workers required.
                    </div>
                </div>

                <div className="col-10 col-sm-10 col-md-3 col-lg-3 mb-3 cleaning-service-landing-process-card p-4">
                    <div className="text-center mb-1">
                        Step 2
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#58BBA6"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
                        <h3 className="cleaning-service-landing-h3 px-1">Address</h3>
                    </div>
                    <div>
                        Pick your service location and make the payment.
                    </div>
                </div>

                <div className="col-10 col-sm-10 col-md-3 col-lg-3 mb-3 cleaning-service-landing-process-card p-4">
                    <div className="text-center mb-1">
                        Step 3
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#58BBA6"><path d="M440-520h80v-280q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800v280ZM200-360h560v-80H200v80Zm-58 240h98v-80q0-17 11.5-28.5T280-240q17 0 28.5 11.5T320-200v80h120v-80q0-17 11.5-28.5T480-240q17 0 28.5 11.5T520-200v80h120v-80q0-17 11.5-28.5T680-240q17 0 28.5 11.5T720-200v80h98l-40-160H182l-40 160Zm676 80H142q-39 0-63-31t-14-69l55-220v-80q0-33 23.5-56.5T200-520h160v-280q0-50 35-85t85-35q50 0 85 35t35 85v280h160q33 0 56.5 23.5T840-440v80l55 220q13 38-11.5 69T818-40Zm-58-400H200h560Zm-240-80h-80 80Z" /></svg>
                        <h3 className="cleaning-service-landing-h3 px-1">Service Delivery</h3>
                    </div>
                    <div>Sit back and relax, our professional cleaners will arrive at the scheduled time.</div>
                </div>
            </div>


            <div className="row mx-0 justify-content-center cleaning-service-landing-cover-section">
                <h2 className="cleaning-service-landing-h2 mb-5">What Our House Cleaning Service Covers</h2>
                <div className="row mx-0 justify-content-evenly">
                    <div className="col-11 col-sm-11 col-md-5 col-lg-3 cleaning-service-landing-cover-card">
                        <img src={CleanLivingRoom} alt="Clean Living Room" />
                        <h3>Living Areas</h3>
                        <ul>
                            <li>Dusting and Wiping</li>
                            <li>Vacuuming carpets and rugs</li>
                            <li>Mopping floors</li>
                            <li>Cleaning windows and mirrors</li>
                            <li>Deep Cleaning</li>
                        </ul>
                    </div>
                    <div className="col-11 col-sm-11 col-md-5 col-lg-3 cleaning-service-landing-cover-card">
                        <img src={CleanBedroom} alt="Clean Bedroom" />
                        <h3>Bedrooms</h3>
                        <ul>
                            <li>Changing bed linens</li>
                            <li>Dusting and wiping surfaces</li>
                            <li>Vacuuming carpets and rugs</li>
                            <li>Mopping floors</li>
                            <li>Deep Cleaning</li>
                        </ul>
                    </div>
                    <div className="col-11 col-sm-11 col-md-5 col-lg-3 cleaning-service-landing-cover-card">
                        <img src={CleanKitchen} alt="Clean Kitchen" />
                        <h3>Kitchen</h3>
                        <ul>
                            <li>Cleaning countertops, sinks, and stovetops</li>
                            <li>Wiping down appliances</li>
                            <li>Mopping floors</li>
                            <li>Deep Cleaning</li>
                        </ul>
                    </div>
                    <div className="col-11 col-sm-11 col-md-5 col-lg-3 cleaning-service-landing-cover-card">
                        <img src={CleanBathroom} alt="Clean Bathroom" />
                        <h3>Bathroom</h3>
                        <ul>
                            <li>Scrubbing and disinfecting sinks, toilets, showers, and bathtubs</li>
                            <li>Cleaning mirrors and fixtures</li>
                            <li>Mopping floors</li>
                        </ul>
                    </div>
                    <div className="col-11 col-sm-11 col-md-5 col-lg-3 cleaning-service-landing-cover-card">
                        <img src={CleanersMovingBoxes} alt="Cleaners Moving Boxes" />
                        <h3>Move-in/Move-out</h3>
                        <ul>
                            <li>Cleaning and Packing</li>
                            <li>Moving things in or out</li>
                            <li>Cleaning space for new occupants</li>
                        </ul>
                    </div>
                    <div className="col-11 col-sm-11 col-md-5 col-lg-3 cleaning-service-landing-cover-card">
                        <img src={CleanBalcony} alt="Clean Balcony" />
                        <h3>Additional Areas</h3>
                        <ul>
                            <li>Balconies</li>
                            <li>Garages</li>
                            <li>Basements</li>
                            <li>Home offices</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="row mx-0 justify-content-center cleaning-service-landing-benefits-section">
                <h2 className="cleaning-service-landing-h2 mb-5 color-34AFAA">Why Choose Hayame for Cleaning Service</h2>
                <div className="col-11 col-sm-11 col-md-12 col-lg-5 mb-5">
                    <img src={HayameCleaner} alt="Hayame Cleaner Cleaning Room" width="100%" />
                </div>
                <div className="col-11 col-sm-11 col-md-12 col-lg-7">
                    <div className="row justify-content-center mx-0">
                        <div className="col-11 col-sm-11 col-md-6 col-lg-6 mb-3 px-3">
                            <h3 className="cleaning-service-landing-h3 mb-2 color-34AFAA">Affordable Prices</h3>
                            <p>We offer the services at the best prices without compromising the quality.</p>
                        </div>
                        <div className="col-11 col-sm-11 col-md-6 col-lg-6 mb-3 px-3">
                            <h3 className="cleaning-service-landing-h3 mb-2 color-34AFAA">Professional and Experienced Cleaners</h3>
                            <p>Thoroughly vetted and trained to deliver high-quality service.</p>

                        </div>
                        <div className="col-11 col-sm-11 col-md-6 col-lg-6 mb-3 px-3">
                            <h3 className="cleaning-service-landing-h3 mb-2 color-34AFAA">Customizable Plans</h3>
                            <p>Flexible scheduling and service options to fit different household needs.</p>
                        </div>
                        <div className="col-11 col-sm-11 col-md-6 col-lg-6 mb-3 px-3">
                            <h3 className="cleaning-service-landing-h3 mb-2 color-34AFAA">Satisfaction Guarantee</h3>
                            <p>Commitment to ensuring customer satisfaction with a re-clean policy if necessary.</p>
                        </div>
                        <div className="col-11 col-sm-11 col-md-6 col-lg-6 mb-3 px-3">
                            <h3 className="cleaning-service-landing-h3 mb-2 color-34AFAA">Convenience</h3>
                            <p>Easy booking process through Hayame’s platform with reliable and punctual service.</p>
                        </div>
                        <div className="col-11 col-sm-11 col-md-6 col-lg-6 mb-3 px-3">
                            <h3 className="cleaning-service-landing-h3 mb-2 color-34AFAA">Great Customer Support</h3>
                            <p>Easy to reach out to us through Whatsapp, Email or by filling the <Link to="/contact-us" className="no-decoration">Contact Us</Link> form.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-0 justify-content-evenly">
                <h2 className="cleaning-service-landing-h2 mb-4 text-center">Where We Provide Our Professional House Cleaning Services</h2>
                <div className="col-12 col-sm-6 col-md-5 col-lg-3 text-center">
                    <h3 className="cleaning-service-landing-h3 mb-3">Kuala Lumpur</h3>
                    <ul className="list-style-type-none">
                        <li>Bukit Bintang</li>
                        <li>Chow Kit</li>
                        <li>Sentul</li>
                        <li>Brickfields (Little India)</li>
                        <li>Bangsar</li>
                        <li>Kepong</li>
                        <li>Setapak</li>
                        <li>Taman Tun Dr Ismail (TTDI)</li>
                        <li>Mont Kiara</li>
                        <li>Sri Hartamas</li>
                        <li>Cheras</li>
                        <li>Seputeh</li>
                        <li>Kampung Baru</li>
                        <li>Ampang Hilir</li>
                        <li>Titiwangsa</li>
                        <li>Damansara Heights</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-3 text-center">
                    <h3 className="cleaning-service-landing-h3 mb-3">Selangor</h3>
                    <ul className="list-style-type-none">
                        <li>Shah Alam</li>
                        <li>Petaling Jaya</li>
                        <li>Subang Jaya</li>
                        <li>Klang</li>
                        <li>Puchong</li>
                        <li>Selayang</li>
                        <li>Rawang</li>
                        <li>Seri Kembangan</li>
                        <li>Ampang</li>
                        <li>Kajang</li>
                        <li>Bangi</li>
                        <li>Cyberjaya</li>
                        <li>Putrajaya</li>
                        <li>Sungai Buloh</li>
                        <li>Setia Alam</li>
                        <li>Port Klang</li>
                        <li>Banting</li>
                        <li>Sepang</li>
                        <li>Kota Kemuning</li>
                    </ul>
                </div>
            </div>

            <div className="row justify-content-center mx-0 cleaning-service-landing-reviews-section">
                <h2 className="cleaning-service-landing-h2 mb-4">What Our Customers Say</h2>
                <div className="slider-container col-10">
                    <Slider {...settings}>
                        <div className="customer-review-card">
                            <h3 className="customer-review-h3">Ajitha Ratnam</h3>
                            <div className="customer-review-rating-container">
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                            </div>
                            <p>The cleaning service I hired did an excellent job, very thorough. Highly recommended!</p>
                        </div>
                        <div className="customer-review-card">
                            <h3 className="customer-review-h3">Mani Kagita</h3>
                            <div className="customer-review-rating-container">
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                            </div>
                            <p>Faster response time, easy booking and reasonable price. Cleaners listen to our requirements and careful in cleaning fragile items. Will book again.</p>
                        </div>
                        <div className="customer-review-card">
                            <h3 className="customer-review-h3">Reeshmma Gunaseharan</h3>
                            <div className="customer-review-rating-container">
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                            </div>
                            <p>I felt confident entrusting my home to the cleaning service I hired. Highly recommended!</p>
                        </div>
                        <div className="customer-review-card">
                            <h3 className="customer-review-h3">Jameson James Chen</h3>
                            <div className="customer-review-rating-container">
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                            </div>
                            <p>The cleaning service I hired did an excellent job, very thorough. Thank you very much!</p>
                        </div>
                        <div className="customer-review-card">
                            <h3 className="customer-review-h3">Jonathan Lim</h3>
                            <div className="customer-review-rating-container">
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                            </div>
                            <p>I've tried a few cleaning services, but this one stands out for its professionalism.</p>
                        </div>
                        <div className="customer-review-card">
                            <h3 className="customer-review-h3">Ashwin Ramankutty</h3>
                            <div className="customer-review-rating-container">
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                                <span className="customer-review-star-ratings">★</span>
                            </div>
                            <p>I was really pleased with the result of the cleaning service I booked. Bravo and keep up the great work!</p>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="row mx-0 justify-content-center cleaning-service-landing-faq-section">
                <h2 className="cleaning-service-landing-h2 mb-5">Frequently Asked Questions</h2>
                <div className="col-11 col-sm-11 col-md-10 col-lg-8">
                    <div className="accordion-container">
                        <div className="accordion-item">
                            <button className="accordion-header" onClick={OpenCloseFAQ}>
                                How do I book your professional house cleaning service? <span className="icon">+</span>
                            </button>
                            <div className="accordion-content">
                                <p>Booking a service is easy. Simply visit our website, select cleaning service, choose a convenient date and time, and provide your contact details. Our team will confirm your booking and ensure a service partner is assigned to your request. </p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button className="accordion-header" onClick={OpenCloseFAQ}>
                                What if I am not satisfied with the service provided?  <span className="icon">+</span>
                            </button>
                            <div className="accordion-content">
                                <p>Customer satisfaction is our top priority. If you are not satisfied with the service, please contact our customer support within 24 hours of the service. We will address your concerns and take appropriate actions to resolve the issue. </p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button className="accordion-header" onClick={OpenCloseFAQ}>
                                Can I reschedule or cancel a booking?<span className="icon">+</span>
                            </button>
                            <div className="accordion-content">
                                <p>Yes, you can reschedule or cancel a booking. Please do so at least 24 hours before the scheduled service time to avoid any cancellation fees. You can manage your bookings through our website or by contacting customer support.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button className="accordion-header" onClick={OpenCloseFAQ}>
                                How do I pay for the services?<span className="icon">+</span>
                            </button>
                            <div className="accordion-content">
                                <p>Payment can be made online through our secure payment gateway using credit/debit cards or e-wallets. Alternatively, you can choose to pay in cash after the service is completed.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button className="accordion-header" onClick={OpenCloseFAQ}>
                                Do you offer any discounts or promotions?  <span className="icon">+</span>
                            </button>
                            <div className="accordion-content">
                                <p>Yes, we regularly offer discounts and promotions. Keep an eye on our website and social media pages for the latest deals. You can also subscribe to our newsletter to receive updates on special offers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    )
}

export default CleaningServiceLanding
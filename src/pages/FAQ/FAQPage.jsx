import React from 'react';
import './faqPage.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';


const FAQPage = () => {

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

    return (
        <div>
            <Navbar />

            <div className="container my-5">
                <h2 className="faq-h2">Frequently Asked Questions</h2>
                <div className="row justify-content-center m-0">
                    <div className="col-11 col-sm-11 col-md-10 col-lg-10">
                        <div className="accordion-container">
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    What services do you offer?<span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Hayame Solutions offers a wide range of home services, including cleaning, laundry, aircon maintenance, and home improvement. We connect you with highly skilled and dependable service partners to meet all your household needs. </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    How do I book your services? <span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Booking a service is easy. Simply visit our website, select the service you need, choose a convenient date and time, and provide your contact details. Our team will confirm your booking and ensure a service partner is assigned to your request. </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    Are the service partners verified and trustworthy? <span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Yes, all our service partners go through a rigorous vetting process to ensure they are skilled, reliable, and trustworthy. We prioritize your safety and satisfaction. </p>
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
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    How do we ensure the quality of our service?<span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>We ensure the quality of our service through a comprehensive vetting process for our service partners, regular training, and continuous performance monitoring. Additionally, we gather customer feedback after each service and use it to improve our standards. </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    What safety measures are in place for COVID-19? <span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>
                                        We follow strict safety protocols to ensure the well-being of our customers and service partners. This includes regular health checks, use of masks, and sanitization of equipment. We adhere to all government guidelines to prevent the spread of COVID-19.
                                    </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    How can I contact customer support?<span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>
                                        You can reach our customer support team via phone, email, or live chat on our website. Our team is available to assist you with any queries or issues you may have.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SocialMediaIcons />
        </div>

    )
}

export default FAQPage
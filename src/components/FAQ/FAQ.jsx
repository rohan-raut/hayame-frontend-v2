import React from 'react';
import './faq.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const FAQ = () => {

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
        <div className="container">
            <h2 className="faq-h2">Frequently Asked Questions</h2>
            <div className="row justify-content-center m-0">
                <div className="col-11 col-sm-11 col-md-10 col-lg-10">
                    <div class="accordion-container">

                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                What services do you offer?<span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>Hayame Solutions offers a wide range of home services, including cleaning, laundry, aircon maintenance, and home improvement. We connect you with highly skilled and dependable service partners to meet all your household needs.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                How do I book your services? <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>Booking a service is easy. Simply visit our website, select the service you need, choose a convenient date and time, and provide your contact details. Our team will confirm your booking and ensure a service partner is assigned to your request. </p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                Are the service partners verified and trustworthy?  <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>Yes, all our service partners go through a rigorous vetting process to ensure they are skilled, reliable, and trustworthy. We prioritize your safety and satisfaction. </p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                What if I am not satisfied with the service provided?  <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>Customer satisfaction is our top priority. If you are not satisfied with the service, please contact our customer support within 24 hours of the service. We will address your concerns and take appropriate actions to resolve the issue. </p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                Can I reschedule or cancel a booking?  <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>Yes, you can reschedule or cancel a booking. Please do so at least 24 hours before the scheduled service time to avoid any cancellation fees. You can manage your bookings through our website or by contacting customer support.</p>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                How can I contact customer support?  <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>
                                    You can reach our customer support team via phone, email, or live chat on our website. Our team is available to assist you with any queries or issues you may have.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
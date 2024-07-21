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
                                    <p>Hayame offers variety of cleaning services provided, such as residential,
                                        commercial, deep cleaning, move-in/move-out cleaning, etc. Please
                                        refer to <Link to="/product-and-services">https://hayame.my/product-and-services</Link> for more details </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    How do you charge for your services? <span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Hayame pricing structure are based on cleaner per hour computation, Current promotional rate are set at RM 20.00 per hour </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    Do I need to provide any cleaning equipment or supplies?  <span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Hayame utilize clients cleaning equipment and cleaning materials,
                                        primary factor for this is due cleanliness reasoning. </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    How do you ensure the quality of your cleaning?  <span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Hayame ensures highest quality of cleaning, our service implements
                                        several key measures, “Professional Training”, “Quality Control Checks”,
                                        “Client Feedback”, “Reliable and Consistent Staff”, “Responsive Customer
                                        Service” </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    How can I book a cleaning appointment?<span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Booking can be done at ease by visiting <Link to="/">https://hayame.my</Link></p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    What is your cancellation or rescheduling policy?<span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Please refer to <Link to="/refund-policy">https://hayame.my/refund-policy</Link></p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    Can I request the same cleaner for every visit?  <span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Yes, this is possible, please contact to us at support@hayame.my and
                                        we will be able arrange this request.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    How long does a typical cleaning take?<span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>Minimum duration required for the cleaning work would be 4 hours,
                                        and this can be extended based on size of the house and type of
                                        cleaning required </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    What should I do before the cleaning service arrives?  <span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>
                                        <ul>
                                            <li><strong>Declutter Spaces:</strong> Clear away toys, clothes, and personal items from surfaces and floors to allow cleaners direct access to areas needing attention.</li>
                                            <li><strong>Secure Valuables and Fragile Items:</strong> Safely store away any valuable, fragile, or sentimental items to prevent accidents during the cleaning process.</li>
                                            <li><strong>Provide Clear Instructions:</strong> Leave specific instructions for areas that need special care or should be avoided, and arrange for pet safety and comfort. </li>
                                            <li><strong>Prepare the Space:</strong> Ensure there's available parking and provide any necessary access codes or keys for entry.</li>
                                            <li><strong>Communicate Preferences and Concerns:</strong> Inform the cleaning service of any preferences regarding cleaning products or special considerations like allergies, and specify if you have areas requiring particular attention. </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-header" onClick={OpenCloseFAQ}>
                                    How do you handle pets during cleaning?<span className="icon">+</span>
                                </button>
                                <div className="accordion-content">
                                    <p>
                                        <ul>
                                            <li><strong>Inform and Prepare:</strong> Clients are encouraged to inform us about their pets and provide any specific instructions for their care or areas to avoid, ensuring pets are safely secured away from the cleaning areas.</li>
                                            <li><strong>Staff Awareness:</strong> Our cleaners are trained on how to interact with pets respectfully and safely, avoiding any stress or harm to the animals. </li>
                                            <li><strong>Pet-Safe Cleaning:</strong> We use pet-friendly cleaning products upon request to protect the well-being of your pets, ensuring a safe environment for them throughout the cleaning process. </li>
                                        </ul>
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
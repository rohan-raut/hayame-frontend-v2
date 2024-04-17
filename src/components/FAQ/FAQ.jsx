import React from 'react';
import './faq.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const FAQ = () => {

    const OpenCloseFAQ = (e) => {
        let accordionContent = e.target.nextElementSibling;
        let headerElement = e.target;

        // if clicked on cross icon, get the parent's sibling element
        if(accordionContent == null){
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
                                <p>Hayame offers variety of cleaning services provided, such as residential,
                                    commercial, deep cleaning, move-in/move-out cleaning, etc. Please
                                    refer to <Link to="/product-and-services">https://hayame.my/product-and-services</Link> for more details </p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                How do you charge for your services? <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>Hayame pricing structure are based on cleaner per hour computation, Current promotional rate are set at RM 20.00 per hour </p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                Do I need to provide any cleaning equipment or supplies?  <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>Hayame utilize clients cleaning equipment and cleaning materials,
                                    primary factor for this is due cleanliness reasoning. </p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                How do you ensure the quality of your cleaning?  <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>Hayame ensures highest quality of cleaning, our service implements
                                    several key measures, “Professional Training”, “Quality Control Checks”,
                                    “Client Feedback”, “Reliable and Consistent Staff”, “Responsive Customer
                                    Service” </p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                Can I request the same cleaner for every visit?  <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
                                <p>Yes, this is possible, please contact to us at support@hayame.my and
                                    we will be able arrange this request.</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-header" onClick={OpenCloseFAQ}>
                                What should I do before the cleaning service arrives?  <span class="icon">+</span>
                            </button>
                            <div class="accordion-content">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
import React from 'react';
import "./footer.css";
import { Logo } from '../../assets';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Whatsapp } from '../../assets';

const Footer = () => {
    return (
        <div className="row m-0 footer-row">
            <div className="footer-logo-col col-12 col-sm-12 col-md-5 col-lg-5">
                <img src={Logo} alt="" className="footer-logo" />
                <div className="footer-tagline">Professional Cleaning Services | Hayame</div>
                <div className="py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                    <span className="px-2">support@hayame.my</span>
                </div>
                <div className="py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                    <span className="px-2">+60 12-4343-470</span>
                </div>
                <div className="py-3">
                    <a className="footer-social-icons" href="https://www.instagram.com/hayamesolution" target="_blank">
                        <img src={Instagram} alt="" />
                    </a>
                    <a className="footer-social-icons" href="https://www.facebook.com/hayamedotmy" target="_blank">
                        <img src={Facebook} alt="" />
                    </a>
                    <a className="footer-social-icons" href="https://wa.me/60124343470" target="_blank">
                        <img src={Whatsapp} alt="" />
                    </a>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 d-flex justify-content-between flex-wrap">
                <div>
                    <div className="footer-title">Location Services</div>
                    <ul className="footer-ul">
                        <li>Shah Alam</li>
                        <li>Subang</li>
                        <li>Klang</li>
                        <li>Petaling Jaya</li>
                        <li>Damansara</li>
                        <li>Ampang</li>
                        <li>Cheras</li>
                    </ul>
                </div>

                <div>
                    <div className="footer-title">Top Services</div>
                    <ul className="footer-ul">
                        <li>Home Cleaning</li>
                        <li>Office Cleaning</li>
                        <li>Window Cleaning</li>
                        <li>Carpet Cleaning</li>
                        <li>Laundry Service</li>
                        <li>Furniture Sanitizing</li>
                        <li>Moving Services</li>
                    </ul>
                </div>

                <div>
                    <div className="footer-title">Quick Links</div>
                    <ul className="footer-ul">
                        <li><Link to='/' className="footer-links">Home</Link></li>
                        <li><Link to='/' className="footer-links">About Us</Link></li>
                        <li><Link to='/contact-us' className="footer-links">Contact Us</Link></li>
                        <li><Link to='/faqs' className="footer-links">FAQs</Link></li>
                        <li><Link to='/book' className="footer-links">Make Booking</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
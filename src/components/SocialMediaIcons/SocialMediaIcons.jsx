import React from 'react';
import './socialMediaIcons.css';
import { WhatsappDarkGreen } from '../../assets';
import { useNavigate } from 'react-router-dom';


const SocialMediaIcons = () => {

    const navigate = useNavigate();

    const WhatsappLink = () => {
        window.open('https://wa.me/60124343470', '_blank');
    }


  return (
    <div className="social-media-icons-container d-flex justify-content-center align-items-center" onClick={WhatsappLink}>
        <img src={WhatsappDarkGreen} alt="Whatsapp Icon" />
    </div>
  )
}

export default SocialMediaIcons
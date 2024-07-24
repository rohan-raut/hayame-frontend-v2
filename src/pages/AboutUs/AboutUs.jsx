import React from 'react';
import "./aboutUs.css";
import Navbar from '../../components/Navbar/Navbar';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import Footer from '../../components/Footer/Footer';
import { GardenerService, CleanerService, ElderlyCareService, GeneralWorkerService, TaskErrandsService, MoverPackerService, ProfessionalService } from '../../assets';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | Hayame</title>
                <meta name="description" content="Hayame provide solutions range from cleaning, laundry, and aircon maintenance to comprehensive home improvement services, seamlessly connecting thousands of Malaysian households with a curated pool of highly skilled service partners." />
                <link rel="canonical" href="/about-us" />
            </Helmet>

            <Navbar />
            <div className="about-us-header">
                <div className="about-us-header-img"></div>
                <h1 className="about-us-h1">About Us</h1>
            </div>

            <div className="row mx-0 py-5 justify-content-center align-items-center">
                <div className="col-12 col-sm-12 col-md-10 col-lg-7">
                    <p>Hayame Solutions Sdn Bhd stands at the forefront where technology meets services, offering a state-of-the-art platform that caters to all your home and professional needs. Our innovative solutions range from cleaning, laundry, and aircon maintenance to comprehensive home improvement services, seamlessly connecting thousands of Malaysian households with a curated pool of highly skilled service partners.</p>
                    <p>Additionally, we extend our expertise to the IT industry by providing dependable and skilled workers. Leveraging advanced technology, we ensure efficient, reliable, and high-quality service delivery, making Hayame Solutions the ultimate one-stop solution for all your needs.</p>
                    <p>Hayame Solutions Sdn Bhd is committed to transforming the landscape of home and professional services, making life easier and more convenient for our customers.</p>
                </div>
            </div>

            <div className="row mx-0 justify-content-center align-items-center about-us-services-section">
                <h2 className="about-us-h2">Our Services</h2>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="about-us-sevice-type">Home/Office</div>
                    <div className="about-us-taas">Talent-as-a-Service (TaaS)</div>
                    <div className="row mx-0">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 about-us-service-card">
                            <img src={CleanerService} alt="Cleaner Cleaning the desk" />
                            <div>Cleaning Service</div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 about-us-service-card">
                            <img src={ElderlyCareService} alt="Care Taker of elders" />
                            <div>Elderly Care</div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 about-us-service-card">
                            <img src={TaskErrandsService} alt="Man delivering the package" />
                            <div>Taks & Errands</div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 about-us-service-card">
                            <img src={GardenerService} alt="Gardening" />
                            <div>Gardeners</div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 about-us-service-card">
                            <img src={MoverPackerService} alt="Packing and Moving the lugage" />
                            <div>Packers & Movers</div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 about-us-service-card">
                            <img src={GeneralWorkerService} alt="Warehouse Workers" />
                            <div>General Workers</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="about-us-sevice-type">Professional</div>
                    <div className="about-us-taas">Talent-as-a-Service (TaaS)</div>
                    <div className="about-us-service-long-card">
                        <img src={ProfessionalService} alt="Office Workers" />
                        <div>Professional Workers</div>
                    </div>
                </div>
            </div>

            <SocialMediaIcons />
            <Footer />
        </div>
    )
}

export default AboutUs
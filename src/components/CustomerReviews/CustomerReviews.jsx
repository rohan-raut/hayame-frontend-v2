import React from 'react';
import Slider from "react-slick";
import './customerReviews.css';


const CustomerReviews = () => {

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
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: "linear",
                }
            }
        ]
    };

    return (

        <div className="container customer-review-container">
            <div className="row m-0">
                <h2 className="customer-review-h2">Customer Reviews</h2>
                <div className="slider-container">
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
        </div>
    )
}

export default CustomerReviews
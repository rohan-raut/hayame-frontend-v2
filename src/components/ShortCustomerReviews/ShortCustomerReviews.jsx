import React from 'react';
import Slider from "react-slick";
import "./shortCustomerReviews.css"


const ShortCustomerReviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (

        <div className="container short-customer-review-container">
            <div className="row m-0">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="short-customer-review-card">
                            <h3 className="short-customer-review-h3">Reeshmma Gunaseharan</h3>
                            <div className="short-customer-review-rating-container">
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                            </div>
                            <p>I felt confident entrusting my home to the cleaning service I hired. Highly recommended!</p>
                        </div>
                        <div className="short-customer-review-card">
                            <h3 className="short-customer-review-h3">Jameson James Chen</h3>
                            <div className="short-customer-review-rating-container">
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                            </div>
                            <p>The cleaning service I hired did an excellent job, very thorough. Thank you very much!</p>
                        </div>
                        <div className="short-customer-review-card">
                            <h3 className="short-customer-review-h3">Ashwin Ramankutty</h3>
                            <div className="short-customer-review-rating-container">
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                                <span className="short-customer-review-star-ratings">★</span>
                            </div>
                            <p>I was really pleased with the result of the cleaning service I booked. Bravo and keep up the great work!</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ShortCustomerReviews
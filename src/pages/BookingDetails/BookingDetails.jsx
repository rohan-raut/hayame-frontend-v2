import React, { useEffect, useState, useContext } from 'react';
import "./bookingDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import InvoiceGenerator from '../../utils/InvoiceGenerator';
import formatDate from '../../utils/FormatDate';
import formatTime from '../../utils/FormatTime';

const BookingDetails = () => {
    let { authTokens, user } = useContext(AuthContext);
    const [skill, setSkill] = useState(null);
    const [bookingId, setBookingId] = useState(null);
    const [bookingDetails, setBookingDetails] = useState(null);
    const location = useLocation();


    const getBookingDetails = async () => {
        if (skill !== null && bookingId != null) {
            let response = await fetch('https://djangotest.hayame.my/api/get-booking-details/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + authTokens,
                },
                body: JSON.stringify({
                    'skill': skill,
                    'booking_id': bookingId
                })
            })
            let data = await response.json()
            setBookingDetails(data);
        }
    }

    useEffect(() => {
        setSkill(location.state.skill);
        setBookingId(location.state.bookingId);
    }, [location.state.skill, location.state.bookingId])

    useEffect(() => {
        getBookingDetails();
    }, [skill, bookingId])


    const generateInvoice = () => {
        InvoiceGenerator(bookingDetails);
    }

    return (
        <div>
            <Navbar />
            <div className="row justify-content-center mx-0 my-5">
                <div className="col-12 col-sm-12 col-md-8 col-lg-5 booking-details-card">
                    <h1 className="booking-details-h1">Booking Details</h1>

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Booking ID</div>
                        {bookingDetails !== null && <div>{bookingDetails.booking_id}</div>}
                    </div>

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold booking-details-padding-right">Address</div>
                        {bookingDetails !== null && <div className="text-end">{bookingDetails.address}</div>}
                    </div>

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Postcode</div>
                        {bookingDetails !== null && <div>{bookingDetails.post_code}</div>}
                    </div>

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Property Type</div>
                        {bookingDetails !== null && <div>{bookingDetails.property_type}</div>}
                    </div>

                    {(bookingDetails !== null && (bookingDetails.skill === "Movers Packers")) ? 
                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Contains Lift</div>
                        {bookingDetails !== null && <div>{bookingDetails.has_lift}</div>}
                    </div> : "" }

                    {(bookingDetails !== null && (bookingDetails.skill === "Movers Packers")) ? 
                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">No. of floors</div>
                        {bookingDetails !== null && <div>{bookingDetails.floors}</div>}
                    </div> : "" }

                    {(bookingDetails !== null && (bookingDetails.skill === "Movers Packers")) ? 
                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Estimated no. of boxes to pack</div>
                        {bookingDetails !== null && <div>{bookingDetails.no_of_boxes_to_pack}</div>}
                    </div> : "" }

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Service Type</div>
                        {bookingDetails !== null && <div>{bookingDetails.skill}</div>}
                    </div>

                    {(bookingDetails !== null && (bookingDetails.skill === "Task Errands")) ? 
                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Task Task</div>
                        {bookingDetails !== null && <div>{bookingDetails.task_type}</div>}
                    </div> : "" }

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Start Date</div>
                        {bookingDetails !== null && <div>{formatDate(bookingDetails.start_date)}</div>}
                    </div>

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Start Time</div>
                        {bookingDetails !== null && <div>{formatTime(bookingDetails.start_time)}</div>}
                    </div>

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">No of Hours</div>
                        {bookingDetails !== null && <div>{bookingDetails.no_of_hours}</div>}
                    </div>

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Worker Count</div>
                        {bookingDetails !== null && <div>{bookingDetails.worker_count}</div>}
                    </div>

                    {(bookingDetails !== null && (bookingDetails.skill === "Elderly Care")) ? 
                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Worker Gender</div>
                        {bookingDetails !== null && <div>{bookingDetails.worker_gender}</div>}
                    </div> : "" }

                    {(bookingDetails !== null && (bookingDetails.skill === "Gardener")) ? 
                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Garden Size</div>
                        {bookingDetails !== null && <div>{bookingDetails.square_feet + " sq. feets"}</div>}
                    </div> : "" }

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Booking Status</div>
                        {bookingDetails !== null && <div>{bookingDetails.booking_status}</div>}
                    </div>

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Total Cost</div>
                        {bookingDetails !== null && <div>{"RM " + bookingDetails.total_cost}</div>}
                    </div>

                    <div>
                        <button className="btn btn-sm btn-primary my-3" onClick={generateInvoice}>Download Invoice</button>
                    </div>
                </div>
            </div>



            <SocialMediaIcons />
            <Footer />
        </div>
    )
}

export default BookingDetails
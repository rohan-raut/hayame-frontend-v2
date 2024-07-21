import React, { useEffect, useState, useContext } from 'react';
import "./allocateWorkers.css";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import Select from "react-select";
import formatDate from "../../utils/FormatDate";
import formatTime from "../../utils/FormatTime";

const AllocateWorkers = () => {
    let { authTokens, user } = useContext(AuthContext);
    const [skill, setSkill] = useState(null);
    const [bookingId, setBookingId] = useState(null);
    const [bookingDetails, setBookingDetails] = useState(null);
    const location = useLocation();
    const [workers, setWorkers] = useState();
    const [selectedWorkers, setSelectedWorkers] = useState();


    const getBookingDetails = async () => {
        if (skill !== null && bookingId != null) {
            let response = await fetch('https://django.hayame.my/api/get-booking-details/', {
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

    const getWorkersList = async () => {
        if (skill !== null) {
            let response = await fetch('https://django.hayame.my/api/get-workers-by-skill/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + authTokens,
                },
                body: JSON.stringify({
                    'skill': skill,
                })
            })
            let data = await response.json()

            let tempList = [];
            for (let i = 0; i < data.length; i++) {
                tempList.push({
                    'value': data[i]['id'],
                    'label': data[i]['worker_name'] + " (" + data[i]['worker_email'] + ")"
                })
            }

            setWorkers(tempList);
        }
    }

    useEffect(() => {
        getWorkersList();
    }, [skill])


    const handleSubmit = async(e) => {
        e.preventDefault();
        let workerIds = [];
        for(let i=0; i<selectedWorkers.length; i++){
            workerIds.push(selectedWorkers[i]['value']);
        }

        let response = await fetch('https://django.hayame.my/api/allocate-wokers/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens,
            },
            body: JSON.stringify({
                'skill': bookingDetails.skill,
                'booking_id': bookingDetails.id,
                'worker_ids': workerIds
            })
        })
        let data = await response.json()

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
                        {bookingDetails !== null && <div className="text-end"><a href={"https://www.google.com/maps/search/" + (bookingDetails.address).replaceAll(" ", "+")} target="_blank">{bookingDetails.address}</a></div>}
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
                        </div> : ""}

                    {(bookingDetails !== null && (bookingDetails.skill === "Movers Packers")) ?
                        <div className="d-flex justify-content-between py-1">
                            <div className="text-bold">No. of floors</div>
                            {bookingDetails !== null && <div>{bookingDetails.floors}</div>}
                        </div> : ""}

                    {(bookingDetails !== null && (bookingDetails.skill === "Movers Packers")) ?
                        <div className="d-flex justify-content-between py-1">
                            <div className="text-bold">Estimated no. of boxes to pack</div>
                            {bookingDetails !== null && <div>{bookingDetails.no_of_boxes_to_pack}</div>}
                        </div> : ""}

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Service Type</div>
                        {bookingDetails !== null && <div>{bookingDetails.skill}</div>}
                    </div>

                    {(bookingDetails !== null && (bookingDetails.skill === "Task Errands")) ?
                        <div className="d-flex justify-content-between py-1">
                            <div className="text-bold">Task Task</div>
                            {bookingDetails !== null && <div>{bookingDetails.task_type}</div>}
                        </div> : ""}

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
                        </div> : ""}

                    {(bookingDetails !== null && (bookingDetails.skill === "Gardener")) ?
                        <div className="d-flex justify-content-between py-1">
                            <div className="text-bold">Garden Size</div>
                            {bookingDetails !== null && <div>{bookingDetails.square_feet + " sq. feets"}</div>}
                        </div> : ""}

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Booking Status</div>
                        {bookingDetails !== null && <div>{bookingDetails.booking_status}</div>}
                    </div>

                    <div className="d-flex justify-content-between py-1">
                        <div className="text-bold">Total Cost</div>
                        {bookingDetails !== null && <div>{"RM " + bookingDetails.total_cost}</div>}
                    </div>

                    <div className="my-4">
                        <form onSubmit={handleSubmit}>
                            <Select
                                onChange={setSelectedWorkers}
                                options={workers}
                                isMulti
                                required
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 6,
                                    minHeight: 40,
                                    colors: {
                                        ...theme.colors,
                                        primary25: '#A4E2D5',
                                        primary: '#58BBA6',
                                    },
                                })}

                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? '#A4E2D5' : 'gray',
                                        padding: '3px'
                                    }),
                                }}
                            />

                            <div className="my-3">
                                <button className="btn btn-sm btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <SocialMediaIcons />
            <Footer />
        </div>
    )
}

export default AllocateWorkers
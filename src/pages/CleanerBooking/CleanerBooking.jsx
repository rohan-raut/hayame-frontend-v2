import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./cleanerBooking.css";
import DatePicker from '../../components/DatePicker/DatePicker';


const FormPart1 = (props) => {
    return (
        <div>
            {/* Frequency buttons */}
            <div className="row form-section-row">
                <div className="form-label-bold">How frequently would you like the cleaning service?</div>
                <div class="cleaner-booking-freq-radio-buttons">
                    <label class="cleaner-booking-freq-custom-radio">
                        <input type="radio" name="frequency" onChange={props.handleChange} />
                        <span class="cleaner-booking-freq-radio-btn"><i class="las la-check">✔</i>
                            <div class="cleaner-booking-freq-inner-card">
                                <h3 class="cleaner-booking-h3">One-Time</h3>
                                <div className="cleaner-booking-freq-price-discount color-transparent">Save 0%</div>
                                <div className="cleaner-booking-freq-price">RM <span classname="cleaner-booking-highlight-text">30</span> /hr</div>
                                <div className="cleaner-booking-freq-list">
                                    <div>✓ Basic Cleaning</div>
                                    <div></div>
                                </div>
                                <div className="cleaner-booking-freq-btn">Select</div>
                            </div>
                        </span>
                    </label>
                    <label class="cleaner-booking-freq-custom-radio">
                        <input type="radio" name="frequency" />
                        <span class="cleaner-booking-freq-radio-btn"><i class="las la-check">✔</i>
                            <div class="cleaner-booking-freq-inner-card">
                                <h3 class="cleaner-booking-h3">Weekly</h3>
                                <div className="cleaner-booking-freq-price-discount">Save 17%</div>
                                <div className="cleaner-booking-freq-price">RM <span classname="cleaner-booking-highlight-text">25</span> /hr</div>
                                <div className="cleaner-booking-freq-list">
                                    <div>✓ Save time to book</div>
                                    <div>✓ Same cleaner</div>
                                </div>
                                <div className="cleaner-booking-freq-btn">Select</div>
                            </div>
                        </span>
                    </label>
                    <label class="cleaner-booking-freq-custom-radio">
                        <input type="radio" name="frequency" />
                        <span class="cleaner-booking-freq-radio-btn"><i class="las la-check">✔</i>
                            <div class="cleaner-booking-freq-inner-card">
                                <h3 class="cleaner-booking-h3">Fortnightly</h3>
                                <div className="cleaner-booking-freq-price-discount">Save 20%</div>
                                <div className="cleaner-booking-freq-price">RM <span classname="cleaner-booking-highlight-text">20</span> /hr</div>
                                <div className="cleaner-booking-freq-list">
                                    <div>✓ Save time to book</div>
                                    <div>✓ Same cleaner</div>
                                </div>
                                <div className="cleaner-booking-freq-btn">Select</div>
                            </div>
                        </span>
                    </label>
                </div>
            </div>

            {/* Calendar */}
            <div className="row form-section-row">
                <div className="form-label-bold">Select the Start Date</div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-10 p-0">
                    <DatePicker />
                </div>
            </div>

            {/* No. of Hours */}
            <div className="row form-section-row">
                <div className="form-label-bold">How many hours would you like the service?</div>
                <div className="cleaner-booking-no-of-hours-container px-0">
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input type="radio" name="no_of_hours" onChange={props.handleChange} />
                            <span className="cleaner-booking-no-of-hours-btn">2 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input type="radio" name="no_of_hours" onChange={props.handleChange} />
                            <span className="cleaner-booking-no-of-hours-btn">3 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input type="radio" name="no_of_hours" onChange={props.handleChange} />
                            <span className="cleaner-booking-no-of-hours-btn">4 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input type="radio" name="no_of_hours" onChange={props.handleChange} />
                            <span className="cleaner-booking-no-of-hours-btn">5 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input type="radio" name="no_of_hours" onChange={props.handleChange} />
                            <span className="cleaner-booking-no-of-hours-btn">6 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input type="radio" name="no_of_hours" onChange={props.handleChange} />
                            <span className="cleaner-booking-no-of-hours-btn">7 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input type="radio" name="no_of_hours" onChange={props.handleChange} />
                            <span className="cleaner-booking-no-of-hours-btn">8 hours</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}


const FormPart2 = (props) => {
    const [coordinates, setCoordinates] = useState({
        'lat': 37.39094933041195,
        'lng': -122.02503913145092
    });

    useEffect(() => {
        async function initMap() {
            // Request needed libraries.
            const google = window.google;
            const { Map, InfoWindow } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
            const map = new Map(document.getElementById("map"), {
                center: { lat: coordinates.lat, lng: coordinates.lng },
                zoom: 17,
                mapId: "4504f8b37365c3d0",
                disableDefaultUI: true,
            });
            const infoWindow = new InfoWindow();
            console.log(coordinates);
            const draggableMarker = new AdvancedMarkerElement({
                map,
                position: { lat: coordinates.lat, lng: coordinates.lng },
                gmpDraggable: true,
                title: "Drag to your location",
            });

            draggableMarker.addListener("dragend", (event) => {
                const position = draggableMarker.position;

                infoWindow.close();
                // infoWindow.setContent(`Pin dropped at: ${position.lat}, ${position.lng}`);
                // infoWindow.open(draggableMarker.map, draggableMarker);
            });
        }

        initMap();
    }, [coordinates])

    const handleJobLocation = () => {
        var id = "address-field";
        const google = window.google;

        var autocomplete;
        autocomplete = new google.maps.places.Autocomplete(document.getElementById(id), {
            types: ['geocode', 'establishment'],
        });

        autocomplete.addListener('place_changed', function () {
            var near_place = autocomplete.getPlace();
            // set the value of input here
        });

    }


    const getCurrentLocation = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                setCoordinates({
                    lat: await position.coords.latitude,
                    lng: await position.coords.longitude
                });

            }, function (error) {
                console.error("Error getting location:", error.message);
            });
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    return (
        <div>
            <form>
                <div className="row m-0">
                    <div className="form-label-bold">Select your location</div>
                    <div id="map" className="mb-4"></div>
                    <div class="mb-4 col-8">
                        <label for="exampleInputEmail1" class="form-label">Address</label>
                        <input type="text" className="input-field" id="address-field" onChange={handleJobLocation} />
                    </div>
                    <div class="mb-4 col-4 cleaner-booking-current-location-div">
                        <button type="button" onClick={getCurrentLocation} className="cleaner-booking-current-location-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" /></svg> Get Current Location</button>
                    </div>
                </div>
            </form>
        </div>
    )
}



const CleanerBooking = () => {
    const [page, setPage] = useState(0);
    const [FormInputs, setFormInputs] = useState();
    const [StartDate, setStartDate] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };


    const ChangeForm = () => {
        setPage((page + 1) % 3);
    }


    return (
        <div>
            <Navbar />

            <div className="container my-5">

                <div className="row m-0">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 cleaner-booking-form-container">
                        <div className="row m-0 mb-5">
                            <div className="stepper-div-container">
                                <div className="stepper-div">
                                    <div className={page >= 0 ? "stepper-fill" : ""}></div>
                                </div>
                                <div className="stepper-div">
                                    <div className={page >= 1 ? "stepper-fill" : ""}></div>
                                </div>
                                <div className="stepper-div">
                                    <div className={page >= 2 ? "stepper-fill" : ""}></div>
                                </div>
                            </div>
                            <div className="stepper-name-container">
                                <div className="stepper-name">Booking Details</div>
                                <div className="stepper-name">Address</div>
                                <div className="stepper-name">Payment</div>
                            </div>
                        </div>

                        <div>
                            {page === 0 ? <FormPart1 /> : <FormPart2 />}
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-0 d-flex justify-content-center">
                        <input type="checkbox" id="booking-summary-active" />
                        <div className="row m-0 cleaner-booking-summary-card">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="p-0 m-0">Booking Summary</h4>
                                <label for="booking-summary-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="M480-545.33 287.33-352.67 240-400l240-240 240 240-47.33 47.33L480-545.33Z" /></svg>
                                </label>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div>Cleaning Frequency</div>
                                <div>Weekly</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>Starting Date</div>
                                <div>14-10-2001</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>Booking Time</div>
                                <div>10:00 am</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>Property Type</div>
                                <div>HBD</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>Hours per session</div>
                                <div>2 hours</div>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between">
                                <div>Total</div>
                                <div>RM 100</div>
                            </div>

                            <hr />

                            <div>
                                <button className="btn btn-primary" onClick={ChangeForm}>Next</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CleanerBooking
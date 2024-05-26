import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./cleanerBooking.css";
import DatePicker from "../../components/DatePicker/DatePicker";
import Select from "react-select";
import UserLoginSignUp from "../../components/UserLoginSignUp/UserLoginSignUp";
import AuthContext from '../../context/AuthContext';
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast, Bounce } from 'react-toastify';


const FormPart1 = ({ FormInputs, setFormInputs }) => {
    const date = new Date();
    // const formatter = new
    const options = [
        { value: "07:00", label: "07:00" },
        { value: "07:30", label: "07:30" },
        { value: "08:00", label: "08:00" },
        { value: "08:30", label: "08:30" },
        { value: "09:00", label: "09:00" },
        { value: "09:30", label: "09:30" },
        { value: "10:00", label: "10:00" },
        { value: "10:30", label: "10:30" },
        { value: "11:00", label: "11:00" },
        { value: "11:30", label: "11:30" },
        { value: "12:00", label: "12:00" },
        { value: "12:30", label: "12:30" },
        { value: "13:00", label: "13:00" },
        { value: "13:30", label: "13:30" },
        { value: "14:00", label: "14:00" },
        { value: "14:30", label: "14:30" },
        { value: "15:00", label: "15:00" },
        { value: "15:30", label: "15:30" },
        { value: "16:00", label: "16:00" },
        { value: "16:30", label: "16:30" },
        { value: "17:00", label: "17:00" },
        { value: "17:30", label: "17:30" },
        { value: "18:00", label: "18:00" },
        { value: "18:30", label: "18:30" },
        { value: "19:00", label: "19:00" },
        { value: "19:30", label: "19:30" },
        { value: "20:00", label: "20:00" },
        { value: "20:30", label: "20:30" },
        { value: "21:00", label: "21:00" },
        { value: "21:30", label: "21:30" },
        { value: "22:00", label: "22:00" },
    ];


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };

    return (
        <div>
            {/* Frequency buttons */}
            <div className="row form-section-row">
                <div className="form-label-bold">
                    How frequently would you like the cleaning service?
                </div>
                <div class="cleaner-booking-freq-radio-buttons">
                    <label
                        class="cleaner-booking-freq-custom-radio"
                    >
                        <input
                            type="radio"
                            name="frequency"
                            value="one-time"
                            onChange={handleChange}
                        />
                        <span class="cleaner-booking-freq-radio-btn">
                            <i class="las la-check">✔</i>
                            <div class="cleaner-booking-freq-inner-card">
                                <h3 class="cleaner-booking-h3">One-Time</h3>
                                <div className="cleaner-booking-freq-price-discount color-transparent">
                                    Save 0%
                                </div>
                                <div className="cleaner-booking-freq-price">
                                    RM <span classname="cleaner-booking-highlight-text">30</span>{" "}
                                    /hr
                                </div>
                                <div className="cleaner-booking-freq-list">
                                    <div>✓ Basic Cleaning</div>
                                    <div></div>
                                </div>
                                <div className="cleaner-booking-freq-btn">Select</div>
                            </div>
                        </span>
                    </label>
                    <label
                        class="cleaner-booking-freq-custom-radio"
                    >
                        <input type="radio" name="frequency" value="weekly" onChange={handleChange} />
                        <span class="cleaner-booking-freq-radio-btn">
                            <i class="las la-check">✔</i>
                            <div class="cleaner-booking-freq-inner-card">
                                <h3 class="cleaner-booking-h3">Weekly</h3>
                                <div className="cleaner-booking-freq-price-discount">
                                    Save 17%
                                </div>
                                <div className="cleaner-booking-freq-price">
                                    RM <span classname="cleaner-booking-highlight-text">25</span>{" "}
                                    /hr
                                </div>
                                <div className="cleaner-booking-freq-list">
                                    <div>✓ Save time to book</div>
                                    <div>✓ Same cleaner</div>
                                </div>
                                <div className="cleaner-booking-freq-btn">Select</div>
                            </div>
                        </span>
                    </label>
                    <label
                        class="cleaner-booking-freq-custom-radio"
                    >
                        <input type="radio" name="frequency" value="fortnightly" onChange={handleChange} />
                        <span class="cleaner-booking-freq-radio-btn">
                            <i class="las la-check">✔</i>
                            <div class="cleaner-booking-freq-inner-card">
                                <h3 class="cleaner-booking-h3">Fortnightly</h3>
                                <div className="cleaner-booking-freq-price-discount">
                                    Save 20%
                                </div>
                                <div className="cleaner-booking-freq-price">
                                    RM <span classname="cleaner-booking-highlight-text">20</span>{" "}
                                    /hr
                                </div>
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
                    <DatePicker FormInputs={FormInputs} setFormInputs={setFormInputs} />
                </div>
            </div>

            {/* No. of Hours */}
            <div className="row form-section-row">
                <div className="form-label-bold">
                    How many hours would you like the service?
                </div>
                <div className="cleaner-booking-no-of-hours-container px-0">
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="2"
                                onChange={handleChange}
                            />
                            <span className="cleaner-booking-no-of-hours-btn">2 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="3"
                                onChange={handleChange}
                            />
                            <span className="cleaner-booking-no-of-hours-btn">3 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="4"
                                onChange={handleChange}
                            />
                            <span className="cleaner-booking-no-of-hours-btn">4 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="5"
                                onChange={handleChange}
                            />
                            <span className="cleaner-booking-no-of-hours-btn">5 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="6"
                                onChange={handleChange}
                            />
                            <span className="cleaner-booking-no-of-hours-btn">6 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="7"
                                onChange={handleChange}
                            />
                            <span className="cleaner-booking-no-of-hours-btn">7 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="cleaner-booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="8"
                                onChange={handleChange}
                            />
                            <span className="cleaner-booking-no-of-hours-btn">8 hours</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* {Start time section} */}

            <div className="row form-section-row">
                <div className="form-label-bold">Enter your start time here</div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 m-0 p-0">
                    <Select
                        onChange={(e) => {
                            setFormInputs((values) => ({ ...values, ['startTime']: e.value }));
                        }}
                        options={options}
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
                </div>
            </div>
        </div>
    );
};

const FormPart2 = ({ FormInputs, setFormInputs }) => {
    const [coordinates, setCoordinates] = useState({
        lat: 37.39094933041195,
        lng: -122.02503913145092,
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };

    const options = [
        { value: "Condominium", label: "Condominium" },
        { value: "HDB", label: "HDB" },
        { value: "Landed Property", label: "Landed Property" },
        { value: "Shophouse Home", label: "Shophouse Home" },
    ];

    useEffect(() => {
        async function initMap() {
            // Request needed libraries.
            const google = window.google;
            const { Map, InfoWindow } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await google.maps.importLibrary(
                "marker"
            );
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
    }, [coordinates]);

    const handleJobLocation = (e) => {
        var id = "address-field";
        const google = window.google;

        var autocomplete;
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById(id),
            {
                types: ["geocode", "establishment"],
            }
        );

        autocomplete.addListener("place_changed", function () {
            var near_place = autocomplete.getPlace();
            // set the value of input here
            console.log(near_place);
            setCoordinates({
                lat: near_place['geometry']['location'].lat(),
                lng: near_place['geometry']['location'].lng()
            })
            setFormInputs((values) => ({ ...values, ["address"]: near_place["formatted_address"] }));
        });
    };

    const getCurrentLocation = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async function (position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    setCoordinates({
                        lat: await position.coords.latitude,
                        lng: await position.coords.longitude,
                    });
                },
                function (error) {
                    console.error("Error getting location:", error.message);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div>
            <form>
                <div className="row m-0">
                    <div className="form-label-bold">Select your location</div>
                    <div id="map" className="mb-4"></div>
                    <div class="mb-4 col-12 col-sm-12 col-md-6 col-lg-8">
                        <label for="exampleInputEmail1" class="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="input-field"
                            id="address-field"
                            onChange={handleJobLocation}
                        />
                    </div>
                    <div class="mb-4 col-12 col-sm-12 col-md-6 col-lg-4 cleaner-booking-current-location-div">
                        <button
                            type="button"
                            onClick={getCurrentLocation}
                            className="cleaner-booking-current-location-btn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 -960 960 960"
                                width="24"
                            >
                                <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" />
                            </svg>{" "}
                            Get Current Location
                        </button>
                    </div>
                    <div className="row mx-0 my-4 justify-content-between">
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 p-0">
                            <div class="mb-4">
                                <label class="form-label">Post code</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    name="postCode"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 p-0">
                            <div class="mb-4">
                                <label class="form-label" style={{ width: "max-content" }}>
                                    Type of Property
                                </label>
                                <div>
                                    <Select
                                        options={options}
                                        onChange={(e) => {
                                            setFormInputs((values) => ({ ...values, ['propertyType']: e.value }));
                                        }}
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
                                                padding: '4px'
                                            }),
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

const FormPart3 = ({ FormInputs, setFormInputs }) => {
    let { authTokens, user } = useContext(AuthContext);

    const VoucherOptions = [
        { value: "HAY564", label: "HAY564" },
        { value: "HAY147", label: "HAY147" },
    ];

    const PaymentOptions = [
        { value: "Online", label: "Online" },
        { value: "Cash", label: "Cash" },
    ];

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };

    return (
        <div>
            {(authTokens === null) ? <UserLoginSignUp /> : ""}

            <div>
                <form>
                    <div className="row m-0">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                            <div class="mb-4">
                                <label class="form-label">Apply Voucher</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    name="voucher"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                            <label class="form-label">
                                Payment Method
                            </label>
                            <Select
                                options={PaymentOptions}
                                onChange={(e) => {
                                    setFormInputs((values) => ({ ...values, ['paymentMethod']: e.value }));
                                }}
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
                                        padding: '4px'
                                    }),
                                }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const CleanerBooking = () => {
    const [page, setPage] = useState(0);
    const [FormInputs, setFormInputs] = useState({
        frequency: "",
        selectedDate: "",
        no_of_hours: "",
        startTime: "",
        address: "",
        postCode: "",
        propertyType: "",
        voucher: "",
        voucherDiscount: 0,
        paymentMethod: "",
        skill: "Cleaner",
        totalCost: "",
    });
    const [availablePostCode, setAvailablePostCode] = useState();

    let { authTokens, user } = useContext(AuthContext);

    const notify = (message, type) => {
        if (type === "success") {
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    const getAllPostCodes = async () => {
        let response = await fetch('http://djangotest.hayame.my/api/get-all-postcodes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json();
        setAvailablePostCode(data);
        console.log(data);
    }

    const getCostOfBooking = async () => {
        if (FormInputs.frequency !== "" && FormInputs.selectedDate !== "" && FormInputs.no_of_hours !== "" && FormInputs.skill !== "" && FormInputs.postCode !== "") {
            let response = await fetch('http://djangotest.hayame.my/api/get-cleaner-booking_cost/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'frequency': FormInputs.frequency,
                    'start_date': FormInputs.selectedDate,
                    'no_of_hours': FormInputs.no_of_hours,
                    'postcode': FormInputs.postCode,
                    'skill': FormInputs.skill,
                    'voucher': FormInputs.voucher,
                })
            })
            let data = await response.json();
            setFormInputs((values) => ({ ...values, ['totalCost']: data['total_cost'] }));
            setFormInputs((values) => ({ ...values, ['voucherDiscount']: data['discount'] }));
        }
    }

    useEffect(() => {
        getAllPostCodes();
    }, [])

    useEffect(() => {
        getCostOfBooking();
    }, [FormInputs.frequency, FormInputs.selectedDate, FormInputs.no_of_hours, FormInputs.postCode, FormInputs.skill, FormInputs.voucher])

    const validateForm1 = () => {
        if (FormInputs.frequency === "") {
            notify("Please select the frequency", "error");
            return false;
        }
        if (FormInputs.selectedDate === "") {
            notify("Please select the start date", "error");
            return false;
        }
        if (FormInputs.no_of_hours === "") {
            notify("Please enter number of hours", "error");
            return false;
        }
        if (FormInputs.startTime === "") {
            notify("Please select the start time", "error");
            return false;
        }

        let startDate = new Date(FormInputs.selectedDate);
        let startHour = parseInt(FormInputs.startTime[0] + FormInputs.startTime[1]);
        let startTimeStamp = (startDate.getTime() + (startHour * 3600000) - 28800000); // minus 28800000 to convert localtime to utc
        let currentTimeStamp = Date.now();
        if ((startTimeStamp - currentTimeStamp) < 43200000) {
            notify("Cannot Book within 12 hours", "error");
            return false;
        }

        return true;
    }

    const validateForm2 = () => {
        if (FormInputs.address === "") {
            notify("Please fill the address", "error");
            return false;
        }
        if (FormInputs.postCode === "") {
            notify("Please enter the postcode", "error");
            return false;
        }
        if (FormInputs.propertyType === "") {
            notify("Please select the Property Type", "error");
            return false;
        }

        let selectedPostCode = parseInt(FormInputs.postCode);
        if (availablePostCode.includes(selectedPostCode) === false) {
            notify("Currently we do not provide Services at this Location", "error");
            return false;
        }
        return true;
    }

    const validateForm3 = () => {
        if (authTokens === null) {
            notify("Please login before booking", "error");
            return false;
        }
        if (FormInputs.paymentMethod === "") {
            notify("Please select a payment method", "error");
            return false;
        }
        return true;
    }

    const bookCleaner = async () => {
        let response = await fetch('http://djangotest.hayame.my/api/book-cleaner/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + authTokens,
            },
            body: JSON.stringify({
                'frequency': FormInputs.frequency,
                'start_date': FormInputs.selectedDate,
                'no_of_hours': FormInputs.no_of_hours,
                'start_time': FormInputs.startTime,
                'address': FormInputs.address,
                'postcode': FormInputs.postCode,
                'property_type': FormInputs.propertyType,
                'voucher': FormInputs.voucher,
                'payment_method': FormInputs.paymentMethod
            })
        })
        let data = await response.json();
        console.log(data);
        if(data['success']){
            notify(data['response'], "success");
        }
    }

    const ChangeForm = () => {

        if (page === 0) {
            if (validateForm1()) {
                setPage(1);
            }
        }
        else if (page == 1) {
            if (validateForm2()) {
                setPage(2);
            }
        }
        else {
            if (validateForm3()) {
                // call api to save booking
                bookCleaner();
                // redirect to booking history
            }
        }

    };

    return (
        <div>
            <Navbar />

            <div className="container my-5">
                <div className="row m-0">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 cleaner-booking-form-container">
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
                            {page === 0 ? (
                                <FormPart1 FormInputs={FormInputs} setFormInputs={setFormInputs} />
                            ) : page === 1 ? (
                                <FormPart2 FormInputs={FormInputs} setFormInputs={setFormInputs} />
                            ) : (
                                <FormPart3 FormInputs={FormInputs} setFormInputs={setFormInputs} />
                            )}
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-0 d-flex justify-content-center">
                        <input type="checkbox" id="booking-summary-active" />
                        <div className="row m-0 cleaner-booking-summary-card">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="cleaner-booking-h4">Booking Summary</h4>
                                <label for="booking-summary-active">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="40px"
                                        viewBox="0 -960 960 960"
                                        width="40px"
                                        fill="#5f6368"
                                    >
                                        <path d="M480-545.33 287.33-352.67 240-400l240-240 240 240-47.33 47.33L480-545.33Z" />
                                    </svg>
                                </label>
                            </div>

                            <div className="hide-desktop my-2">
                                <button className="cleaner-booking-form-btn" onClick={ChangeForm}>
                                    {page <= 1 ? "Next" : "Pay Now"}
                                </button>
                            </div>

                            <hr className="cleaner-booking-hr" />

                            <div className="d-flex justify-content-between py-1">
                                <div>Cleaning Frequency</div>
                                <div>{(FormInputs.frequency === "") ? "-" : (FormInputs.frequency === "one-time") ? "One-Time" : (FormInputs.frequency === "weekly") ? "Weekly" : "Fortnightly"}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>Starting Date</div>
                                <div>{(FormInputs.selectedDate === "") ? "-" : FormInputs.selectedDate}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>Start Time</div>
                                <div>{(FormInputs.startTime === "") ? "-" : FormInputs.startTime}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>Hours per session</div>
                                <div>{(FormInputs.no_of_hours === "") ? "-" : FormInputs.no_of_hours + " hours"}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>No. of sessions</div>
                                <div>{(FormInputs.frequency === "") ? "-" : (FormInputs.frequency === "one-time") ? "1" : "4"}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>Property Type</div>
                                <div>{(FormInputs.propertyType === "") ? "-" : FormInputs.propertyType}</div>
                            </div>

                            {FormInputs.voucherDiscount !== 0 ? (
                                <div>
                                    <hr className="cleaner-booking-hr" />

                                    <div className="d-flex justify-content-between py-1">
                                        <div>Applied Voucher</div>
                                        <div>HAY956</div>
                                    </div>
                                    <div className="d-flex justify-content-between py-1">
                                        <div>Voucher Discount</div>
                                        <div>17 %</div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}


                            <hr className="cleaner-booking-hr" />

                            <div className="d-flex justify-content-between">
                                <div>Total</div>
                                <div>{(FormInputs.totalCost === "") ? "-" : "RM " + FormInputs.totalCost}</div>
                            </div>

                            <hr className="cleaner-booking-hr" />

                            <div className="hide-mobile">
                                <button className="cleaner-booking-form-btn" onClick={ChangeForm}>
                                    {page <= 1 ? "Next" : "Pay Now"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
};

export default CleanerBooking;

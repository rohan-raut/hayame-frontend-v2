import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./taskErrandsBooking.css";
import DatePicker from "../../../components/DatePicker/DatePicker";
import Select from "react-select";
import UserLoginSignUp from "../../../components/UserLoginSignUp/UserLoginSignUp";
import AuthContext from '../../../context/AuthContext';
import Footer from "../../../components/Footer/Footer";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import SocialMediaIcons from "../../../components/SocialMediaIcons/SocialMediaIcons";
import FormPart1 from "./FormPart1";
import FormPart2 from "./FormPart2";
import FormPart3 from "./FormPart3";


const TaskErrandsBooking = () => {
    let { authTokens, user } = useContext(AuthContext);
    const [page, setPage] = useState(0);
    const [FormInputs, setFormInputs] = useState({
        frequency: "",
        selectedDate: "",
        no_of_hours: "",
        startTime: "",
        startTimeLabel: "",
        address: "",
        postCode: "",
        propertyType: "",
        propertyTypeLabel: "",
        voucher: "",
        voucherDiscount: 0,
        paymentMethod: "",
        paymentMethodLabel: "",
        skill: "Task Errands",
        totalCost: "",
        phone: "",
    });
    const [availablePostCode, setAvailablePostCode] = useState();

    const location = useLocation();
    const navigate = useNavigate();

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
        let response = await fetch('https://djangotest.hayame.my/api/get-all-postcodes/', {
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
            let response = await fetch('https://djangotest.hayame.my/api/get-cleaner-booking_cost/', {
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
        console.log(location.state);
        if (location.state === null) {
            navigate('/book');
        }
        else {
            setFormInputs((values) => ({ ...values, ['postCode']: location.state.postcode }));
        }
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

    const bookTaskErrands = async () => {
        let response = await fetch('https://djangotest.hayame.my/api/book-cleaner/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens,
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
                'payment_method': FormInputs.paymentMethod,
                'phone': FormInputs.phone,
            })
        })
        let data = await response.json();
        console.log(data);
        if (data['success']) {
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
                bookTaskErrands();
                // redirect to booking history
            }
        }

    };

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
        else{
            navigate('/book');
        }
    }

    return (
        <div>
            <Navbar />

            <div className="container my-5">
                <div className="row m-0">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 booking-form-container">
                        <div className="mb-4 back-button-div" onClick={prevPage}>
                            <svg width="26px" height="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" fill="#58BBA6" /></svg>
                        </div>
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
                        <div className="row m-0 justify-content-end">
                            <button className="booking-form-btn" onClick={ChangeForm}>
                                {page <= 1 ? "Next" : "Pay Now"}
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 p-0 d-flex justify-content-center">
                        <input type="checkbox" id="booking-summary-active" />
                        <div className="row m-0 booking-summary-card">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="booking-h4">Booking Summary</h4>
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

                            <hr className="booking-hr" />

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
                                    <hr className="booking-hr" />

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


                            <hr className="booking-hr" />

                            <div className="d-flex justify-content-between">
                                <div>Total</div>
                                <div>{(FormInputs.totalCost === "") ? "-" : "RM " + FormInputs.totalCost}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <SocialMediaIcons />

        </div>
    );
};

export default TaskErrandsBooking;

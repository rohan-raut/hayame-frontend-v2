import React, { useEffect, useState, useContext } from "react";
import DatePicker from "../../../components/DatePicker/DatePicker";
import Select from "react-select";

const FormPart1 = ({ FormInputs, setFormInputs }) => {
    const date = new Date();
    // const formatter = new
    const [startTimeOptions, setStartTimeOptions] = useState();

    const [oneTimePrice, setOneTimePrice] = useState({
        'discount_perc': 0,
        'amount': 0
    });
    const [weeklyPrice, setWeeklyPrice] = useState({
        'discount_perc': 0,
        'amount': 0
    });
    const [fortnightlyPrice, setFortnightlyPrice] = useState({
        'discount_perc': 0,
        'amount': 0
    });

    const squareFeetOptions = [
        { 'label': '500 sq. feets', value: 500 },
        { 'label': '1000 sq. feets', value: 1000 },
        { 'label': '1500 sq. feets', value: 1500 },
    ]


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };


    const getPricesByFreq = async () => {
        let response = await fetch('https://djangotest.hayame.my/api/get-frequency-discount-by-skill/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'skill': 'Gardener',
                'post_code': FormInputs.postCode
            })
        })
        let data = await response.json()
        for (let i = 0; i < data.length; i++) {
            let priceDetails = {
                'amount': data[i]['worker_cost_normal_day'],
                'discount_perc': data[i]['discount_perc'] * 100
            }

            console.log(priceDetails);

            if (data[i]['frequency'] === 'one-time') {
                setOneTimePrice(priceDetails);
            }
            else if (data[i]['frequency'] === 'weekly') {
                setWeeklyPrice(priceDetails);
            }
            else if (data[i]['frequency'] === 'fortnightly') {
                setFortnightlyPrice(priceDetails);
            }
        }
    }


    useEffect(() => {
        if (FormInputs.postCode !== '') {
            getPricesByFreq();
        }
    }, [FormInputs.postCode])

    useEffect(() => {
        if (FormInputs.frequency !== "") {
            let element = document.getElementById('book-gardener-date-section');
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [FormInputs.frequency]);

    useEffect(() => {
        if (FormInputs.selectedDate !== "") {
            let element = document.getElementById('book-gardener-worker-count-section');
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [FormInputs.selectedDate]);

    useEffect(() => {
        if (FormInputs.no_of_hours !== "") {
            let element = document.getElementById('book-gardener-start-time-section');
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [FormInputs.no_of_hours]);


    const getAvailableSlots = async () => {
        if (FormInputs.postCode !== '' && FormInputs.selectedDate !== '' && FormInputs.workerCount != 0 && FormInputs.no_of_hours != "") {
            let response = await fetch('https://djangotest.hayame.my/api/get-available-slots/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'post_code': FormInputs.postCode,
                    'skill': FormInputs.skill,
                    'start_date': FormInputs.selectedDate,
                    'no_of_hours': FormInputs.no_of_hours,
                    'worker_count': FormInputs.workerCount
                })
            })
            let data = await response.json()
            setStartTimeOptions(data);
        }
    }

    useEffect(() => {
        getAvailableSlots();
    }, [FormInputs.selectedDate, FormInputs.no_of_hours, FormInputs.workerCount])

    return (
        <div>
            {/* Frequency buttons */}
            <div className="row form-section-row">
                <div className="form-label-bold">
                    How frequently would you like the gardening service?
                </div>
                <div class="booking-freq-radio-buttons">
                    <label
                        class="booking-freq-custom-radio"
                    >
                        <input
                            type="radio"
                            name="frequency"
                            value="one-time"
                            onChange={handleChange}
                            defaultChecked={FormInputs.frequency === "one-time"}
                        />
                        <span class="booking-freq-radio-btn">
                            <i class="las la-check">✔</i>
                            <div class="booking-freq-inner-card">
                                <h3 class="booking-h3">One-Time</h3>
                                <div className="booking-freq-price-discount color-transparent">
                                    Save {oneTimePrice.discount_perc}%
                                </div>
                                <div className="booking-freq-price">
                                    RM <span classname="booking-highlight-text">{oneTimePrice.amount}</span>{" "}
                                    /hr
                                </div>
                                <div className="booking-freq-list">
                                    <div>✓ Basic Gardening</div>
                                    <div></div>
                                </div>
                                <div className="booking-freq-btn">Select</div>
                            </div>
                        </span>
                    </label>
                    <label
                        class="booking-freq-custom-radio"
                    >
                        <input type="radio" name="frequency" value="weekly" onChange={handleChange} defaultChecked={FormInputs.frequency === "weekly"} />
                        <span class="booking-freq-radio-btn">
                            <i class="las la-check">✔</i>
                            <div class="booking-freq-inner-card">
                                <h3 class="booking-h3">Weekly</h3>
                                <div className="booking-freq-price-discount">
                                    Save {weeklyPrice.discount_perc}%
                                </div>
                                <div className="booking-freq-price">
                                    RM <span classname="booking-highlight-text">{weeklyPrice.amount}</span>{" "}
                                    /hr
                                </div>
                                <div className="booking-freq-list">
                                    <div>✓ Save time to book</div>
                                    <div>✓ Same Gardener</div>
                                </div>
                                <div className="booking-freq-btn">Select</div>
                            </div>
                        </span>
                    </label>
                    <label
                        class="booking-freq-custom-radio"
                    >
                        <input type="radio" name="frequency" value="fortnightly" onChange={handleChange} defaultChecked={FormInputs.frequency === "fortnightly"} />
                        <span class="booking-freq-radio-btn">
                            <i class="las la-check">✔</i>
                            <div class="booking-freq-inner-card">
                                <h3 class="booking-h3">Fortnightly</h3>
                                <div className="booking-freq-price-discount">
                                    Save {fortnightlyPrice.discount_perc}%
                                </div>
                                <div className="booking-freq-price">
                                    RM <span classname="booking-highlight-text">{fortnightlyPrice.amount}</span>{" "}
                                    /hr
                                </div>
                                <div className="booking-freq-list">
                                    <div>✓ Save time to book</div>
                                    <div>✓ Same Gardener</div>
                                </div>
                                <div className="booking-freq-btn">Select</div>
                            </div>
                        </span>
                    </label>
                </div>
            </div>

            {/* Calendar */}
            <div className="row form-section-row" id="book-gardener-date-section">
                <div className="form-label-bold">Select the Start Date</div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-10 p-0">
                    <DatePicker FormInputs={FormInputs} setFormInputs={setFormInputs} />
                </div>
            </div>

            <div className="row form-section-row" id="book-gardener-date-section">
                <div className="form-label-bold">Select the garden size</div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-0">
                    <Select
                        options={squareFeetOptions}
                        onChange={(e) => {
                            setFormInputs((values) => ({ ...values, ['squareFeet']: e.value }));
                            setFormInputs((values) => ({ ...values, ['squareFeetLabel']: e.label }));
                        }}
                        defaultValue={{ label: FormInputs.squareFeetLabel, value: FormInputs.squareFeet }}
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

            <div className="row form-section-row" id="book-gardener-worker-count-section">
                <div className="form-label-bold">Number of Gardeners</div>
                <div className="col-6 p-0">
                    <input type="number" className="input-field" name="workerCount" onChange={handleChange} required />
                </div>
            </div>

            {/* No. of Hours */}
            <div className="row form-section-row">
                <div className="form-label-bold">
                    How many hours would you like the service?
                </div>
                <div className="booking-no-of-hours-container px-0">
                    <div>
                        <label className="booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="2"
                                onChange={handleChange}
                                defaultChecked={FormInputs.no_of_hours === "2"}
                            />
                            <span className="booking-no-of-hours-btn">2 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="3"
                                onChange={handleChange}
                                defaultChecked={FormInputs.no_of_hours === "3"}
                            />
                            <span className="booking-no-of-hours-btn">3 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="4"
                                onChange={handleChange}
                                defaultChecked={FormInputs.no_of_hours === "4"}
                            />
                            <span className="booking-no-of-hours-btn">4 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="5"
                                onChange={handleChange}
                                defaultChecked={FormInputs.no_of_hours === "5"}
                            />
                            <span className="booking-no-of-hours-btn">5 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="6"
                                onChange={handleChange}
                                defaultChecked={FormInputs.no_of_hours === "6"}
                            />
                            <span className="booking-no-of-hours-btn">6 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="7"
                                onChange={handleChange}
                                defaultChecked={FormInputs.no_of_hours === "7"}
                            />
                            <span className="booking-no-of-hours-btn">7 hours</span>
                        </label>
                    </div>
                    <div>
                        <label className="booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="no_of_hours"
                                value="8"
                                onChange={handleChange}
                                defaultChecked={FormInputs.no_of_hours === "8"}
                            />
                            <span className="booking-no-of-hours-btn">8 hours</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* {Start time section} */}

            <div className="row form-section-row" id="book-gardener-start-time-section">
                <div className="form-label-bold">Enter your start time here</div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 m-0 p-0">
                    <Select
                        onChange={(e) => {
                            setFormInputs((values) => ({ ...values, ['startTime']: e.value }));
                            setFormInputs((values) => ({ ...values, ['startTimeLabel']: e.label }));
                        }}
                        options={startTimeOptions}
                        defaultValue={{ label: FormInputs.startTimeLabel, value: FormInputs.startTime }}
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

export default FormPart1;
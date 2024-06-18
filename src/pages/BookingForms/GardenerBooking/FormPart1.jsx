import React, { useEffect, useState, useContext } from "react";
import DatePicker from "../../../components/DatePicker/DatePicker";
import Select from "react-select";

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

    const squareFeetOptions = [
        {value: '1000 sq. feet', label: '1000 sq. feet'},
        {value: '1500 sq. feet', label: '1500 sq. feet'},
        {value: '2000 sq. feet', label: '2000 sq. feet'}
    ]


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
                                    Save 0%
                                </div>
                                <div className="booking-freq-price">
                                    RM <span classname="booking-highlight-text">30</span>{" "}
                                    /hr
                                </div>
                                <div className="booking-freq-list">
                                    <div>✓ Basic Cleaning</div>
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
                                    Save 17%
                                </div>
                                <div className="booking-freq-price">
                                    RM <span classname="booking-highlight-text">25</span>{" "}
                                    /hr
                                </div>
                                <div className="booking-freq-list">
                                    <div>✓ Save time to book</div>
                                    <div>✓ Same cleaner</div>
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
                                    Save 20%
                                </div>
                                <div className="booking-freq-price">
                                    RM <span classname="booking-highlight-text">20</span>{" "}
                                    /hr
                                </div>
                                <div className="booking-freq-list">
                                    <div>✓ Save time to book</div>
                                    <div>✓ Same cleaner</div>
                                </div>
                                <div className="booking-freq-btn">Select</div>
                            </div>
                        </span>
                    </label>
                </div>
            </div>

            {/* Square feet option */}
            <div className="row form-section-row">
                <div className="form-label-bold">Select garden size</div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 m-0 p-0">
                    <Select
                        onChange={(e) => {
                            setFormInputs((values) => ({ ...values, ['squareFeet']: e.value }));
                        }}
                        options={squareFeetOptions}
                        defaultValue={{ label: FormInputs.squareFeet, value: FormInputs.squareFeet }}
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

            <div className="row form-section-row">
                <div className="form-label-bold">Enter your start time here</div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 m-0 p-0">
                    <Select
                        onChange={(e) => {
                            setFormInputs((values) => ({ ...values, ['startTime']: e.value }));
                            setFormInputs((values) => ({ ...values, ['startTimeLabel']: e.label }));
                        }}
                        options={options}
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
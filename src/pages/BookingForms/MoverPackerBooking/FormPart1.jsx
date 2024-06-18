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


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };

    return (
        <div>
            <div className="row form-section-row">
                <div className="form-label-bold">Estimated number of boxes to pack</div>
                <div className="col-6 p-0">
                    <input type="number" className="input-field" name="no_of_boxes" onChange={handleChange} required />
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
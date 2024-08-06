import React, { useEffect, useState, useContext } from "react";
import DatePicker from "../../../components/DatePicker/DatePicker";
import Select from "react-select";

const FormPart1 = ({ FormInputs, setFormInputs }) => {
    const date = new Date();
    // const formatter = new
    const [startTimeOptions, setStartTimeOptions] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };


    useEffect(() => {
        if (FormInputs.selectedDate !== "") {
            let element = document.getElementById('book-movers-packers-worker-count-section');
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [FormInputs.selectedDate]);

    useEffect(() => {
        if (FormInputs.no_of_hours !== "") {
            let element = document.getElementById('book-movers-packers-start-time-section');
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [FormInputs.no_of_hours]);

    const handleWorkerCount = (event) => {
        let name = event.target.name;
        let value = parseInt(event.target.value);
        if(value < 1){
            value = 1;
        }
        else if(value > 5){
            value = 5;
        }
        if(value === "NaN"){
            value = 1;
            console.log("yoyo");
        }
        setFormInputs((values) => ({ ...values, [name]: value }));
    }


    const getAvailableSlots = async () => {
        if (FormInputs.postCode !== '' && FormInputs.selectedDate !== '' && FormInputs.workerCount != 0 && FormInputs.no_of_hours != "") {
            let response = await fetch('https://django.hayame.my/api/get-available-slots/', {
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
    }, [FormInputs.postCode, FormInputs.selectedDate, FormInputs.no_of_hours, FormInputs.workerCount])

    return (
        <div>

            {/* No of Boxes to Pack */}
            <div className="row form-section-row">
                <div className="form-label-bold">Estimate number of boxes to pack</div>
                <div className="col-6 p-0">
                    <input type="number" className="input-field" name="noOfBoxes" onChange={handleChange} defaultValue={FormInputs.noOfBoxes} required />
                </div>
            </div>

            {/* Calendar */}
            <div className="row form-section-row" id="book-movers-packers-date-section">
                <div className="form-label-bold">Select the Start Date</div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-10 p-0">
                    <DatePicker FormInputs={FormInputs} setFormInputs={setFormInputs} />
                </div>
            </div>

            <div className="row form-section-row" id="book-movers-packers-worker-count-section">
                <div className="form-label-bold">Number of Workers</div>
                <div className="col-6 p-0">
                    <input type="number" className="input-field" name="workerCount" onChange={handleWorkerCount} defaultValue={FormInputs.workerCount} required />
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

            <div className="row form-section-row">
                <div className="form-label-bold">
                    Does the apartment have lift?
                </div>
                <div className="booking-no-of-hours-container px-0">
                    <div>
                        <label className="booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="hasLift"
                                value="True"
                                onChange={handleChange}
                                defaultChecked={FormInputs.hasLift === "True"}
                            />
                            <span className="booking-no-of-hours-btn">Yes</span>
                        </label>
                    </div>
                    <div>
                        <label className="booking-no-of-hours-radio">
                            <input
                                type="radio"
                                name="hasLift"
                                value="False"
                                onChange={handleChange}
                                defaultChecked={FormInputs.hasLift === "False"}
                            />
                            <span className="booking-no-of-hours-btn">No</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* No of Floors */}
            <div className="row form-section-row">
                <div className="form-label-bold">Number of your Floor</div>
                <div className="col-6 p-0">
                    <input type="number" className="input-field" name="floors" onChange={handleChange} defaultValue={FormInputs.floors} required />
                </div>
            </div>

            {/* {Start time section} */}
            <div className="row form-section-row" id="book-movers-packers-start-time-section">
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
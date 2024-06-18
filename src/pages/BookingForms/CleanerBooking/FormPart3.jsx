import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";
import SocialMediaIcons from "../../../components/SocialMediaIcons/SocialMediaIcons";
import UserLoginSignUp from "../../../components/UserLoginSignUp/UserLoginSignUp";
import AuthContext from '../../../context/AuthContext';

const FormPart3 = ({ FormInputs, setFormInputs }) => {
    let { authTokens, user } = useContext(AuthContext);

    const PaymentOptions = [
        { value: "Online", label: "Online" },
        { value: "Cash", label: "Cash" },
    ];

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };

    const subtractHalfHour = () => {
        let hours = FormInputs.addonHours - 0.5;
        if(hours === 0){
            hours = 0.5;
        }
        setFormInputs((values) => ({ ...values, ['addonHours']: hours }));
    }

    const addHalfHour = () => {
        let hours = FormInputs.addonHours + 0.5;
        setFormInputs((values) => ({ ...values, ['addonHours']: hours }));
        console.log(FormInputs);
    }


    return (
        <div>
            {(authTokens === null) ? <UserLoginSignUp /> : ""}

            <div>
                <form>
                    <div className="row form-section-row">
                        <div className="form-label-bold">Addon Services</div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 m-0 p-0">
                            <label className="booking-no-of-hours-radio">
                                <input
                                    type="checkbox"
                                    name="addon"
                                    value="Laundry"
                                    onChange={(e) => {
                                        if(FormInputs.addon === ""){
                                            setFormInputs((values) => ({ ...values, ['addon']: 'Laundry' }));
                                            setFormInputs((values) => ({ ...values, ['addonHours']: 0.5 }));
                                        }
                                        else{
                                            setFormInputs((values) => ({ ...values, ['addon']: '' }));
                                            setFormInputs((values) => ({ ...values, ['addonHours']: 0 }));
                                        }
                                    }}
                                    defaultChecked={FormInputs.addon !== ""}
                                />
                                <span className="booking-no-of-hours-btn">Laundry</span>
                            </label>
                        </div>
                        {(FormInputs.addon !== "") ? (
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <button type="button" className="mx-1 booking-form-secondnary-btn" onClick={subtractHalfHour}>-</button>
                            <input type="text" className="input-field-flexible" value={FormInputs.addonHours} readOnly />
                            <button type="button" className="mx-1 booking-form-secondnary-btn" onClick={addHalfHour}>+</button>
                        </div>) : ""}
                    </div>


                    <div className="row form-section-row justify-content-between">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 m-0 p-0">
                            <div className="form-label-bold">Apply Voucher</div>
                            <input
                                type="text"
                                className="input-field"
                                name="voucher"
                                onChange={handleChange}
                                defaultValue={FormInputs.voucher}
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 m-0 p-0">
                            <div className="form-label-bold">Payment Method</div>
                            <Select
                                options={PaymentOptions}
                                onChange={(e) => {
                                    setFormInputs((values) => ({ ...values, ['paymentMethod']: e.value }));
                                    setFormInputs((values) => ({ ...values, ['paymentMethodLabel']: e.label }));
                                }}
                                defaultValue={{ label: FormInputs.paymentMethodLabel, value: FormInputs.paymentMethod }}
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


                    <div className="row form-section-row justify-content-between">
                        {(user && user['phone'] === null) ? (
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 m-0 p-0">
                                <div className="form-label-bold">Phone</div>
                                <input
                                    type="text"
                                    className="input-field"
                                    name="phone"
                                    onChange={handleChange}
                                />
                            </div>
                        ) : ("")}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default FormPart3;
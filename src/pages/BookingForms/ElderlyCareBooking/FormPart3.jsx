import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";
import SocialMediaIcons from "../../../components/SocialMediaIcons/SocialMediaIcons";
import UserLoginSignUp from "../../../components/UserLoginSignUp/UserLoginSignUp";
import AuthContext from '../../../context/AuthContext';

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

    useEffect(() => {
        console.log(user);
    }, [user])

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
                                    defaultValue={FormInputs.voucher}
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

                        {(user && user['phone'] === null) ? (
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                <div class="mb-4">
                                    <label class="form-label">Phone</label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        name="phone"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ) : ("")}


                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPart3;
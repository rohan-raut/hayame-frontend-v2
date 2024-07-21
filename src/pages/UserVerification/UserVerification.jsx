import React, { useEffect, userEffect, useState } from 'react'

const UserVerification = () => {
    const [message, setMessage] = useState("Hello");
    const [success, setSuccess] = useState("");

    useEffect(() => {

        verifyUser();

    }, []);


    const verifyUser = async () => {
        let paramString = (window.location.search).split('?')[1];
        let queryString = new URLSearchParams(paramString);
        let user = ""
        for (let pair of queryString.entries()) {
            user = pair[1]
        }

        let api = "https://django.hayame.my/api/verify-user/" + user;

        let response = await fetch(api, {
            method: 'GET',
        });

        let data = await response.json()

        setSuccess(data['success']);
        setMessage(data['response']);
    }

    return (
    <div>{message}</div>
  )
}

export default UserVerification
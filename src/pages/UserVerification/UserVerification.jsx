import React, { useEffect, userEffect, useState } from 'react'

const UserVerification = () => {
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(async () => {
        let paramString = (window.location.search).split('?')[1];
        let queryString = new URLSearchParams(paramString);
        let user = ""
        for (let pair of queryString.entries()) {
            user = pair[1]
        }

        let api = "http://127.0.0.1:8000/api/verify-user/" + user;

        let response = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'GET',
        });

        let data = await response.json()

        setSuccess(data['success']);
        setMessage(data['response']);

    }, [])

    return (
    <div>{message}</div>
  )
}

export default UserVerification
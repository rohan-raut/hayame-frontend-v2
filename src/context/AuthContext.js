import React, { createContext, useState, useEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({ children }) => {
    const cookies = new Cookies();
    let [authTokens, setAuthTokens] = useState(() => cookies.get('authToken') ? (cookies.get('authToken')) : null)
    let [user, setUser] = useState(() => cookies.get('authToken') ? jwtDecode(cookies.get('authToken')) : null)
    let [loading, setLoading] = useState(true)

    const history = useNavigate();

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('https://djangotest.hayame.my/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': e.target.username.value,
                'password': e.target.password.value
            })
        })
        let data = await response.json()

        if(data.success == true){
            let decoded_token = jwtDecode(data.access_token);
            let expiry_time = new Date(decoded_token.exp).toUTCString()
            cookies.set("authToken", data.access_token, {
                expires: new Date(decoded_token.exp * 1000),
            });
            setAuthTokens(data.access_token);
            // document.cookie = 'access_token=' + data.access_token + ';expires=' + expiry_time + ';path=/';
            localStorage.setItem("first_name", "Smith");
            localStorage.setItem("last_name", "Smith");
            localStorage.setItem("email", "Smith");
        }

        return data;
    }

    const googleSignIn = async(tokenResponse) => {
        let response = await fetch('https://djangotest.hayame.my/api/google-signin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': tokenResponse['data'].email
            })
        })
        let data = await response.json();

        if(data.success == true){
            let decoded_token = jwtDecode(data.access_token);
            let expiry_time = new Date(decoded_token.exp).toUTCString()
            cookies.set("authToken", data.access_token, {
                expires: new Date(decoded_token.exp * 1000),
            });
            // document.cookie = 'access_token=' + data.access_token + ';expires=' + expiry_time + ';path=/';
            localStorage.setItem("first_name", "Smith");
            localStorage.setItem("last_name", "Smith");
            localStorage.setItem("email", "Smith");
        }

        return data;
    }





    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        localStorage.removeItem("email");
        cookies.remove("authToken");
        history.push('/login')
    }


    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        googleSignIn: googleSignIn,
    }



    return (
        <AuthContext.Provider value={contextData} >
            {/* {loading ? null : children} */}
            {children}
        </AuthContext.Provider>
    )
}
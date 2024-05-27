import React, { useState, useContext } from "react";
import "./UserLoginSignUp.css";

import Select from "react-select";

import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import AuthContext from '../../context/AuthContext';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

const UserLoginSignUp = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  let { loginUser, googleSignIn } = useContext(AuthContext);

  const [countryCode, setCountryCode] = useState("+60");
  const [registerInputs, setRegisterInputs] = useState({});
  const options = [
    { value: "+60", label: "+60" },
    { value: "+7 840", label: "+7 840" },
    { value: "+93", label: "+93" },
    { value: "+355", label: "+355" },
    { value: "+213", label: "+213" },
    { value: "+1 684", label: "+1 684" },
    { value: "+376", label: "+376" },
    { value: "+244", label: "+244" },
    { value: "+1 264", label: "+1 264" },
    { value: "+1 268", label: "+1 268" },
    { value: "+54", label: "+54" },
    { value: "+374", label: "+374" },
    { value: "+297", label: "+297" },
    { value: "+247", label: "+247" },
    { value: "+61", label: "+61" },
    { value: "+672", label: "+672" },
    { value: "+43", label: "+43" },
    { value: "+994", label: "+994" },
    { value: "+1 242", label: "+1 242" },
    { value: "+973", label: "+973" },
    { value: "+880", label: "+880" },
    { value: "+1 246", label: "+1 246" },
    { value: "+1 268", label: "+1 268" },
    { value: "+375", label: "+375" },
    { value: "+32", label: "+32" },
    { value: "+501", label: "+501" },
    { value: "+229", label: "+229" },
    { value: "+1 441", label: "+1 441" },
    { value: "+975", label: "+975" },
    { value: "+591", label: "+591" },
    { value: "+387", label: "+387" },
    { value: "+267", label: "+267" },
    { value: "+55", label: "+55" },
    { value: "+246", label: "+246" },
    { value: "+1 284", label: "+1 284" },
    { value: "+673", label: "+673" },
    { value: "+359", label: "+359" },
    { value: "+226", label: "+226" },
    { value: "+257", label: "+257" },
    { value: "+855", label: "+855" },
    { value: "+237", label: "+237" },
    { value: "+1", label: "+1" },
    { value: "+238", label: "+238" },
    { value: "+ 345", label: "+ 345" },
    { value: "+236", label: "+236" },
    { value: "+235", label: "+235" },
    { value: "+56", label: "+56" },
    { value: "+86", label: "+86" },
    { value: "+61", label: "+61" },
    { value: "+61", label: "+61" },
    { value: "+57", label: "+57" },
    { value: "+269", label: "+269" },
    { value: "+242", label: "+242" },
    { value: "+243", label: "+243" },
    { value: "+682", label: "+682" },
    { value: "+506", label: "+506" },
    { value: "+385", label: "+385" },
    { value: "+53", label: "+53" },
    { value: "+599", label: "+599" },
    { value: "+537", label: "+537" },
    { value: "+420", label: "+420" },
    { value: "+45", label: "+45" },
    { value: "+246", label: "+246" },
    { value: "+253", label: "+253" },
    { value: "+1 767", label: "+1 767" },
    { value: "+1 809", label: "+1 809" },
    { value: "+670", label: "+670" },
    { value: "+56", label: "+56" },
    { value: "+593", label: "+593" },
    { value: "+20", label: "+20" },
    { value: "+503", label: "+503" },
    { value: "+240", label: "+240" },
    { value: "+291", label: "+291" },
    { value: "+372", label: "+372" },
    { value: "+251", label: "+251" },
    { value: "+500", label: "+500" },
    { value: "+298", label: "+298" },
    { value: "+679", label: "+679" },
    { value: "+358", label: "+358" },
    { value: "+33", label: "+33" },
    { value: "+596", label: "+596" },
    { value: "+594", label: "+594" },
    { value: "+689", label: "+689" },
    { value: "+241", label: "+241" },
    { value: "+220", label: "+220" },
    { value: "+995", label: "+995" },
    { value: "+49", label: "+49" },
    { value: "+233", label: "+233" },
    { value: "+350", label: "+350" },
    { value: "+30", label: "+30" },
    { value: "+299", label: "+299" },
    { value: "+1 473", label: "+1 473" },
    { value: "+590", label: "+590" },
    { value: "+1 671", label: "+1 671" },
    { value: "+502", label: "+502" },
    { value: "+224", label: "+224" },
    { value: "+245", label: "+245" },
    { value: "+595", label: "+595" },
    { value: "+509", label: "+509" },
    { value: "+504", label: "+504" },
    { value: "+852", label: "+852" },
    { value: "+36", label: "+36" },
    { value: "+354", label: "+354" },
    { value: "+91", label: "+91" },
    { value: "+62", label: "+62" },
    { value: "+98", label: "+98" },
    { value: "+964", label: "+964" },
    { value: "+353", label: "+353" },
    { value: "+972", label: "+972" },
    { value: "+39", label: "+39" },
    { value: "+225", label: "+225" },
    { value: "+1 876", label: "+1 876" },
    { value: "+81", label: "+81" },
    { value: "+962", label: "+962" },
    { value: "+7 7", label: "+7 7" },
    { value: "+254", label: "+254" },
    { value: "+686", label: "+686" },
    { value: "+965", label: "+965" },
    { value: "+996", label: "+996" },
    { value: "+856", label: "+856" },
    { value: "+371", label: "+371" },
    { value: "+961", label: "+961" },
    { value: "+266", label: "+266" },
    { value: "+231", label: "+231" },
    { value: "+218", label: "+218" },
    { value: "+423", label: "+423" },
    { value: "+370", label: "+370" },
    { value: "+352", label: "+352" },
    { value: "+853", label: "+853" },
    { value: "+389", label: "+389" },
    { value: "+261", label: "+261" },
    { value: "+265", label: "+265" },
    { value: "+960", label: "+960" },
    { value: "+223", label: "+223" },
    { value: "+356", label: "+356" },
    { value: "+692", label: "+692" },
    { value: "+596", label: "+596" },
    { value: "+222", label: "+222" },
    { value: "+230", label: "+230" },
    { value: "+262", label: "+262" },
    { value: "+52", label: "+52" },
    { value: "+691", label: "+691" },
    { value: "+1 808", label: "+1 808" },
    { value: "+373", label: "+373" },
    { value: "+377", label: "+377" },
    { value: "+976", label: "+976" },
    { value: "+382", label: "+382" },
    { value: "+1664", label: "+1664" },
    { value: "+212", label: "+212" },
    { value: "+95", label: "+95" },
    { value: "+264", label: "+264" },
    { value: "+674", label: "+674" },
    { value: "+977", label: "+977" },
    { value: "+31", label: "+31" },
    { value: "+599", label: "+599" },
    { value: "+1 869", label: "+1 869" },
    { value: "+687", label: "+687" },
    { value: "+64", label: "+64" },
    { value: "+505", label: "+505" },
    { value: "+227", label: "+227" },
    { value: "+234", label: "+234" },
    { value: "+683", label: "+683" },
    { value: "+672", label: "+672" },
    { value: "+850", label: "+850" },
    { value: "+1 670", label: "+1 670" },
    { value: "+47", label: "+47" },
    { value: "+968", label: "+968" },
    { value: "+92", label: "+92" },
    { value: "+680", label: "+680" },
    { value: "+970", label: "+970" },
    { value: "+507", label: "+507" },
    { value: "+675", label: "+675" },
    { value: "+595", label: "+595" },
    { value: "+51", label: "+51" },
    { value: "+63", label: "+63" },
    { value: "+48", label: "+48" },
    { value: "+351", label: "+351" },
    { value: "+1 787", label: "+1 787" },
    { value: "+974", label: "+974" },
    { value: "+262", label: "+262" },
    { value: "+40", label: "+40" },
    { value: "+7", label: "+7" },
    { value: "+250", label: "+250" },
    { value: "+685", label: "+685" },
    { value: "+378", label: "+378" },
    { value: "+966", label: "+966" },
    { value: "+221", label: "+221" },
    { value: "+381", label: "+381" },
    { value: "+248", label: "+248" },
    { value: "+232", label: "+232" },
    { value: "+65", label: "+65" },
    { value: "+421", label: "+421" },
    { value: "+386", label: "+386" },
    { value: "+677", label: "+677" },
    { value: "+27", label: "+27" },
    { value: "+500", label: "+500" },
    { value: "+82", label: "+82" },
    { value: "+34", label: "+34" },
    { value: "+94", label: "+94" },
    { value: "+249", label: "+249" },
    { value: "+597", label: "+597" },
    { value: "+268", label: "+268" },
    { value: "+46", label: "+46" },
    { value: "+41", label: "+41" },
    { value: "+963", label: "+963" },
    { value: "+886", label: "+886" },
    { value: "+992", label: "+992" },
    { value: "+255", label: "+255" },
    { value: "+66", label: "+66" },
    { value: "+670", label: "+670" },
    { value: "+228", label: "+228" },
    { value: "+690", label: "+690" },
    { value: "+676", label: "+676" },
    { value: "+1 868", label: "+1 868" },
    { value: "+216", label: "+216" },
    { value: "+90", label: "+90" },
    { value: "+993", label: "+993" },
    { value: "+1 649", label: "+1 649" },
    { value: "+688", label: "+688" },
    { value: "+1 340", label: "+1 340" },
    { value: "+256", label: "+256" },
    { value: "+380", label: "+380" },
    { value: "+971", label: "+971" },
    { value: "+44", label: "+44" },
    { value: "+1", label: "+1" },
    { value: "+598", label: "+598" },
    { value: "+998", label: "+998" },
    { value: "+678", label: "+678" },
    { value: "+58", label: "+58" },
    { value: "+84", label: "+84" },
    { value: "+1 808", label: "+1 808" },
    { value: "+681", label: "+681" },
    { value: "+967", label: "+967" },
    { value: "+260", label: "+260" },
    { value: "+255", label: "+255" },
    { value: "+263", label: "+263" },
  ];


  const onLoginStart = () => {
    alert('login start');
  };

  const onLogoutSuccess = () => {
    alert('logout success');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let data = await loginUser(e);
    console.log(data);

    if (data['success']) {
      toast.success(data['response'], {
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
      toast.error(data['response'], {
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

  const handleGoogleSignIn = async (response) => {
    let data = await googleSignIn(response);
    if (data['success']) {
      toast.success(data['response'], {
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
      toast.error(data['response'], {
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


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegisterInputs((values) => ({ ...values, [name]: value }));
  };


  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  const verifyForm = () => {
    let fullname = registerInputs.fullname.split(' ');
    console.log(fullname)
    if (fullname.length <= 1) {
      toast.error("Please enter your fullname", {
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
      return false;
    }

    let exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!registerInputs.password.match(exp)) {
      toast.error("Password should contain characters between 6 to 20 which contain at least one numeric digit, one uppercase and one lowercase letter", {
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
      return false;
    }

    return true;
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    if (verifyForm()) {
      let fullname = registerInputs.fullname.split(" ");
      let first_name = fullname[0];
      let last_name = "";
      for (let i = 1; i < fullname.length; i++) {
        if (i !== 1) {
          last_name += " " + fullname[i];
        }
        else {
          last_name = fullname[i];
        }
      }

      let response = await fetch('https://djangotest.hayame.my/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': registerInputs.email,
          'username': registerInputs.email,
          'first_name': first_name,
          'last_name': last_name,
          'phone': countryCode.value + " " + registerInputs.phone,
          'password': registerInputs.password,
          'password2': registerInputs.password,
        })
      })
      let data = await response.json()

      if (data['success']) {
        toast.success(data['response'], {
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
        toast.error(data['response'], {
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
  }


  const handleGoogleSignUp = async (response) => {
    let data = await googleSignIn(response);
    if (data['success']) {
      toast.success(data['response'], {
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
      toast.error(data['response'], {
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

  const changeShowLogin = (e) => {
    if(e.target.innerText === "Login"){
      setShowLoginForm(true);
    }
    else{
      setShowLoginForm(false);
    }
  }

  return (

    <div>
      <div className="row m-0 justify-content-center text-center">
        <div className={!showLoginForm ? "col-6 select-form" : "col-6 select-form selected-form"} onClick={changeShowLogin}>Login</div>
        <div className={showLoginForm ? "col-6 select-form" : "col-6 select-form selected-form"} onClick={changeShowLogin}>Register</div>
      </div>

      {/* Login Form */}

      {showLoginForm ? (<div className="row mx-0 my-5 justify-content-center">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
          <div className="row m-0 social-login-div">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 my-2">

              <LoginSocialGoogle
                client_id="311936151809-eupfq5t4fcg43bu87kne2jnkssovhh27.apps.googleusercontent.com"
                onResolve={(response) => {
                  handleGoogleSignIn(response);
                }}
              >
                <button className="google-login-btn"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" version="1.1" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></g></svg> Login with Google</button>
              </LoginSocialGoogle>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 my-2">
              <LoginSocialFacebook
                appId="801701281917720"
                onResolve={(response) => {
                  console.log(response);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <button className="facebook-login-btn"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 90 90"><g><path d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z" fill="#FFFFFF"></path></g></svg> Login with Facebook</button>
              </LoginSocialFacebook>
            </div>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="row m-0">
              <div class="mb-4 p-0">
                <input type="email" className="input-field" placeholder="Email" required name="username" />
              </div>
              <div class="mb-2 p-0">
                <input type="password" className="input-field" placeholder="Password" name="password" required />
              </div>
              <div class="my-4 p-0 d-flex justify-content-end">
                <button className="login-form-btn">Login</button>
              </div>
            </div>
          </form>
        </div>

      </div>) :
        (<div className="row mx-0 my-5 justify-content-center">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8">
            <div className="row m-0 social-register-div">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 my-2">
                <LoginSocialGoogle
                  client_id="311936151809-eupfq5t4fcg43bu87kne2jnkssovhh27.apps.googleusercontent.com"
                  onResolve={(response) => {
                    handleGoogleSignUp(response);
                  }}
                >
                  <button className="google-login-btn"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" version="1.1" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></g></svg> Login with Google</button>
                </LoginSocialGoogle>

              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 my-2">
                <LoginSocialFacebook
                  appId="801701281917720"
                  onResolve={(response) => {
                    console.log(response);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <button className="facebook-register-btn"><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 90 90"><g><path d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z" fill="#FFFFFF"></path></g></svg> Login with Facebook</button>
                </LoginSocialFacebook>

              </div>
            </div>


            <form onSubmit={handleRegister} className="register-form">
              <div className="row m-0 justify-content-between">
                <div class="mb-4 p-0">
                  <input type="text" className="input-field" placeholder="Full Name" name="fullname" onChange={handleChange} required />
                </div>
                <div class="mb-4 p-0">
                  <input type="email" className="input-field" placeholder="Email" name="email" onChange={handleChange} required />
                </div>

                <div class="mb-2 p-0 col-4">
                  <Select onChange={setCountryCode} options={options} placeholder="" required className="react-select-dropdown m-0"
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
                <div class="mb-4 p-0 col-7">
                  <input type="number" className="input-field" placeholder="Phone" name="phone" onChange={handleChange} required />
                </div>

                <div class="mb-4 p-0">
                  <input type="password" className="input-field" placeholder="Password" name="password" onChange={handleChange} required />
                </div>

                <div class="my-4 p-0 d-flex justify-content-end">
                  <button className="register-form-btn">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>)}

    </div>

  );
};

export default UserLoginSignUp;

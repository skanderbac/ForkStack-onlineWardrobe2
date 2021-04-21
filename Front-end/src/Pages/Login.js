import React, {Suspense, useState} from "react";
import Register from "./Register";
import {useHistory} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../contexts/UserContext";

import {useFormik, yupToFormErrors} from "formik";
import Cookies from "js-cookie";
import * as Yup from "yup";
import axios from "axios";
export default function Login(props){
    const [showLoader, setShowLoader] = useState(true);
    const [error, setError] = useState({ visible: false, message: "" });
    const history=useHistory(UserContext);
    const [isAuthenticated,setisAuthenticated]=useContext(UserContext);
    const [user,setUser] = useContext(UserContext);
    const [connectedUser, setConnectedUser] = useState("sousou");


    const validate = values => {
        const errors = {}

        if (!values.email) {
            errors.email = 'Required'
        } else if (values.email.length < 4) {
            errors.email = 'Must be 5 characters or more'
        }
        else
            setShowLoader(false);

        if (!values.password) {
            errors.password = ''
        } else if (values.password.length < 8) {
            errors.password = 'Must be 8 characters or more'
        } else if (values.password === '12345678') {
            errors.password = 'Must not be 12345678 !!!'
        }



        return errors
    }

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            const userss=axios.post('http://localhost:3000/login/',{

                Email:values.email,
                Password:values.password,
            })
                .then(response=>{setUser(true);
                   // setConnectedUser(JSON.stringify(response.data.user.FirstName));
                    sessionStorage.setItem("user",JSON.stringify(response.data.user));
                    //.valueOf(response.data.user.username));
                    alert("welcome"+JSON.stringify(JSON.stringify(response.data), null, 2));

                    history.push('/home');
window.location.reload();
console.log(sessionStorage.getItem("user"));


                }).catch(error=>console.log(error))

        }

    })



    return (

        <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
             style={{backgroundImage:'url(https://portotheme.com/html/molla/assets/images/backgrounds/login-bg.jpg)'}}>
            <div className="container">
                <div className="form-box">
                    <div className="form-tab">
                        <ul className="nav nav-pills nav-fill" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab"
                                   aria-controls="signin-2" aria-selected="false">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id="register-tab-2" data-toggle="tab" href="#register-2"
                                   role="tab" aria-controls="register-2" aria-selected="true">Register</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <Register></Register>

                            <div className="tab-pane fade show active" id="signin-2" role="tabpanel" aria-labelledby="signin-tab-2">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="form-group">

                                        <label htmlFor="singin-email-2">Username or email address *</label>
                                        <input
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}/>
                                                                         </div>
                                    <div className="form-group">
                                        <label htmlFor="singin-password-2">Password *</label>
                                        <input
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}/>

                                    </div>
                                    <div className="form-footer">
                                        <button type="submit" className="btn btn-outline-primary-2" disabled={!(formik.isValid && formik.dirty)} >
                                            <span>LOG IN</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="signin-remember-2"/>
                                                <label className="custom-control-label" htmlFor="signin-remember-2">Remember
                                                    Me</label>
                                        </div>

                                        <a href="#" className="forgot-link">Forgot Your Password?</a>
                                    </div>
                                </form>
                                <div className="form-choice">
                                    <p className="text-center">or sign in with</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a href="#" className="btn btn-login btn-g">
                                                <i className="icon-google"></i>
                                                Login With Google
                                            </a>
                                        </div>
                                        <div className="col-sm-6">
                                            <a href="#" className="btn btn-login btn-f">
                                                <i className="icon-facebook-f"></i>
                                                Login With Facebook
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
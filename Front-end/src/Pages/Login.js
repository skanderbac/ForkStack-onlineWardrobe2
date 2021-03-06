import React, {Suspense, useState} from "react";
import Register from "./Register";
import {Link, useHistory} from "react-router-dom";
import {useContext} from "react";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {UserContext} from "../contexts/UserContext";
import {store,ReactNotification}from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import {useFormik, yupToFormErrors} from "formik";
import Cookies from "js-cookie";
import * as Yup from "yup";
import axios from "axios";
import queryApi from "../utils/queryApi";

export default function Login(props) {
    const [showLoader, setShowLoader] = useState(true);
    const [error, setError] = useState({visible: false, message: ""});
    const history = useHistory(UserContext);
    const [isAuthenticated, setisAuthenticated] = useContext(UserContext);
    const [user, setUser] = useContext(UserContext);
    const [connectedUser, setConnectedUser] = useState("sousou");

    const responseSuccessGoogle =async (response) => {

        console.log(response.tokenId);

        const [res, err] = await queryApi("api/googleLogin",{
            tokenId:response.tokenId
        },"POST", false);
        if (err) {
            store.addNotification({
                title: "Welcome!",
                message: "Please sign Up",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });

            setShowLoader(false);
            console.log(err);
            setError({
                visible: true,
                message: JSON.stringify(err.errors, null, 2),
            });
        }
        else {


            sessionStorage.setItem("user",res);
            sessionStorage.setItem("user_id",res);
            console.log(sessionStorage.getItem("user"));
            history.push("/home");
            window.location.reload();

            console.log(res);
            store.addNotification({
                title: "Welcome!",
                message: "Welcome",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }
    }
    const responseFailureGoogle=(response)=>{

    }

    const validate = values => {
        const errors = {}

        if (!values.email) {
            errors.email = 'Required'
        } else if (values.email.length < 4) {
            errors.email = 'Must be 5 characters or more'
        } else
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

    const responseFacebook1=async(response)=>{
        console.log(response.email);
                const [res, err] = await queryApi("api/facebookLogin",{
                    Email:response.email
                },"POST", false);
                if (err) {
                    setShowLoader(false);
                    console.log(err);
                    store.addNotification({
                        title: "Welcome!",
                        message: "Please Create account with this account",
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
        
                    setError({
                        visible: true,
                        message: JSON.stringify(err.errors, null, 2),
                    });
                } else {
                    store.addNotification({
                        title: "Welcome!",
                        message: " ",
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
        
                    sessionStorage.setItem("user",res);
                    console.log(sessionStorage.getItem("user"));
                    history.push("/home");
                    window.location.reload();
        
        
                }
        
           }
    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: async(values )=> {
            const [res, err] = await queryApi("login",{

                Email: values.email,
                Password: values.password,
             }, "POST", false)


            if (err) {
                setShowLoader(false);
                console.log(err);
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
                store.addNotification({
                    title: "Welcome!",
                    message: "Please sign Up",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });
            }
            else {
                store.addNotification({
                    title: "Welcome!",
                    message: "welcome",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });

                sessionStorage.setItem("user",res);
                console.log(sessionStorage.getItem("user"));
                history.push("/home");
                window.location.reload();


            }

        },
    })


    return (

        <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
             style={{backgroundImage: 'url(https://portotheme.com/html/molla/assets/images/backgrounds/login-bg.jpg)'}}>
            <div className="container">
                <div className="form-box">
                    <div className="form-tab">
                        <ul className="nav nav-pills nav-fill" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="signin-tab-2" data-toggle="tab" href="#signin-2"
                                   role="tab"
                                   aria-controls="signin-2" aria-selected="false">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id="register-tab-2" data-toggle="tab" href="#register-2"
                                   role="tab" aria-controls="register-2" aria-selected="true">Register</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <Register></Register>

                            <div className="tab-pane fade show active" id="signin-2" role="tabpanel"
                                 aria-labelledby="signin-tab-2">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="form-group">

                                        <label htmlFor="singin-email-2"><strong>Email address </strong></label>
                                        <input
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="singin-password-2"><strong>Password </strong></label>
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
                                        <button type="submit" className="btn btn-outline-primary-2"
                                                disabled={!(formik.isValid && formik.dirty)}>
                                            <span>LOG IN</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="signin-remember-2"/>
                                            <label className="custom-control-label" htmlFor="signin-remember-2">Remember
                                                Me</label>
                                        </div>

                                        <a href="/forgotPassword" className="forgot-link"
                                           onClick={() =>  history.push("/forgotPassword")
                                           }>
                                            Forgot Your Password?</a>
                                    </div>
                                </form>
                                <div className="form-choice">
                                    <p className="text-center">or sign in with</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <GoogleLogin
                                                clientId="224688907368-fpdv128j9kb8e78c3qaal8nso19u2v69.apps.googleusercontent.com"
                                                onSuccess={responseSuccessGoogle}
                                                onFailure={responseFailureGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        </div>
                                        <div className="col-sm-6" style={{width:"50px"}}>
                                        <FacebookLogin
                                                appId="218233472998386"
                                                autoLoad={false}
                                                fields="name,email,picture"
                                                callback={responseFacebook1} />
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

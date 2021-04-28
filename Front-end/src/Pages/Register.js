import {useHistory} from "react-router-dom";
import {FormikProvider, useFormik,Field} from "formik";
import React, {useState} from "react";
import axios from "axios";
import  queryApi  from "../utils/queryApi";
import GoogleLogin from "react-google-login";

import {number} from "yup";
export default function Register(props){

    const history=useHistory();
    const [showLoader, setShowLoader] = useState(false);
    const [error, setError] = useState({ visible: false, message: "" });

    const validate = values => {
        const errors = {}

        if (!values.FirstName) {
            errors.FirstName = 'Please Set Your First Name '
        }
        if (!values.LastName) {
            errors.LastName = 'Please Set Your Last Name'
        }
        if (!values.Email) {
            errors.Email = 'Please Set Your email'
        }
        if (!values.username) {
            errors.username = 'Please Choose username'
        }
        if (!values.Password) {
            errors.Password = 'Please Set Your Password'
        } else if (values.Password.length < 8) {
            errors.password = 'Must be 8 characters or more'
        } else if (values.Password === '12345678') {
            errors.Password = 'Must not be 12345678 !!!'
        }
        if (!values.confirmpassword) {
            errors.confirmpassword = 'Please Confirm Your Password'
        }else if (values.confirmpassword !=values.Password) {
            errors.confirmpassword = 'Should Be the same as Password'

        }
        if (!values.Country) {
            errors.Country = 'Please Enter your country'
        }
        if (!values.Phone) {
            errors.Phone = 'Please enter your phone number'
        }else if (!/^[0-9]+$/i.test(values.Phone)) {
            errors.Phone = 'Invalid email address';
        }else if (values.Phone.length < 8) {
            errors.Phone = 'Must be 8 characters or more'
        }else if (values.Phone.length >8) {
            errors.Phone = 'Must be 8 characters or more'
        }


        return errors
    }

    const formik = useFormik({

        initialValues: {
            FirstName: '',
            LastName: '',
            Email: '',
            username: '',
            Password: '',
            Country: '',
            Phone:null,
            confirmpassword: '',
        },
        validate,
        onSubmit: async(values )=> {
          console.log(values.Phone);
            alert(JSON.stringify("Welcome", null, 2));
            const [res, err] = await queryApi("register",{
                FirstName:values.FirstName,
                LastName:values.LastName,
                Email:values.Email,
                username:values.username,
                Password:values.Password,
                Country:values.Country,
                Phone:parseInt(values.Phone),
            }, "POST", true);

            if (err) {
                setShowLoader(false);
                alert("Please Change your email adresse")
                console.log(err);
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            }
            else {
                sessionStorage.setItem("user",res);
                console.log(sessionStorage.getItem("user"));
                history.push("/informations");
                window.location.reload();


            }

        },
    });





    const responseSuccessGoogle = async(response) => {
        console.log(response.tokenId);
        const [res, err] = await queryApi("api/googleRegister", {
            tokenId:response.tokenId
        }, "POST", false);
        if (err) {
            setShowLoader(false);
            alert("Please Change your email adresse")
            console.log(err);
            setError({
                visible: true,
                message: JSON.stringify(err.errors, null, 2),
            });
        }
        else {
            sessionStorage.setItem("user",res);
            console.log(sessionStorage.getItem("user"));
            history.push("/informations");
            window.location.reload();


        }
    }

    const responseFailureGoogle=(response)=>{

    }
    return(
        <>

            <div className="tab-pane fade " id="register-2" role="tabpanel"
                 aria-labelledby="register-tab-2">
                <form action="#" className="contact-form mb-3" onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control"
                                   id="firstName"
                                   name="FirstName"
                                   placeholder="First Name *"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.FirstName}
                            />
                            <div className="text-danger">  {formik.touched.FirstName && formik.errors.FirstName ? <div className='error'>{formik.errors.FirstName}</div> : null}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="cname" className="sr-only">Last Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="lastName"
                                   name="LastName"
                                   placeholder="Last Name *"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.LastName}
                            />
                            <div className="text-danger">  {formik.touched.LastName && formik.errors.LastName ? <div className='error'>{formik.errors.LastName}</div> : null}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="cemail" className="sr-only">Email</label>
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   name="Email"
                                   placeholder="Email*"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.Email}
                            />
                            <div className="text-danger"> {formik.touched.Email && formik.errors.Email ? <div className='error'>{formik.errors.Email}</div> : null}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="cname" className="sr-only">Username</label>
                            <input type="text" className="form-control"
                                   id="username"
                                   name="username"
                                   placeholder="Username *"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.username}/>
                            <div className="text-danger">  {formik.touched.username && formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="cpasssword" className="sr-only">Password</label>
                            <input type="password" className="form-control"
                                   id="password"
                                   name="Password"
                                   placeholder="Password *"
                                   required
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.Password}/>
                            <div className="text-danger"> {formik.touched.Password && formik.errors.Password ? <div className='error'>{formik.errors.Password}</div> : null}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="cpassword" className="sr-only">Confirm Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="confirmpassword"
                                   name="confirmpassword"
                                   placeholder="Confirm Password *"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.confirmpassword
                                   }
                            />
                            <div className="text-danger">  {formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className='error'>{formik.errors.confirmpassword}</div> : null}
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="cname" className="sr-only">Country</label>
                            <input type="text"
                                   className="form-control"
                                   id="country"
                                   name="Country"
                                   placeholder="Country*"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.Country}

                            />
                            <div className="text-danger">  {formik.touched.Country && formik.errors.Country ? <div className='error'>{formik.errors.Country}</div> : null}
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <FormikProvider value={formik}>

                                <input type="text"
                                       className="form-control"
                                       id="Phone"
                                       name="Phone"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.Phone}/>
                                <div className="text-danger">{formik.touched.Phone && formik.errors.Phone ?
                                    <div className='error'>{formik.errors.Phone}</div> : null}
                                </div>
                            </FormikProvider>

                        </div>


                    </div>


                    <div className="form-footer">
                        <button type="submit" className="btn btn-outline-primary-2" disabled={!(formik.isValid && formik.dirty)}>
                            <span>Sign Up</span>
                            <i className="icon-long-arrow-right"></i>
                        </button>

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input"
                                   id="signin-remember-2"/>
                            <label className="custom-control-label" htmlFor="signin-remember-2">
                                I agree to the privacy policy *</label>
                        </div>

                    </div>

                </form>

                <div className="form-choice">
                    <p className="text-center">or sign up with</p>
                    <div className="row">
                        <div className="col-sm-6">
                            <GoogleLogin
                                clientId="224688907368-fpdv128j9kb8e78c3qaal8nso19u2v69.apps.googleusercontent.com"
                                onSuccess={responseSuccessGoogle}
                                onFailure={responseFailureGoogle}
                                cookiePolicy={'single_host_origin'}
                                value={'Signup'}
                            />
                        </div>
                        <div className="col-sm-6">
                            <a href="#" className="btn btn-login  btn-f">
                                <i className="icon-facebook-f"></i>
                                Login With Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
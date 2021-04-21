import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import React, {useState} from "react";
import axios from "axios";
import { queryApi } from "../utils/queryApi";



export default function Register(props){

    const history=useHistory();
    const [showLoader, setShowLoader] = useState(false);
    const [error, setError] = useState({ visible: false, message: "" });

    const validate = values => {
        const errors = {}

        if (!values.firstName) {
            errors.firstName = 'Please Set Your First '
        }
        if (!values.lastName) {
            errors.lastName = 'Please Set Your Last Name'
        }
        if (!values.email) {
            errors.email = 'Please Set Your email'
        }
        if (!values.username) {
            errors.username = 'Please Choose username'
        }
        if (!values.password) {
            errors.password = 'Please Set Your Password'
        } else if (values.password.length < 8) {
            errors.password = 'Must be 8 characters or more'
        } else if (values.password === '12345678') {
            errors.password = 'Must not be 12345678 !!!'
        }
        if (!values.confirmpassword) {
            errors.confirmpassword = 'Please Confirm Your Password'
        }else if (values.confirmpassword !=values.password) {
            errors.confirmpassword = 'Should Be the same as Password'

        }
        if (!values.country) {
            errors.country = 'Please Enter your country'
        }
        /*if (!values.phone) {
            errors.phone = 'Please enter your phone number'
        }*/

        return errors
    }

    const formik = useFormik({

        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            country: '',
            phone: 0,
            confirmpassword: '',

        },
        validate,
        onSubmit: async(values )=> {
            alert(JSON.stringify(values.email, null, 2));
            const userss=axios.post('http://localhost:3000/register/',{
                FirstName:values.firstName,
                LastName:values.lastName,
                Email:values.email,
                username:values.username,
                Password:values.password,
                Country:values.country
            })
                .then(response=>{//localStorage.setItem('token',response);
                    sessionStorage.setItem("user",JSON.stringify(response.data.user));

                    history.push('/informations');
                }).catch(error=>console.log(error))

            localStorage.setItem("User",userss);
            console.log(localStorage);


        },
    });



    const SignUp= () => {


        //  return history.replace("/informations");

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
                                   name="firstName"
                                   placeholder="First Name *"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.firstName}
                            />
                            <p className="text-danger">  {formik.touched.firstName && formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="cname" className="sr-only">Last Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="lastName"
                                   name="lastName"
                                   placeholder="Last Name *"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.lastName}
                            />
                            <p className="text-danger">  {formik.touched.lastName && formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="cemail" className="sr-only">Email</label>
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   name="email"
                                   placeholder="Email*"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                            />
                            <p className="text-danger"> {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                            </p>
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
                            <p className="text-danger">  {formik.touched.username && formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="cpasssword" className="sr-only">Password</label>
                            <input type="password" className="form-control"
                                   id="password"
                                   name="password"
                                   placeholder="Password *"
                                   required
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.password}/>
                            <p className="text-danger"> {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                            </p>
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
                            <p className="text-danger">  {formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className='error'>{formik.errors.confirmpassword}</div> : null}
                            </p>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="cname" className="sr-only">Country</label>
                            <input type="text"
                                   className="form-control"
                                   id="country"
                                   name="country"
                                   placeholder="Country*"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.country}

                            />
                            <p className="text-danger">  {formik.touched.country && formik.errors.country ? <div className='error'>{formik.errors.country}</div> : null}
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="cname" className="sr-only">Country</label>
                            <input type="number"
                                   className="form-control"
                                   id="phone"
                                   name="phone"
                                   placeholder="Phone*"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.phone}

                            />
                            <p className="text-danger">  {formik.touched.phone && formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
                            </p>
                        </div>

                    </div>
                    <div className="form-footer">
                        <button type="submit" className="btn btn-outline-primary-2" disabled={!(formik.isValid && formik.dirty)} onClick={SignUp}>
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
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                        <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google"></i>
                                Login With Google
                            </a>
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
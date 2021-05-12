import React from "react";
import {useFormik} from "formik";
import queryApi from "../utils/queryApi";
import * as Yup from "yup";
import {useHistory, useParams} from "react-router-dom";
import {store} from "react-notifications-component";

export default function ResetPassword(){
  const id1=useParams().id;
    const history=useHistory();

    const validate = values => {
        const errors = {}
        if (!values.Password) {
            errors.Password = 'Please Set Your Password'
        } else if (values.Password.length<8) {
            errors.Password = 'Please choose an other Password !!!'
        } else if (values.Password === '123456789') {
            errors.Password = 'Please choose an other Password !!!'
        }
        if (!values.ConfirmPassword) {
            errors.ConfirmPassword = 'Please Confirm Your Password'
        }else if (values.ConfirmPassword !=values.Password) {
            errors.ConfirmPassword = 'Should Be the same as Password'

        }
        return errors;

    }

    const formik = useFormik({

        initialValues: {
            Password: '',
            ConfirmPassword:'',
        },
        validate,
        onSubmit: async(values )=> {
            const [res, err] = await queryApi("resendPassword",{
                Password:values.Password,
                id:id1,

            }, "POST", false);
            store.addNotification({
                title: "Welcome!",
                message: "Welcome Your Password is ChangedYouCan Log In ",
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
            history.push("/login");


        }
    })

    return(
        <>
            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
                 style={{backgroundImage: 'url(https://portotheme.com/html/molla/assets/images/backgrounds/login-bg.jpg)'}}>
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <ul className="nav nav-pills nav-fill" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2"
                                       role="tab" aria-controls="register-2" aria-selected="true">Forgot Psassword</a>
                                </li>

                            </ul>
                            <br/>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="singin-email-2"><strong>New Password</strong></label>
                                    <input
                                        className="form-control"
                                        id="email"
                                        name="Password"
                                        type="password"
                                        placeholder="Choose new Password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Password}/>
                                    <div className="text-danger">
                                        {formik.touched.Password && formik.errors.Password ?
                                            <div className='error'>{formik.errors.Password}</div> : null}
                                    </div>
                                    </div>
                                <div className="form-group">
                                    <label htmlFor="singin-email-2"><strong>Confirm Password</strong></label>
                                    <input
                                        className="form-control"
                                        id="email"
                                        name="ConfirmPassword"
                                        type="password"
                                        placeholder="Repeat your password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.ConfirmPassword}/>
                                    <div className="text-danger">
                                        {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ?
                                            <div className='error'>{formik.errors.ConfirmPassword}</div> : null}
                                    </div>
                                </div>

                                <div className="form-footer">
                                    <button type="submit" className="btn btn-outline-primary-2"
                                            disabled={!(formik.isValid && formik.dirty)}>
                                        <span>Resset</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
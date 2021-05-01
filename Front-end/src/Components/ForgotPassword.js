import React, {useState} from "react";
import {useFormik} from "formik";
import queryApi from "../utils/queryApi";
import {store,ReactNotification}from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

const initialState={
    email:'',
    err:'',
    success:''
}

export default function ForgotPassword(props){
   const [data,setData]=useState(initialState);
   const {email,err,success}=data;
    const handleInputChange=e=>{
        const {name,value}=e.target()
        setData({...data,[name]:value,err:'',success: ''})
    }
    const validate = values => {
        const errors = {}
        if (!values.Email) {
            errors.Email = 'Please Set Your email'
        }
    }
    const formik = useFormik({

        initialValues: {
            Email: '',
        },
        validate,
        onSubmit: async(values )=> {
            const [res, err] = await queryApi("forgotPassword",{
                Email:values.Email,
                }, "POST", false);
                if(err){
                    console.log(err);
                    store.addNotification({
                        title: "WRONG!",
                        message: err,
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });                }

            else
            {
                console.log(res);
                store.addNotification({
                    title: "Welcome!",
                    message: "Welcome Please CHeck Your Email",
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
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">

                                    <label htmlFor="singin-email-2"><strong> Email address </strong></label>
                                    <input
                                        className="form-control"
                                        id="email"
                                        name="Email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Email}/>
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
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import CustomSelect from "../Components/CustomSelect";
import {useFormik} from "formik";
import queryApi from "../utils/queryApi";


export function Preferences(props){
    const [error, setError] = useState({ visible: false, message: "" });
    const history=useHistory();
    const choice = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },

    ]
    const color = [
        { value: 'black', label: 'Black' },
        { value: 'white', label: 'White' },
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },



    ]
    const style = [
        { value: 'casual', label: 'Casual' },
        { value: 'sport', label: 'Sport' },
        { value: 'girly ', label: 'Girly ' },


    ]
    const clothes = [
        { value: 'jeans', label: 'Jeans' },
        { value: 'dress', label: 'Dress' },
        { value: 't_shirt ', label: 'T_Shirt ' },
    ]

    const status = [
        { value: 'engagged', label: 'Engagged' },
        { value: 'single', label: 'Single' },
        { value: 'married', label: 'Married' },


    ]
    const finish= () => {
      //  return history.replace("/home");

    }
    const validate = values => {
        const errors = {}
    }
    const formik = useFormik({

        initialValues: {
            style:'',
            choice: '',
            color:'',
            budget:0,
            clothes:'',
            choice2:'',
        },
        validate,
        onSubmit: async(values )=> {
            console.log(values.style);
            const [res, err] = await queryApi("addPreferences/",values,"POST", false);
            if (err) {
                console.log(err);
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            }
            else {
                history.push("/home");
                window.location.reload();

            }
        }
    })
    return(
        <>
            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
                 style={{backgroundImage:'url(https://portotheme.com/html/molla/assets/images/backgrounds/login-bg.jpg)'}}>
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <ul className="nav nav-pills nav-fill" role="tablist">

                                <li className="nav-item">
                                    <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2"
                                       role="tab" aria-controls="register-2" aria-selected="true">Other Informations</a>
                                </li>

                            </ul>
                            <div className="tab-pane fade show active" id="register-2" role="tabpanel"
                                 aria-labelledby="register-tab-2">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a >Your Favorite Style</a>
                                            <CustomSelect
                                                className='form-control bg-transparent'
                                                onChange={value=>formik.setFieldValue('style',value.value)}
                                                value={formik.values.style}
                                                name="style"
                                                onBlur={formik.handleBlur}
                                                options={style}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <a >Your Favorite color</a>

                                            <CustomSelect
                                                className='form-control bg-transparent'
                                                onChange={value=>formik.setFieldValue('color',value.value)}
                                                value={formik.values.color}
                                                name="color"
                                                options={color}
                                            />
                                        </div>
                                    </div>

<br/>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a >Do you like to buy OnLine</a>
                                            <CustomSelect
                                                className='form-control bg-transparent'
                                                onChange={value=>formik.setFieldValue('choice',value.value)}
                                                value={formik.values.choice}
                                                name="choice"
                                                options={choice}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <a>You Prefer Clothes</a>

                                            <CustomSelect
                                                className='form-control bg-transparent'
                                                onChange={value=>formik.setFieldValue('clothes',value.value)}
                                                value={formik.values.clothes}
                                                name="clothes"
                                                options={clothes}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a >Budget</a>
                                            <input type="number"
                                                   className="form-control"
                                                   id="cname"
                                                   name="budget"
                                                   onChange={formik.handleChange}
                                                   onBlur={formik.handleBlur}
                                                   value={formik.values.budget}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <a>You often buy new Clothes</a>

                                            <CustomSelect
                                                className='form-control bg-transparent'
                                                onChange={value=>formik.setFieldValue('clothes',value.value)}
                                                value={formik.values.clothes}
                                                name="clothes"
                                                options={choice}
                                            />
                                        </div>
                                    </div>




                                    <div className="form-footer">


                                        <button type="submit" className="btn btn-outline-primary-2">
                                            <span>Next</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>
                                        <label className="custom-control-label" htmlFor="signin-remember-2">
                                        </label>
                                        <a href={"/home"}>
                                            <label className="custom-control-label" htmlFor="signin-remember-2">
                                                Cancel</label>
                                        </a>
                                    </div>

                                </form>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

)
}
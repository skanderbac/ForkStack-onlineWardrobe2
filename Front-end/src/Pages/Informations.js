import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import {useFormik,Field,Formik,FormikProvider} from "formik";
import CustomSelect from "../Components/CustomSelect";
import queryApi from "../utils/queryApi";
export default function Informations(props){
    const [showLoader, setShowLoader] = useState(false);

    const [error, setError] = useState({ visible: false, message: "" });
    const history=useHistory();
    const sex = [
        { value: 'women', label: 'Women' },
        { value: 'men', label: 'Men' },

    ]
    const status = [
        { value: 'engagged', label: 'Engagged' },
        { value: 'single', label: 'Single' },
        { value: 'married', label: 'Married' },

    ]
    const[selectedDate,setSelectedDate]=useState(null);

    const [startDate, setStartDate] = useState(new Date());

    const yupSchema = Yup.object({
        sex: Yup.string()
            .min(3, "Minimum 3 caractéres")
            .max(80, "Maximum 80 caractéres")
            .required("Please Choose your sex!"),
        status: Yup.string()
            .min(3, "Invalid")
            .max(80, "Invalid")
            .required("Please choose your status!"),
        height:Yup.string()
            .matches(/^[0-9]{3}$/, "Please set your height")
            .required("Please Set Your Height"),
        weight:Yup.string()
            .matches(/^[0-9]{2}$/, 'Must be 5 or 9 digits')
            .required("Please Set Your weight"),

        birthDate:new Yup.DateSchema()
            .nullable().required("Please entre YourBirth Date"),

    });


    const formik = useFormik({
        initialValues: {
            sex: '',
            status: '',
            birthDate:null,
            height:'160',
            weight:'60',
            image:'',

        },
        validationSchema:yupSchema,
        onSubmit: async(values )=> {
            console.log(values.birthDate);
            const [res, err] = await queryApi("updateUser/",{
                sex:values.sex,
                image:values.image,
                height:parseInt(values.height),
                weight:parseInt(values.weight),
                status:values.status,
                BirthDate:values.birthDate
            }, "PUT", true);
            console.log(values.birthDate);

            if (err) {
                console.log(err);
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            }
            else {
                history.push("/preferences");

            }
        }
    })
    return (
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
                                <form action="#" className="contact-form mb-3" onSubmit={formik.handleSubmit}>
                                    <FormikProvider value={formik}>

                                    <div className="row">

                                        <div className="col-sm-6" >
                                                <a >Birth Date</a>
                                                <input type="date"

                                            className="form-control"
                                                       id="cname"
                                                       placeholder="Birth Date"
                                                       name="birthDate"
                                                       max="2017-12-31"
                                                       onChange={formik.handleChange}
                                                       onBlur={formik.handleBlur}
                                                       value={formik.values.birthDate}/>
                                                <p className="text-danger">{formik.touched.birthDate && formik.errors.birthDate ?
                                                    <div className='error'>{formik.errors.birthDate}</div> : null}
                                                </p>
                                        </div>
                                        <div className="col-sm-6">
                                            <a >Sex</a>
                                            <CustomSelect
                                                className='form-control bg-transparent'
                                                onChange={value=>formik.setFieldValue('sex',value.value)}
                                                value={formik.values.sex}
                                                name="sex"
                                                options={sex}

                                            />
                                            <br/>
                                            <p className="text-danger">{formik.touched.sex && formik.errors.sex ?
                                                <div className='error'>{formik.errors.sex}</div> : null}
                                            </p>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a >Height</a>
                                            <input type="text"
                                                   className="form-control"
                                                   id="cname"
                                                   name="height"
                                                   onChange={formik.handleChange}
                                                   value={formik.values.height}/>

                                            <p className="text-danger">{formik.touched.height && formik.errors.height ?
                                                <div className='error'>{formik.errors.height}</div> : null}
                                            </p>
                                        </div>
                                        <div className="col-sm-6">
                                            <a>Weight</a>

                                            <input type="text"
                                                   className="form-control"
                                                   id="cname"
                                                   name="weight"
                                                   onChange={formik.handleChange}
                                                   onBlur={formik.handleBlur}
                                                   value={formik.values.weight}/>
                                            <p className="text-danger">{formik.touched.weight && formik.errors.weight ?
                                                <div className='error'>{formik.errors.weight}</div> : null}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a>Relationship Status</a>

                                            <CustomSelect
                                                className='form-control bg-transparent'
                                                onChange={value=>formik.setFieldValue('status',value.value)}
                                                value={formik.values.status}
                                                name="style"
                                                options={status}
                                            />
                                            <p className="text-danger">{formik.touched.status && formik.errors.status ?
                                                <div className='error'>{formik.errors.status}</div> : null}
                                            </p>
                                        </div>
                                        <div className="col-sm-6">
                                            <a>Pictures</a>

                                            <input type="file" className="form-control"
                                                   name="image"
                                                   onChange={(event) => {
                                                       formik.setFieldValue("image", event.target.files[0]);
                                                   }}
                                            />
                                        </div>
                                    </div>


                                    <div className="form-footer">


                                        <button type="submit" className="btn btn-outline-primary-2"
                                        >
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
                                    </FormikProvider>

                                </form>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
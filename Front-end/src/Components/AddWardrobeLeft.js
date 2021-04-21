import {useFormik,Field} from "formik";
import React from "react";
export default function AddWardrobeLeft(props){
    const validate = values => {
        const errors = {};

        if (!values.image) {
            errors.image = 'Please Choose a Picture'
        }
        return errors
    };
    const formik = useFormik({

        initialValues: {
            image: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return(
        <>
            <div className="soon-content-wrapper">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Choose a file from your device</label><br/>
                        <input type="file"
                               placeholder="App you clothes Pictures"
                               name="image"
                               id="image"
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}

                               onChange={(event) => {
                                   formik.
                                   setFieldValue("image", event.target.files[0]);
                               }}
                        />
                        {formik.touched.image && formik.errors.image ? <div className='error'>{formik.errors.image}</div> : null}
                    </div>
                    <div className="input-group mb-5">
                        <div className="input-group-append">
                            <button className="btn btn-primary btn-rounded" type="submit"disabled={!(formik.isValid && formik.dirty)}><span>Add</span><i
                                className="icon-long-arrow-right"/></button>
                        </div>
                    </div>
                </form>

            </div>
            </>
    )
}

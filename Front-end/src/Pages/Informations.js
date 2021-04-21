import Register from "./Register";
import {useHistory} from "react-router-dom";
import React from "react";

export default function Informations(props){
    const history=useHistory();
    const finish= () => {
        return history.replace("/Choices");

    }

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
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="date"
                                   className="form-control"
                                   id="cname"
                                   placeholder="Age"/>
                        </div>
                        <div className="col-sm-6">
                            <select name="sortby" id="sortby"
                                    className="form-control">
                                <option value="w">Women</option>
                                <option value="m">Men</option>
                                <option defaultValue="o"
                                        >Other
                                </option>

                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="number"
                                   className="form-control"
                                   id="cname"
                                   placeholder="Height"
                                   />
                        </div>
                        <div className="col-sm-6">
                            <input type="number"
                                   className="form-control"
                                   id="cemail"
                                   placeholder="Weight"
                                   />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="cname" className="sr-only">Name</label>
                            <select name="sortby" id="sortby"
                                    className="form-control">
                                <option value="popularity"
                                        defaultValue="selected">What do you Prefer
                                </option>
                                <option value="A">What's your style</option>
                                <option value="B">What's you prefer color</option>
                            </select>
                        </div>
                        <div className="col-sm-6">
                           <input type="text" className="form-control" placeholder="Your Response"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <select name="sortby" id="sortby"
                                    className="form-control">
                                <option value="popularity"
                                        defaultValue="selected">What do you Prefer
                                </option>
                                <option value="A">What's your style</option>
                                <option value="B">What's you prefer color</option>
                            </select>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Your Response"/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <select name="sortby" id="sortby"
                                    className="form-control">
                                <option value="popularity"
                                        defaultValue="selected">What do you Prefer
                                </option>
                                <option value="A">What's your style</option>
                                <option value="B">What's you prefer color</option>
                            </select>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Your Response"/>
                        </div>

                    </div>



                    <div className="form-footer">


                        <button type="submit" className="btn btn-outline-primary-2" onClick={finish}>
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

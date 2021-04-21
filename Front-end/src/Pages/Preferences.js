import React from "react";
import {useHistory} from "react-router-dom";


export function Preferences(props){
    const history=useHistory();

    const finish= () => {
        return history.replace("/home");

    }
    return(
        <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
             style={{backgroundImage:'url(https://portotheme.com/html/molla/assets/images/backgrounds/login-bg.jpg)'}}>




            <div className="container">
                <div className="form-box">
                    <div className="form-tab">
                        <ul className="nav nav-pills nav-fill" role="tablist">

                            <li className="nav-item">
                                <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2"
                                   role="tab" aria-controls="register-2" aria-selected="true">Choose your Style</a>
                            </li>

                        </ul>





                        <div className="tab-pane fade show active" id="register-2" role="tabpanel"
                             aria-labelledby="register-tab-2">
                            <form action="#" className="contact-form mb-3">

                                <div className="row">
                                    <div>
                                        <input type="checkbox" id="scales" name="scales"/>
                                        <label htmlFor="scales"><img id="product-zoom"
                                                                     src="https://portotheme.com/html/molla/assets/images/products/table/product-2.jpg"
                                                                     data-zoom-image="assets/images/products/single/1-big.jpg"
                                                                     alt="product image" style={{width:'130px',height:'90px'}}/></label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="scales" name="scales"/>
                                        <label htmlFor="scales"><img id="product-zoom"
                                                                     src="https://portotheme.com/html/molla/assets/images/team/member-1.jpg"
                                                                     data-zoom-image="assets/images/products/single/"
                                                                     alt="product image" style={{width:'130px',height:'90px'}}/></label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="scales" name="scales"/>
                                        <label htmlFor="scales"><img id="product-zoom"
                                                                     src="https://portotheme.com/html/molla/assets/images/products/single/1.jpg"
                                                                     data-zoom-image="assets/images/products/single/1-big.jpg"
                                                                     alt="product image" style={{width:'130px',height:'90px'}}/></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <input type="checkbox" id="scales" name="scales"/>
                                        <label htmlFor="scales"><img id="product-zoom"
                                                                     src="https://portotheme.com/html/molla/assets/images/products/table/product-2.jpg"
                                                                     data-zoom-image="assets/images/products/single/1-big.jpg"
                                                                     alt="product image" style={{width:'130px',height:'90px'}}/></label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="scales" name="scales"/>
                                        <label htmlFor="scales"><img id="product-zoom"
                                                                     src="https://portotheme.com/html/molla/assets/images/team/member-1.jpg"
                                                                     data-zoom-image="assets/images/products/single/"
                                                                     alt="product image" style={{width:'130px',height:'90px'}}/></label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="scales" name="scales"/>
                                        <label htmlFor="scales"><img id="product-zoom"
                                                                     src="https://portotheme.com/html/molla/assets/images/products/single/1.jpg"
                                                                     data-zoom-image="assets/images/products/single/1-big.jpg"
                                                                     alt="product image" style={{width:'130px',height:'90px'}}/></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <input type="checkbox" id="scales" name="scales"/>
                                        <label htmlFor="scales"><img id="product-zoom"
                                                                     src="https://portotheme.com/html/molla/assets/images/products/table/product-2.jpg"
                                                                     data-zoom-image="assets/images/products/single/1-big.jpg"
                                                                     alt="product image" style={{width:'130px',height:'90px'}}/></label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="scales" name="scales"/>
                                        <label htmlFor="scales"><img id="product-zoom"
                                                                     src="https://portotheme.com/html/molla/assets/images/team/member-1.jpg"
                                                                     data-zoom-image="assets/images/products/single/"
                                                                     alt="product image" style={{width:'130px',height:'90px'}}/></label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="scales" name="scales"/>
                                        <label htmlFor="scales"><img id="product-zoom"
                                                                     src="https://portotheme.com/html/molla/assets/images/products/single/1.jpg"
                                                                     data-zoom-image="assets/images/products/single/1-big.jpg"
                                                                     alt="product image" style={{width:'130px',height:'90px'}}/></label>
                                    </div>
                                </div>
                                <div className="form-footer">


                                    <button type="submit" className="btn btn-outline-primary-2" onClick={finish}>
                                        <span>Finish</span>
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
)
}
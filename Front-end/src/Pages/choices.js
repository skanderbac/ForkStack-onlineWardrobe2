import React, { Component } from "react";
import {Link,useHistory} from "react-router-dom";

const cardSelect = {
    transform: "scale(1.1)",
    transition: "transform .3s"
};
export default function Choises(props) {

    const script = document.createElement("script");
    const history=useHistory();
    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;
    const [selected, setSelected] = React.useState(0);
   const finish=()=>{
       history.push('/home');
       window.location.reload();

   }
    document.body.appendChild(script);
    return(
        <div>
            <div className="login-page bg-image pt-8 pb-8 pt-md-8 pb-md-8 pt-lg-17 pb-lg-17"
                 style={{backgroundImage:'url(https://portotheme.com/html/molla/assets/images/backgrounds/login-bg.jpg)'}}>
                <div className="container">
                    <h2 className="title">Choose your style</h2>
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 element-type">
                            <div className="row">
                                <div className="col-sm-6 col-lg-12"
                                     style={{ ...(selected === 1 && cardSelect) }}
                                     onClick={() => setSelected(1)}
                                >
                                    <div className="banner">
                                        <img
                                            src={process.env.PUBLIC_URL +'assets/images/demos/demo-18/banners/banner-3.jpg'}
                                            alt="Banner"/>
                                        <div className="banner-content">
                                            <h3 className="banner-title">Style 1 <br/>ultrices nulla.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-12"
                                     style={{ ...(selected === 2 && cardSelect) }}
                                     onClick={() => setSelected(2)}
                                >
                                    <div className="banner">
                                        <img
                                            src={process.env.PUBLIC_URL +'assets/images/demos/demo-18/banners/banner-4.jpg'}
                                            alt="Banner"/>
                                        <div className="banner-content">
                                            <h3 className="banner-title">Style 2 <br/>ultrices nulla.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 element-type">
                            <div className="row">
                                <div className="col-sm-6 col-lg-12"
                                     style={{ ...(selected === 3 && cardSelect) }}
                                     onClick={() => setSelected(3)}
                                >
                                    <div className="banner">
                                        <img
                                            src={process.env.PUBLIC_URL +'assets/images/demos/demo-18/banners/banner-3.jpg'}
                                            alt="Banner"/>
                                        <div className="banner-content">
                                            <h3 className="banner-title">Style 3 <br/>ultrices nulla.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-12"
                                     style={{ ...(selected === 4 && cardSelect) }}
                                     onClick={() => setSelected(4)}
                                >
                                    <div className="banner">
                                        <img
                                            src={process.env.PUBLIC_URL +'assets/images/demos/demo-18/banners/banner-3.jpg'}
                                            alt="Banner"/>
                                        <div className="banner-content">
                                            <h3 className="banner-title">Style 4 <br/>ultrices nulla.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 element-type">
                            <div className="row">
                                <div className="col-sm-6 col-lg-12"
                                     style={{ ...(selected === 5 && cardSelect) }}
                                     onClick={() => setSelected(5)}
                                >
                                    <div className="banner">
                                        <img
                                            src={process.env.PUBLIC_URL +'assets/images/demos/demo-18/banners/banner-1.jpg'}
                                            alt="Banner"/>
                                        <div className="banner-content">
                                            <h3 className="banner-title">Style 5 <br/>ultrices nulla.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-12"
                                     style={{ ...(selected === 6 && cardSelect) }}
                                     onClick={() => setSelected(6)}
                                >
                                    <div className="banner">
                                        <img
                                            src={process.env.PUBLIC_URL +'assets/images/demos/demo-18/banners/banner-1.jpg'}
                                            alt="Banner"/>
                                        <div className="banner-content">
                                            <h3 className="banner-title">Style 6 <br/>ultrices nulla.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-footer">
                        <button type="submit" className="btn btn-outline-primary-2" onClick={finish} >
                            <span>Envoyer</span>
                            <i className="icon-long-arrow-right"></i>
                        </button>

                    </div>

                </div>
            </div>
        </div>




    )
}

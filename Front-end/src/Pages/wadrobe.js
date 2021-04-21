import React, { Component } from "react";
import Brand from "../Components/Brand";
import ProductAll from "../Components/ProductAll";
import Search from "../Components/Search";
import {Link,useHistory} from "react-router-dom";
import Filter from "../Components/Filter";
import Products from "../Components/Products";


export default function Wardrobe(props) {
    const history=useHistory();
    return(
        <div>
            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                    <div className="container d-flex align-items-center"><ol className="breadcrumb">
                        <li className="breadcrumb-item"><a
                            href="https://portotheme.com/html/molla/index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Default</li>
                    </ol>

                        <nav className="product-pager ml-auto" aria-label="Product">
                            <a className="product-pager-link product-pager-prev" href="#" aria-label="Previous"
                               tabIndex="-1">
                                <i className="icon-angle-left"></i>
                                <span>Prev</span>
                            </a>

                            <a className="product-pager-link product-pager-next" href="#" aria-label="Next"
                               tabIndex="-1">
                                <span>Next</span>
                                <i className="icon-angle-right"></i>
                            </a>
                        </nav>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top">
                            <div className="row">
                                <div className="col-md-6" style={{height:'600px'}}>
                                    <div className="product-gallery product-gallery-vertical">
<Products></Products>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="product-details">
                                      <Filter></Filter>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
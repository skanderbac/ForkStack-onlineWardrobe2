import React, { Component } from "react";
import Brand from "../Components/Brand";
import ProductAll from "../Components/ProductAll";
import Search from "../Components/Search";
import {Link,useHistory} from "react-router-dom";
import useApi  from "../Hooks/useApi";
import Product from "../Components/Product";
import {selectProducts} from "../Redux/slices/ProductSlice";
import {useSelector} from "react-redux";
import Aside from "./Aside";
import Filter from "./Filter";

export default function Categories(props) {
    const prod=useSelector(selectProducts);

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
                                <Filter>

                                </Filter>

                                <div className="col-lg-9">
                                    <div className="toolbox">
                                        <div className="toolbox-left">
                                            <div className="toolbox-info">
                                                <Link
                                                    to={{
                                                        pathname: '/recommandations'
                                                    }}
                                                    onClick={() => window.location.href="/recommandations"}>
                                        Recommandations
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="toolbox-right">
                                            <div className="toolbox-sort">
                                                <label htmlFor="sortby">Sort by:</label>
                                                <div className="select-custom">
                                                    <select name="sortby" id="sortby" className="form-control">
                                                        <option value="popularity" selected="selected">Most Popular</option>
                                                        <option value="rating">Most Rated</option>
                                                        <option value="date">Date</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products mb-3">
                                        <div className="row justify-content-center">
                                        {prod?.map((product, index) => (

                           <Product
                                                product={product}
                                                key={index}
                                            ></Product>

                                        ))}
                                    </div>
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

import React from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import useApi from "../Hooks/useApi";
import Filter from "./Filter";
import SubHeader from "./SubHeaser";

export default function ShopSex(props){
    const history=useHistory();
    console.log(history.location);
    const name=history.location.state.sex;
    console.log(name);
    const [prod, err, reload] = useApi("filterProductSex"+"/"+history.location.state.sex);
    return(
        <>
            <SubHeader pagename={name}></SubHeader>

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

                                <Link
                                to={{
                                    pathname: '/recommandations'
                                }}
                                onClick={() => window.location.href="/recommandations"}>
                                Recommandations
                                </Link>
                            <div className="products mb-3">
                                <div className="row justify-content-center">

                            {prod?.map((product, key) => (

                                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                    <div className="product product-7 text-center">
                                        <div className="row justify-content-center">


                                            <figure className="product-media">
                                                <span className="product-label label-new">New</span>

                                                <img src={
                                                    process.env.REACT_APP_API_URL_UPLOADS+""+product.image}
                                                     alt="product desc"/>

                                                <div className="product-action-vertical">
                                                    <h3 className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></h3>
                                                    <h3
                                                        className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></h3>
                                                    <h3  className="btn-product-icon btn-compare"
                                                         title="Compare"><span>Compare</span></h3>
                                                </div>

                                                <div className="product-action">
                                                    <a className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>
                                        </div>

                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a>{product.type}</a>

                                            </div>
                                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">
                                                {product.description}
                                            </a></h3>
                                            <div className="product-price">
                                                {product.price}$
                                            </div>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width:'20%'}}></div>
                                                </div>
                                                <span className="ratings-text">( 2 Reviews )</span>
                                            </div>

                                            <div className="product-nav product-nav-thumbs">



                                            </div>
                                        </div>


                                    </div>
                                </div>
                            ))}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        </>
    )
}
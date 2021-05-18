import {useSelector} from "react-redux";
import {selectProducts} from "../Redux/slices/ProductSlice";
import {Link, useHistory} from "react-router-dom";
import Filter from "../Components/Filter";
import Product from "../Components/Product";
import React, {useEffect} from "react";
import useApi from "../Hooks/useApi";
import SubHeader from "../Components/SubHeaser";
import { useDispatch } from "react-redux";
import {affichage, affichagePreferences, selectPreferences, selectwardrobe} from "../Pages/WardrobeSlice";

export default function UserRecommandations(props){
    const [products, err, reload] = useApi("shop/user");

    const user1=sessionStorage.getItem('user');


    const dispatch = useDispatch();
    const  pref = useSelector(selectPreferences );

    useEffect(() => {
        dispatch(affichagePreferences())

    }, [dispatch]);

    console.log(pref);
    const history=useHistory();
    return(
        <div>
            <SubHeader pagename={"Recommandation"}></SubHeader>

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
                                                </Link>                                            </div>
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
                                            {pref?.map((product, index) => (

                                                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                                    <div className="product product-7 text-center">
                                                        <div className="row justify-content-center">


                                                            <figure className="product-media">
                                                                <span className="product-label label-new">New</span>

                                                                <img src={
                                                                    product.link}
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
                                                                <a>{product.usage}</a>

                                                            </div>
                                                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">
                                                                {product.productDisplayName}
                                                            </a></h3>
                                                            <div className="product-price">
                                                                {product.baseColour}
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
        </div>
    )
}

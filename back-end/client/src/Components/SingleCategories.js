import React, { Component } from "react";
import Brand from "../Components/Brand";
import ProductAll from "../Components/ProductAll";
import Search from "../Components/Search";
import {Link,useHistory} from "react-router-dom";


export default function SingleCategories(props) {
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
                                        <div className="row">
                                            <figure className="product-main-image">
                                                <img id="product-zoom"
                                                     src="https://portotheme.com/html/molla/assets/images/products/product-6.jpg"
                                                     data-zoom-image="assets/images/products/single/1-big.jpg"
                                                     alt="product image"/>

                                                <a href="#" id="btn-product-gallery"
                                                   className="btn-product-gallery">
                                                    <i className="icon-arrows"></i>
                                                </a>
                                            </figure>

                                            <div id="product-zoom-gallery" className="product-image-gallery">
                                                <a className="product-gallery-item active" href="#"
                                                   data-image="assets/images/products/single/1.jpg"
                                                   data-zoom-image="https://portotheme.com/html/molla/assets/images/products/table/product-3.jpg">
                                                    <img
                                                        src="https://portotheme.com/html/molla/assets/images/products/single/product-3.jpg"
                                                        alt="product side"/>
                                                </a>

                                                <a className="product-gallery-item" href="#"
                                                   data-image="assets/images/products/single/2.jpg"
                                                   data-zoom-image="https://portotheme.com/html/molla/assets/images/products/single/2-big.jpg">
                                                    <img
                                                        src="https://portotheme.com/html/molla/assets/images/products/single/2-small.jpg"
                                                        alt="product cross"/>
                                                </a>

                                                <a className="product-gallery-item" href="#"
                                                   data-image="assets/images/products/single/3.jpg"
                                                   data-zoom-image="https://portotheme.com/html/molla/assets/images/products/single/3-big.jpg">
                                                    <img
                                                        src="https://portotheme.com/html/molla/assets/images/products/single/3-small.jpg"
                                                        alt="product with model"/>
                                                </a>

                                                <a className="product-gallery-item" href="#"
                                                   data-image="assets/images/products/single/4.jpg"
                                                   data-zoom-image="https://portotheme.com/html/molla/assets/images/products/single/4-big.jpg">
                                                    <img
                                                        src="https://portotheme.com/html/molla/assets/images/products/single/4-small.jpg"
                                                        alt="product back"/>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="product-details">
                                        <aside className="col-lg-3 order-lg-first">

                                            <div className="sidebar sidebar-shop" style={{width:'400px',height:'600px'}}>
                                                <div className="widget widget-clean">
                                                    <label>Filters:</label>
                                                    <a href="#" className="sidebar-filter-clear">Clean All</a>
                                                </div>

                                                <div className="widget widget-collapsible">
                                                    <h3 className="widget-title">
                                                        <a data-toggle="collapse" href="#widget-1" role="button"
                                                           aria-expanded="true" aria-controls="widget-1">
                                                            Category
                                                        </a>
                                                    </h3>

                                                    <div className="collapse show" id="widget-1">
                                                        <div className="widget-body">
                                                            <div className="filter-items filter-items-count">
                                                                <div className="filter-item">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <a onClick={()=>history.replace("/categories")}><label>Dresses</label></a>

                                                                    </div>
                                                                    <span className="item-count">4</span>
                                                                </div>

                                                                <div className="filter-item">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <a onClick={()=>history.replace("/categories")}><label>T-Shirts</label></a>

                                                                    </div>
                                                                    <span className="item-count">0</span>
                                                                </div>


                                                                <div className="filter-item">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <a onClick={()=>history.replace("/categories")}><label>Bags</label></a>

                                                                    </div>
                                                                    <span className="item-count">4</span>
                                                                </div>

                                                                <div className="filter-item">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <a onClick={()=>history.replace("/categories")}><label>Jackts</label></a>

                                                                    </div>
                                                                    <span className="item-count">4</span>
                                                                </div>

                                                                <div className="filter-item">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <a onClick={()=>history.replace("/categories")}><label>Jeans</label></a>
                                                                    </div>
                                                                    <span className="item-count">3</span>
                                                                </div>


                                                                <div className="filter-item">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <a onClick={()=>history.replace("/categories")}><label>Shoes</label></a>

                                                                    </div>
                                                                    <span className="item-count">1</span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="widget widget-collapsible">
                                                    <h3 className="widget-title">
                                                        <a data-toggle="collapse" href="#widget-2" role="button"
                                                           aria-expanded="true" aria-controls="widget-2">
                                                            Size
                                                        </a>
                                                    </h3>

                                                    <div className="collapse show" id="widget-2">
                                                        <div className="widget-body">
                                                            <div className="filter-items">
                                                                <div className="filter-item">
                                                                    <select name="sortby" id="sortby"
                                                                            className="form-control">
                                                                        <option value="popularity"
                                                                                selected="selected"> Select Size
                                                                        </option>
                                                                        <option value="rating">S</option>
                                                                        <option value="date">M</option>
                                                                        <option value="date">L</option>
                                                                        <option value="date">XL</option>
                                                                        <option value="date">XXL</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="widget widget-collapsible">
                                                    <h3 className="widget-title">
                                                        <a data-toggle="collapse" href="#widget-3" role="button"
                                                           aria-expanded="true" aria-controls="widget-3">
                                                            Colour
                                                        </a>
                                                    </h3>

                                                    <div className="collapse show" id="widget-3">
                                                        <div className="widget-body">
                                                            <div className="filter-colors">
                                                                <a href="#" style={{background: '#b87145'}}><span
                                                                    className="sr-only">Color Name</span></a>
                                                                <a href="#" style={{background:'#f0c04a'}}><span
                                                                    className="sr-only">Color Name</span></a>
                                                                <a href="#" style={{background:'#333333'}}><span
                                                                    className="sr-only">Color Name</span></a>
                                                                <a href="#" className="selected"
                                                                   style={{background:'#cc3333'}}><span
                                                                    className="sr-only">Color Name</span></a>
                                                                <a href="#" style={{background:'#3399cc'}}><span
                                                                    className="sr-only">Color Name</span></a>
                                                                <a href="#" style={{background:'#669933'}}><span
                                                                    className="sr-only">Color Name</span></a>
                                                                <a href="#" style={{background:'#f2719c'}}><span
                                                                    className="sr-only">Color Name</span></a>
                                                                <a href="#" style={{background:'#ebebeb'}}><span
                                                                    className="sr-only">Color Name</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </aside>

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
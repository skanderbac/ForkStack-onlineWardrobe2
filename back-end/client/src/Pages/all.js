import { BrowserRouter as Router, Route,Link,useHistory } from 'react-router-dom';
import Filter from "../Components/Filter";
import Products from "../Components/Products";
import SubHeader from "../Components/SubHeaser";
import React from "react";
import AddToWardrobe from "./AddToWardrobe";

export default function All(props){
    const history=useHistory();

    return (
<>
    <SubHeader pagename={"My Fitting Room"}></SubHeader>
    <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container d-flex align-items-center"><ol className="breadcrumb">

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
    <div class="row">


        <aside className="col-lg-3 order-lg-first">

            <div className="sidebar sidebar-shop" style={{width:'400px',height:'600px',paddingLeft:'50px'}}>
                    <div className="widget widget-clean">
                        <label>My Clothes:</label>
                    </div>
                <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                        <a data-toggle="collapse" href="#widget-1" role="button"
                           aria-expanded="true" aria-controls="widget-1">
                            Dress
                        </a>
                    </h3>

                    <div className="collapse show" id="widget-1">
                        <div className="widget-body">
                            <div className="filter-items filter-items-count">
                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">

                                    </div>
                                    <span className="item-count"></span>
                                </div>



                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <a onClick={()=>history.replace("/product/Bags")}>
                                            <img
                                                src="https://portotheme.com/html/molla/assets/images/products/single/3-small.jpg"
                                                alt="product with model"/>                                        </a>

                                    </div>
                                    <span className="item-count"></span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                        <a data-toggle="collapse" href="#widget-2" role="button"
                           aria-expanded="true" aria-controls="widget-2">
                            Shoes
                        </a>
                    </h3>

                    <div className="collapse show" id="widget-2">
                        <div className="widget-body">
                            <div className="filter-items">
                                <div className="filter-item">
                                   <a> <img
                                        src="https://portotheme.com/html/molla/assets/images/products/cart/product-1.jpg"
                                        alt="product with model"/>
                                   </a>

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

                                  </div>


            </div>

        </aside>
        <br/>
        <a className="product-gallery-item" href="#"
           data-image="assets/images/products/single/3.jpg"
           data-zoom-image="https://portotheme.com/html/molla/assets/images/products/single/3-big.jpg">
            <img
                src="https://portotheme.com/html/molla/assets/images/products/single/3-small.jpg"
                alt="product with model" style={{width:'500px',paddingLeft:'50px'}}/>
        </a>



        <div className="product-details">

            <aside className="col-lg-3 order-lg-first">

                <div className="sidebar sidebar-shop" style={{width:'450px',height:'600px',paddingLeft:'200px'}}>
                    <div className="widget widget-clean">
                        <label>From Shop:</label>
                    </div>

                    <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                            <a data-toggle="collapse" href="#widget-1" role="button"
                               aria-expanded="true" aria-controls="widget-1">
                                Dress
                            </a>
                        </h3>

                        <div className="collapse show" id="widget-1">
                            <div className="widget-body">
                                <div className="filter-items filter-items-count">








                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                            <a data-toggle="collapse" href="#widget-2" role="button"
                               aria-expanded="true" aria-controls="widget-2">
                                Bags
                            </a>
                        </h3>

                        <div className="collapse show" id="widget-2">
                            <div className="widget-body">
                                <div className="filter-items">
                                    <div className="filter-item">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                            <a data-toggle="collapse" href="#widget-2" role="button"
                               aria-expanded="true" aria-controls="widget-2">
                                Bags
                            </a>
                        </h3>

                        <div className="collapse show" id="widget-2">
                            <div className="widget-body">
                                <div className="filter-items">
                                    <div className="filter-item">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                            <a data-toggle="collapse" href="#widget-3" role="button"
                               aria-expanded="true" aria-controls="widget-3">
                                Jackets
                            </a>
                        </h3>

                        <div className="collapse show" id="widget-3">
                        </div>
                    </div>


                </div>

            </aside>
        </div>
        <AddToWardrobe></AddToWardrobe>
    </div>
    </>)
}
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
    const user1=sessionStorage.getItem('user');

    const history=useHistory();
    return(
        <div>
            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                    <div className="container d-flex align-items-center">
                       

                          
                            
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
                                            {user1 ?(
                                                <Link
                                                    to={{
                                                        pathname: '/recommandations'
                                                    }}
                                                    onClick={() => window.location.href="/recommandations"}>
                                        Recommandations
                                                </Link>
                                                ):(<h1></h1>)}
                                            </div>
                                        </div>
                                        <div className="toolbox-right">
                                            <div className="toolbox-sort">
                                                
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

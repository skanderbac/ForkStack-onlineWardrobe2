import React from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import useApi from "../Hooks/useApi";
import Filter from "./Filter";
import SubHeader from "./SubHeaser";

export default function Type(props){
    const history=useHistory();
    console.log(history.location);
    const name=history.location.state.type.toUpperCase();
    console.log(name);
    const user1=sessionStorage.getItem('user');

    const [prod, err, reload] = useApi("filterProduct"+"/"+history.location.state.type);
    return(
        <>
            <SubHeader pagename={name}></SubHeader>

            <main className="main">

            <div className="page-content">
            <div className="container">
                <div className="row">
            <Filter></Filter>
            {user1 ?( <Link
                                                to={{
                                                    pathname: '/recommandations'
                                                }}
                                                onClick={() => window.location.href="/recommandations"}>
                                                Recommandations
                                            </Link> 
                                                                                   ):(<h1></h1>)}     
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
                                    <h3 className="product-title">
                                        {product.description}
                                    </h3>
                                    <div className="product-price">
                                        {product.price}$
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width:'20%'}}></div>
                                        </div>
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>

                                    
                                </div>




                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            </main>
        </>
    )
}
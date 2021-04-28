import React, { useEffect, useState } from "react";
import useApi  from "../Hooks/useApi";


export default function Product(props){
    const [product, setProduct] = useState(props.product);
    const [prod, err, reload] = useApi("filterProduct"+"/"+product._id);

    return(
        <>
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
        </>

        )

}
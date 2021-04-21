import SubHeader from "../Components/SubHeaser";
import ReactPaginate from 'react-paginate';
import useState from 'react';
export default function Shop(){
    return(
        <div style={{width:'2000px'}}>
<SubHeader pagename={"Shop"}></SubHeader>
            <br/><br/>
            <div className="col-lg-9" style={{paddingLeft:'90px'}}>



        <div className="products mb-3">
            <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-new">New</span>
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-4.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Women</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Brown
                                paperbag waist pencil skirt</a></h3>
                            <div className="product-price">
                                $60.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width:'20%'}}></div>
                                </div>
                                <span className="ratings-text">( 2 Reviews )</span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-4-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-4-2-thumb.jpg"
                                        alt="product desc"/>
                                </a>

                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-4-3-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-5.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Dresses</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Dark
                                yellow lace cut out swing dress</a></h3>
                            <div className="product-price">
                                $84.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width:'0%'}}></div>
                                </div>
                                <span className="ratings-text">( 0 Reviews )</span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-5-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-5-2-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-out">Out of Stock</span>
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-6.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Jackets</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Khaki
                                utility boiler jumpsuit</a></h3>
                            <div className="product-price">
                                <span className="out-price">$120.00</span>
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width:'80%'}}></div>
                                </div>
                                <span className="ratings-text">( 6 Reviews )</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-7.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Jeans</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Blue
                                utility pinafore denim dress</a></h3>
                            <div className="product-price">
                                $76.00
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

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-new">New</span>
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-8.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Shoes</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Beige
                                knitted elastic runner shoes</a></h3>
                            <div className="product-price">
                                $84.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width:'0%'}}></div>
                                </div>
                                <span className="ratings-text">( 0 Reviews )</span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-8-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-8-2-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-9.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Bags</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Orange
                                saddle lock front chain cross body bag</a></h3>
                            <div className="product-price">
                                $84.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width:'60%'}}></div>
                                </div>
                                <span className="ratings-text">( 1 Reviews )</span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-9-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-9-2-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-9-3-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-top">Top</span>
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-11.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Shoes</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Light
                                brown studded Wide fit wedges</a></h3>
                            <div className="product-price">
                                $110.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width: '80%'}}></div>
                                </div>
                                <span className="ratings-text">( 1 Reviews )</span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-11-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-11-2-thumb.jpg"
                                        alt="product desc"/>
                                </a>

                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-11-3-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-10.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Jumpers</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Yellow
                                button front tea top</a></h3>
                            <div className="product-price">
                                $56.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width:'0%'}}></div>
                                </div>
                                <span className="ratings-text">( 0 Reviews )</span>
                            </div>
                        </div>
                        </figure>
                        </div>
                    </div>


                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-12.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Bags</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Black
                                soft RI weekend travel bag</a></h3>
                            <div className="product-price">
                                $68.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width: '0%'}}></div>
                                </div>
                                <span className="ratings-text">( 0 Reviews )</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-13.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Bags</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Beige
                                metal hoop tote bag</a></h3>
                            <div className="product-price">
                                $76.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width:'40%'}}></div>
                                </div>
                                <span className="ratings-text">( 1 Reviews )</span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-13-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-13-2-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-14.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Dresses</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Brown
                                zebra print dungaree dress</a></h3>
                            <div className="product-price">
                                $80.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width:'0%'}}></div>
                                </div>
                                <span className="ratings-text">( 0 Reviews )</span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-14-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-14-2-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                                <a href="#">
                                    <img
                                        src="https://portotheme.com/html/molla/assets/images/products/product-14-3-thumb.jpg"
                                        alt="product desc"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="https://portotheme.com/html/molla/product.html">
                                <img src="https://portotheme.com/html/molla/assets/images/products/product-15.jpg"
                                     alt="Product image" className="product-image"/>
                            </a>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                <a href="https://portotheme.com/html/molla/popup/quickView.html"
                                   className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                <a href="#" className="btn-product-icon btn-compare"
                                   title="Compare"><span>Compare</span></a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Bags</a>
                            </div>
                            <h3 className="product-title"><a href="https://portotheme.com/html/molla/product.html">Beige
                                ring handle circle cross body bag</a></h3>
                            <div className="product-price">
                                $56.00
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width:'0%'}}></div>
                                </div>
                                <span className="ratings-text">( 0 Reviews )</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</div>



)
}
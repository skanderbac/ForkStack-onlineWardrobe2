import React, {useState, useContext} from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {UserContext} from "../contexts/UserContext";
import queryApi from "../utils/queryApi";

export default function Header(props) {
    const [user, setUser] = useContext(UserContext);
   const user1=sessionStorage.getItem('user');
   const Delete=async(response) => {
       const [res, err] = await queryApi("deleteUser", {}, "DELETE", false);
       sessionStorage.removeItem('user');
       window.location.reload();
   }

    return (
        <div className="page-wrapper">

        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <div className="header-dropdown">
                            <a href="#">Usd</a>
                            <div className="header-menu">
                                <ul>
                                    <li><a href="#">Eur</a></li>
                                    <li><a href="#">Usd</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li><a><i className="icon-phone"></i>Call: +0123 456 789</a></li>

                                    <li><a>About Us</a></li>
                                    <li><a>Contact Us</a></li>
                                    {user1 ?(
                                        <li><a onClick={Delete}>DeleteAccount</a></li>
                                        ):

                                        (<h1></h1>)
                                    }
                                        </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                            <img src="assets/images/onlinewardrobe.png" alt="Molla Logo" style={{width:"150px"}}
                                 width="105" height="25"/>


                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active">
                                    <a href="https://portotheme.com/html/molla/index.html"
                                       className="sf-with-ul">Home</a>
                                </li>
                                <div className="megamenu demo">
                                    <div className="menu-col">
                                    </div>
                                </div>
                                <li>
                                    <a href="/shop"
                                       className="sf-with-ul">Shop</a>

                                </li>
                                {user1 ?
                                    (<li>
                                        <a href="/mywardrobe"
                                           className="sf-with-ul">My Wardrobe</a>


                                    </li>
                                    ):(<h1></h1>)}
                                {user1 ?(
                                    <li>
                                        <a href="/outfits"
                                           className="sf-with-ul">My Outfits</a>


                                    </li>):
                                (<h1></h1>)
                                }

                                {user1 ?(
                                    <li>
                                        <a onClick={()=>{sessionStorage.removeItem('user');
                                                            window.location.reload();}}
                                           className="sf-with-ul">LogOut</a>
                                    </li> ):(
                                    <li>
                                        <a href="/login"
                                           className="sf-with-ul">LogIn</a>
                                    </li>

                                    )}
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="header-search">
                            <a href="#" className="search-toggle" role="button" title="Search"><i
                                className="icon-search"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <label htmlFor="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q"
                                           placeholder="Search in..." required/>
                                </div>
                            </form>
                        </div>
                        <div className="dropdown compare-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false" data-display="static"
                               title="Compare Products" aria-label="Compare Products">
                                <i className="icon-random"></i>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <ul className="compare-products">
                                    <li className="compare-product">
                                        <a href="#" className="btn-remove" title="Remove Product"><i
                                            className="icon-close"></i></a>
                                        <h4 className="compare-product-title"><a
                                            href="https://portotheme.com/html/molla/product.html">Blue Night
                                            Dress</a></h4>
                                    </li>
                                    <li className="compare-product">
                                        <a href="#" className="btn-remove" title="Remove Product"><i
                                            className="icon-close"></i></a>
                                        <h4 className="compare-product-title"><a
                                            href="https://portotheme.com/html/molla/product.html">White Long
                                            Skirt</a></h4>
                                    </li>
                                </ul>

                                <div className="compare-actions">
                                    <a href="#" className="action-link">Clear All</a>
                                    <a href="#" className="btn btn-outline-primary-2"><span>Compare</span><i
                                        className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown cart-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">2</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="https://portotheme.com/html/molla/product.html">Beige
                                                    knitted elastic runner shoes</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a href="https://portotheme.com/html/molla/product.html"
                                               className="product-image">
                                                <img
                                                    src="https://portotheme.com/html/molla/assets/images/products/cart/product-1.jpg"
                                                    alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product"><i
                                            className="icon-close"></i></a>
                                    </div>

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="https://portotheme.com/html/molla/product.html">Blue
                                                    utility pinafore denim dress</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a href="https://portotheme.com/html/molla/product.html"
                                               className="product-image">
                                                <img
                                                    src="https://portotheme.com/html/molla/assets/images/products/cart/product-2.jpg"
                                                    alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product"><i
                                            className="icon-close"></i></a>
                                    </div>
                                </div>

                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price">$160.00</span>
                                </div>

                                <div className="dropdown-cart-action">
                                    <a href="https://portotheme.com/html/molla/cart.html"
                                       className="btn btn-primary">View Cart</a>
                                    <a href="https://portotheme.com/html/molla/checkout.html"
                                       className="btn btn-outline-primary-2"><span>Checkout</span><i
                                        className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>


    )
}




export default function Footer(props){

    return(
        <footer className="footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="widget widget-about">
                                <img src="https://portotheme.com/html/molla/assets/images/logo.png"
                                     className="footer-logo" alt="Footer Logo" width="105" height="25"/>
                                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu
                                        vulputate magna eros eu erat. </p>

                                    <div className="social-icons">
                                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i
                                            className="icon-facebook-f"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i
                                            className="icon-twitter"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i
                                            className="icon-instagram"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i
                                            className="icon-youtube"></i></a>
                                        <a href="#" className="social-icon" target="_blank" title="Pinterest"><i
                                            className="icon-pinterest"></i></a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Useful Links</h4>

                                <ul className="widget-list">
                                    <li><a href="https://portotheme.com/html/molla/about.html">About Molla</a></li>
                                    <li><a href="#">How to shop on Molla</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="https://portotheme.com/html/molla/contact.html">Contact us</a></li>
                                    <li><a href="https://portotheme.com/html/molla/login.html">Log in</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="widget-list">
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Money-back guarantee!</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Terms and conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li><a href="#">Sign In</a></li>
                                    <li><a href="https://portotheme.com/html/molla/cart.html">View Cart</a></li>
                                    <li><a href="#">My Wishlist</a></li>
                                    <li><a href="#">Track My Order</a></li>
                                    <li><a href="#">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights
                        Reserved.</p>
                    <figure className="footer-payments">
                        <img src="https://portotheme.com/html/molla/assets/images/payments.png" alt="Payment methods"
                             width="272" height="20"/>
                    </figure>
                </div>
            </div>
        </footer>
)
}
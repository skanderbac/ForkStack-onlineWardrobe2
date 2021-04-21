



export default function Home(){
    return(
        <main className="main">
            <div className="intro-slider-container">
                <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl"
                     data-owl-options='{
                        "dots": false,
                        "nav": false,
                        "responsive": {
                            "992": {
                                "nav": true
                            }
                        }
                    }'>
                    <div className="intro-slide"
                         style={{ backgroundimage: "url(assets/images/demos/demo-6/slider/slide-1.jpg)"}}>
                        <div className="container intro-content text-center">
                            <h3 className="intro-subtitle text-white">You're Looking
                                Good</h3>
                            <h1 className="intro-title text-white">New Lookbook</h1>

                            <a href="category.html" className="btn btn-outline-white-4">
                                <span>Discover More</span>
                            </a>
                        </div>
                    </div>
                    <div className="intro-slide"
                         style={{backgroundimage: "url(assets/images/demos/demo-6/slider/slide-2.jpg"}}>
                        <div className="container intro-content text-center">
                            <h3 className="intro-subtitle text-white">Don’t Miss</h3>
                            <h1 className="intro-title text-white">Mysrety Deals</h1>

                            <a href="category.html" className="btn btn-outline-white-4">
                                <span>Discover More</span>
                            </a>
                        </div>
                    </div>
                </div>
                <span className="slider-loader"/>
            </div>
            <div className="pt-2 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="banner banner-overlay">
                                <a href="#">
                                    <img src="assets/images/demos/demo-6/banners/banner-1.jpg" alt="Banner"/>
                                </a>

                                <div className="banner-content banner-content-center">
                                    <h4 className="banner-subtitle text-white"><a href="#">New in</a>
                                    </h4>
                                    <h3 className="banner-title text-white"><a href="#"><strong>Women’s</strong></a>
                                    </h3>
                                    <a href="#" className="btn btn-outline-white banner-link underline">Shop Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="banner banner-overlay">
                                <a href="#">
                                    <img src="assets/images/demos/demo-6/banners/banner-2.jpg" alt="Banner"/>
                                </a>

                                <div className="banner-content banner-content-center">
                                    <h4 className="banner-subtitle text-white"><a href="#">New in</a>
                                    </h4>
                                    <h3 className="banner-title text-white"><a href="#"><strong>Men’s</strong></a>
                                    </h3>
                                    <a href="#" className="btn btn-outline-white banner-link underline">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-0 mb-0"/>
                </div>
            </div>
        </main>


)
}

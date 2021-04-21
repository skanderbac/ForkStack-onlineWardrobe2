

export default function Navigation(){
    return(

        <nav className="product-pager ml-auto" aria-label="Product">
            <a className="product-pager-link product-pager-prev" href="#" aria-label="Previous" tabIndex="-1">
                <i className="icon-angle-left"></i>
                <span>Prev</span>
            </a>

            <a className="product-pager-link product-pager-next" href="#" aria-label="Next" tabIndex="-1">
                <span>Next</span>
                <i className="icon-angle-right"></i>
            </a>
        </nav>

    )

}
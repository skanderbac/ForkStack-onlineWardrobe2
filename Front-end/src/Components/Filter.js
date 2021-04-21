import {useHistory} from "react-router-dom";

export default function Filter(props){
    const history=useHistory();
    return(
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
    )
}

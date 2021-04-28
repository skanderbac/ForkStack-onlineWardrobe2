import {useHistory,Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {fetchProducts, selectProducts} from "../Redux/slices/ProductSlice";
import React, {useEffect} from "react";

export default function Filter(props){
    const history=useHistory();
    const products=useSelector(selectProducts);

    return(
<aside className="col-lg-3 order-lg-first" style={{width:"300px"}}>

    <div className="sidebar sidebar-shop" style={{width:'300px',height:'600px'}}>
        <div className="widget widget-clean">
            <label>Filters:</label>
        </div>

        <div className="widget widget-collapsible">
            <h3 className="widget-title">
                <a data-toggle="collapse" href="#widget-1" role="button"
                   aria-expanded="true" aria-controls="widget-1">
                    Type
                </a>
            </h3>

            <div className="collapse show" id="widget-1">
                <div className="widget-body">
                    <div className="filter-items filter-items-count">
                        {products?.map((product, index) => (

                            <div className="filter-item">
                                <div className="custom-control custom-checkbox" style={{textTransform:'uppercase'}}>

                                    <Link
                                        to={{
                                            pathname: '/type'+"/"+product._id,
                                            state: { type: product._id }
                                        }}
                                    onClick={() => window.location.href="/type/"+product._id}>{product._id}
                                    </Link>

                                </div>

                                <span className="item-count">{product.Number}</span>

                    </div>
                        ))}
                </div>
            </div>
        </div>




        <div className="widget widget-collapsible">
            <h3 className="widget-title">

                <a data-toggle="collapse" href="#widget-2" role="button"
                    aria-expanded="true" aria-controls="widget-2">
                Sex
            </a>
            </h3>

            <div className="collapse show" id="widget-2">
                <div className="widget-body">
                    <div className="filter-items filter-items-count">
                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">

                                <Link
                                    to={{
                                        pathname: '/sex/men',
                                        state:{sex:"men" }
                                    }}
                                    onClick={() => window.location.href="/sex/men"}>MEN
                                </Link>

                            </div>


                        </div>
                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">

                                <Link
                                    to={{
                                        pathname: '/sex/women',
                                        state: {sex:"women"}
                                    }}
                                    onClick={() => window.location.href="/sex/women"}>Women
                                </Link>

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
    </div>
    </div>
</aside>
    )
}

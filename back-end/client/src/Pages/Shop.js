import SubHeader from "../Components/SubHeaser";
import ReactPaginate from 'react-paginate';
import useState from 'react';
import {useDispatch, useSelector} from "react-redux";
import useApi  from "../Hooks/useApi";
import Product from "../Components/Product";
import {selectProducts} from "../Redux/slices/ProductSlice";
import Categories from "../Components/Categories";
import React from "react";

export default function Shop(){
    const products=useSelector(selectProducts);
    console.log(products);
    console.log( process.env.REACT_APP_API_URL_UPLOADS);


    return(
        <div>
            <SubHeader pagename={"Shop"}></SubHeader>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <Categories></Categories>
                    </div>
                </div>
            </div>
        </div>



)
}
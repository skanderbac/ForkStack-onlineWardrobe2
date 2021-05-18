import React, {useState} from "react";
import {useHistory} from "react-router-dom";


export default function Aside(props){
    const [product, setProduct] = useState(props.product);
    const history=useHistory();

    return(
        <>
            <div className="filter-item">
                <div className="custom-control custom-checkbox">
                    <a onClick={()=>history.replace("/shoppin"+"/"+product._id)}>
                    <label>{product._id}</label>
                    </a>

                </div>


                <span className="item-count"></span>
            </div>
            </>
    )
}
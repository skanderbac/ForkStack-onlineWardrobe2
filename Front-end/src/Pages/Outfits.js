import React, { Component } from "react";
import Brand from "../Components/Brand";
import ProductAll from "../Components/ProductAll";
import Search from "../Components/Search";
import {Link,useHistory} from "react-router-dom";
import Filter from "../Components/Filter";
import Products from "../Components/Products";
import Wardrobe from "./wadrobe";


export default function Outfits(props) {
    const history=useHistory();
    return(
        <div>
            <h6>First Outfits</h6>
            <Wardrobe></Wardrobe>
            <h6>Second Outfits</h6>

            <Wardrobe></Wardrobe>

        </div>
    )
}
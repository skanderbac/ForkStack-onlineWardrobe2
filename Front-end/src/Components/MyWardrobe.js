import React, { Component, useEffect } from "react";
import {Link,useHistory} from "react-router-dom";
import {Button,Modal} from "react-bootstrap";
import AddWardrobeLeft from "./AddWardrobeLeft";
import axios from "axios";
import { useDispatch } from "react-redux";
import {affichage, selectwardrobe, supprimer} from "../Pages/WardrobeSlice";
import { useSelector } from "react-redux";

export default function Categories(props) {
    const history=useHistory();
    const [selected,setSelected] = React.useState(0);
    const [selectedd,setSelectedd] = React.useState(0);
    const [selectedImg,setSelectedImg] = React.useState("");
    const dispatch = useDispatch()
    const  Dresses = useSelector(selectwardrobe );

    useEffect(() => {
        dispatch(affichage())

    }, [dispatch]);


    const BoxColor = {
        color:'#cc9966'
    };

    const cardSelect="active";
    const CheckBoxes=[
        {
            nom:"Dresses"
        },
        {
            nom:"Shoes"
        },
        {
            nom:"T-Shirts"
        },
        {
            nom:"Bags"
        },
    ];

    const renderBoxes= (box,index1) => {
        return(
            <div className="filter-item" key={index1}>
                <div className="custom-control"
                     onClick={()=>{getList(index1);setSelectedItem(index1);}}
                >
                    <label className="custom-control-label"
                           htmlFor={"cat-"+index1}
                        style={{...(selectedItem === index1 && BoxColor )}}
                    >{box.nom}</label>
                </div>
                <span className="item-count">{calculate(index1)}</span>
            </div>
        );
    };


    /*const DressesInfo=[axios.get("http://localhost:3000/allDresses").then(response =>{ return response})];
    console.log(DressesInfo);*/
    // const DressesInfo=[
    //     {
    //         image:"https://portotheme.com/html/molla/assets/images/products/single/1-small.jpg",
    //         imagebig:"https://portotheme.com/html/molla/assets/images/products/single/1-big.jpg"
    //     },
    //     {
    //         image:"https://portotheme.com/html/molla/assets/images/products/single/2-small.jpg",
    //         imagebig:"https://portotheme.com/html/molla/assets/images/products/single/2-big.jpg"
    //     },
    //     {
    //         image:"https://portotheme.com/html/molla/assets/images/products/single/3-small.jpg",
    //         imagebig:"https://portotheme.com/html/molla/assets/images/products/single/3-big.jpg"
    //     },
    //     {
    //         image:"https://portotheme.com/html/molla/assets/images/products/single/4-small.jpg",
    //         imagebig:"https://portotheme.com/html/molla/assets/images/products/single/4-big.jpg"
    //     },
    // ];
    const renderCard = (card,index) => {
        return(
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className={"product-gallery-item "+ (selected === index && cardSelect) }  key={index}
               data-image="assets/images/products/single/1.jpg"
               data-zoom-image= {card.image}
               onClick={
                   () => {setSelected(index);setSelectedImg(card.image); console.log(index)}
               }
            >
                <img
                    src={card.image} 
                    alt="product side"/>
            </a>
        );
    };

    const ShoesInfo=[
        {
            image:"https://portotheme.com/html/molla/assets/images/products/product-11.jpg",
            imagebig:"https://portotheme.com/html/molla/assets/images/products/product-11.jpg"
        },
        {
            image:"https://portotheme.com/html/molla/assets/images/products/product-8.jpg",
            imagebig:"https://portotheme.com/html/molla/assets/images/products/product-8.jpg"
        },
    ];

    const renderShoes = (card,index) => {
        return(
            <a className={"product-gallery-item "+ (selectedd === index && cardSelect) }  key={index}
               data-image="assets/images/products/single/1.jpg"
               data-zoom-image= {card.imagebig}
               onClick={
                   () => {setSelectedd(index);setSelectedImg(card.imagebig);}
               }
            >
                <img
                    src={card.image}
                    alt="product side"/>
            </a>
        );
    };

    const getList=(indexx)=>{
        switch (indexx) {
            case 0:
                setSelected(0);
                setSelectedBox(Dresses.map(renderCard));
                break;
            case 1:
                setSelected(0);
                setSelectedBox(ShoesInfo.map(renderShoes));
                break;
            default:
        }
    };

    const calculate=(index)=>{
        switch (index) {
            case 0:
                return Dresses.length;
                break;
            case 1:
                return ShoesInfo.length;
                break;
            default:
        }
    };

    const deleteCloth=(index)=>{
        dispatch(supprimer(index))
    };

    const [selectedBox,setSelectedBox] = React.useState(Dresses.map(renderCard));

    const [selectedItem,setSelectedItem] = React.useState(0);

    const [statusModal,setStatsModal] = React.useState(false);

    return(
        <div>
            <Modal show={statusModal}>
                <Modal.Header>Add clothing</Modal.Header>
                <Modal.Body>
                    <AddWardrobeLeft></AddWardrobeLeft>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() =>setStatsModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <main className="main">
                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top">
                            <div className="row">
                                <div className="col-md-6" style={{height:'600px'}}>
                                    <div className="product-gallery product-gallery-vertical">
                                        <div className="row">
                                            <figure className="product-main-image">
                                                <img id="product-zoom"
                                                     src={selectedImg}
                                                     data-zoom-image="assets/images/products/single/1-big.jpg"
                                                     alt="product image"/>

                                                <a href="#" id="btn-product-gallery"
                                                   className="btn-product-gallery"
                                                    onClick={()=>deleteCloth(selectedImg) }
                                                >
                                                    <i className="icon-close"/>
                                                </a>
                                            </figure>
                                            <div id="product-zoom-gallery" className="product-image-gallery">
                                                {selectedBox}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product-details">
                                        <aside className="col-lg-12 order-lg-first">

                                                <h3 className="widget-title">
                                                    <a href="#">
                                                        Category
                                                    </a>
                                                </h3>
                                                <div className="collapse show" id="widget-1">
                                                    <div className="widget-body">
                                                        <div className="filter-items filter-items-count">
                                                            {CheckBoxes.map(renderBoxes)}
                                                        </div>
                                                    </div>
                                                </div>
                                        </aside>
                                    </div>
                                    <div className="form-footer">
                                        <button type="submit" className="btn btn-outline-primary-2 active"
                                                onClick={() =>setStatsModal(true)}
                                        >
                                            <span>Add a clothing</span>
                                            <i className="icon-long-arrow-right"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

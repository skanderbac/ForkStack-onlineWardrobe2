import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createwardrobe,getClasification } from '../Pages/WardrobeSlice'
import FileBase from "react-file-base64";
import {Button,Form} from "react-bootstrap";
import axios, { post } from 'axios';

function AddWardrobeLeft() {

    const dispatch = useDispatch();
    const [dress, setdress] = useState({image :"" , description:""})
    const [img, setImg] = useState({image:""})

    const submit= ()=> {
        dispatch(createwardrobe(dress));
        console.log(dress);
        alert("added !");
    };

    const fileUpload = (file)=>{
        const url = 'http://127.0.0.1:8000/api/predict/';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
    }

    return (
        <div>

            <div className="form">
                <input type="text" className="form-control" placeholder="description" onChange={(e) =>
                    setdress({ ...dress, description: e.target.value })
                }
                />
                <img src={img} />

                <Form.File
                    type="file"
                    multiple={false}
                    //onDone={({ base64 }) =>{setdress({ ...dress, image: base64 });setImg(base64);clasification({ ...img, image: base64 });}}

                    onChange={(e) => {fileUpload(e.target.files[0]);setImg(e.target.files[0].name); }}

                />

                <button onClick={submit} className="btn"> submit </button>
            </div>

        </div>
    )
}

export default AddWardrobeLeft

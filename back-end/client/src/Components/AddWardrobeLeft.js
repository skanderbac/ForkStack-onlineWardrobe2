import React, {useReducer, useState} from 'react'
import { useDispatch } from 'react-redux'
import { createwardrobe,getClasification } from '../Pages/WardrobeSlice'
import FileBase from "react-file-base64";
import {Button,Form} from "react-bootstrap";
import axios, { post } from 'axios';
import useApi from "../Hooks/useApi";


function AddWardrobeLeft() {
    const [users, err, reload] = useApi("profile");
    const [user, setUser] = useState("")
    var userid="";
    var i=0;
    if(users!==null){
        userid=users._id;
    }
    console.log(userid)
    const dispatch = useDispatch();
    const [dress, setdress] = useState({image :"" , description:"",user_id:user,size:"M",type:"Shirt"})
    const [img, setImg] = useState("")
    const [url, setUrl] = useState("")

    const submit= ()=> {
        if(  (dress.description==="") || (dress.size==="") || (dress.type==="") ){
            alert("invalid Form!");
        }
        else{
            dispatch(createwardrobe(dress));
            console.log(dress);
            alert("added !");
        }

    };

    const setTheImageToURL = () => {
        const data = new FormData();
        data.append('file', img);
        data.append('upload_preset', 'px7nwj8x');
        axios.post(
            "https://api.cloudinary.com/v1_1/skander/image/upload",
            data
        ).then((response)=>{
            setImg(response.url);
            console.log(response.url);
            setdress({ ...dress, image: data.url })
        })

        /*fetch('https://api.cloudinary.com/v1_1/skander/image/upload', {
            method: 'post',
            body: data
        })
            .then(res => res.json())
            .then(d => {
                console.log(d.url);
                setUrl(d.url);
                setImg(d.url);
                setdress({ ...dress, image: d.url })
            })
            .catch(err => {
                console.log(err);
            });*/
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

    const fileSize= (file)=>{

        const url = 'http://127.0.0.1:7000/apisize';
        const formData = new FormData();
        formData.append('file1',file);
        formData.append('file2',file);
        formData.append('file3',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        console.log("tesst")
        post(url, formData,config).then((rep)=>console.log(rep.size))
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

                    onChange={(e) => {fileUpload(e.target.files[0]);setImg(e.target.files[0]);fileSize(e.target.files[0]);setTheImageToURL(); }}

                />

                <button onClick={submit} className="btn"> submit </button>
            </div>

        </div>
    )
}

export default AddWardrobeLeft

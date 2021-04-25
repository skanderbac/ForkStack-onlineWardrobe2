import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createwardrobe } from '../Pages/WardrobeSlice'
import FileBase from "react-file-base64";

function AddWardrobeLeft() {

    const dispatch = useDispatch();
    const [dress, setdress] = useState({image :"" , description:""})

    const submit= ()=> {
        dispatch(createwardrobe(dress));
        console.log(dress);
        alert("added !");
    };

    return (
        <div>

            <div className="form">
                <input type="text" className="form-control" placeholder="description" onChange={(e) =>
                setdress({ ...dress, description: e.target.value })
              }
              />

                <FileBase  
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                setdress({ ...dress, image: base64 })
                }
                
                />


                <button onClick={submit} className="btn"> submit </button>
             </div>
            
        </div>
    )
}

export default AddWardrobeLeft

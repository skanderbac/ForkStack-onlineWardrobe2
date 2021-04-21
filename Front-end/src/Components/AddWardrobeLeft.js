import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createwardrobe } from '../Pages/WardrobeSlice'
import FileBase from "react-file-base64";

function AddWardrobeLeft() {

    const dispatch = useDispatch()
    const [dress, setdress] = useState({image :"" , description:""})

    const submit= ()=> {
        dispatch(createwardrobe(dress))
        console.log(dress)
    }

    return (
        <div>

            <div> 
                <input type="text" placeholder="description" onChange={(e) =>
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


                <button onClick={submit}> submit </button>
             </div>
            
        </div>
    )
}

export default AddWardrobeLeft

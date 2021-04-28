import React, {useState} from "react";

const initialState={
    email:'',
    err:'',
    success:''
}

export default function ForgotPassword(props){
   const [data,setData]=useState(initialState);
   const {email,err,success}=data;
    const handleInputChange=e=>{
        const {name,value}=e.target()
        setData({...data,[name]:value,err:'',success: ''})
    }
    const forgotPassword =async ()=>{
    }
    return(
        <>
            <div classname="fg_pass">
                <h2>Forgot your Password</h2>
                <input type="email"
                       className="form-control"
                       id="email"
                       name="email"
                       placeholder="Email*"
                       value={email}
                       onChange={handleInputChange}
                />

            <button onClick={forgotPassword}>Verify your email</button>
            </div>
            </>
    )
}
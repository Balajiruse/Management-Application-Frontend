/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Adduser } from "../Addapi/api";
import { useNavigate } from "react-router-dom";


const AddNewUser=(info,setinfo)=>{
    const [name,setname]=useState("");
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [street,setstreet]=useState("");
    const [city,setcity]=useState("");
    const [state,setstate]=useState("")
    const [phone,setphone]=useState("");
    const [website,setwebsite]=useState("");
    const [companyname,setcompanyname]=useState("")
    const [catchphrase,setcatchphrase]=useState("");
    const [bs,setbs]=useState("");

    const Navigate=useNavigate();

    const addbtn =()=>{
     const newuser={
        name,
        username,
        email,
        street,
        city,
        state,
        phone,
        website,
        companyname,
        catchphrase,
        bs
      }
    Adduser(newuser).then((data)=>{
     Navigate("/")
    }
     
     )

    }



    return(
      <div className=" flex justify-center item-center">
          <div className="form-control items-center w-full max-w-xs flex flex-col justify-center items-center">
            <input type="text"
             placeholder="Enter Name "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={name}
            onChange={(e)=> setname(e.target.value)} />
            <input type="text"
             placeholder="Enter Username "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={username}
            onChange={(e)=> setusername(e.target.value)} />
            <input type="text"
             placeholder="Enter email "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={email}
            onChange={(e)=>setemail(e.target.value)} />
            <input type="text"
             placeholder="Enter Street "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={street}
            onChange={(e)=>setstreet(e.target.value)} />
            <input type="text"
             placeholder="Enter city "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={city}
            onChange={(e)=>setcity(e.target.value)} />
            <input type="text"
             placeholder="Enter State "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={state}
            onChange={(e)=>setstate(e.target.value)} />
            <input type="text"
             placeholder="Enter phone Number "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={phone}
            onChange={(e)=>setphone(e.target.value)} />
            <input type="text"
             placeholder="Enter Website "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={website}
            onChange={(e)=>setwebsite(e.target.value)} />
            <input type="text"
             placeholder="Enter Companny Name "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={companyname}
            onChange={(e)=>setcompanyname(e.target.value)} />
            <input type="text"
             placeholder="Enter Name "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={catchphrase}
            onChange={(e)=>setcatchphrase(e.target.value)} />
            <input type="text"
             placeholder="Enter Name "
              className="input input-bordered input-accent m-1 p-1 w-full max-w-xs"
              value={bs}
            onChange={(e)=>setbs(e.target.value)} />

            <button className="btn btn-outline btn-success" onClick={addbtn}>Add</button>


        </div>
    
      </div>
    )
}

export default AddNewUser;

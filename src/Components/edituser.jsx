/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {  UpdateUsers } from "../Addapi/api";
import { useNavigate } from "react-router-dom";


const UpdateEdited=({info,setinfo,editid})=>{
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
    const[index,setindex]=useState();
    
    const Navigate=useNavigate()

    const finder=editid.id
    useEffect(()=>{
      const editable=info?.filter((data)=>data.id===finder)
      const findIndex= info?.findIndex((data)=>data.id==finder)
      setindex(findIndex)

      if(editable&&editable.length>0){
        setname(editable[0].name);
        setusername(editable[0].username);
        setemail(editable[0].email);
        setstreet(editable[0].street);
        setcity(editable[0].city);
        setstate(editable[0].state);
        setphone(editable[0].phone);
        setwebsite(editable[0].website);
        setcompanyname(editable[0].companyname);
        setcatchphrase(editable[0].catchphrase);
        setbs(editable[0].bs);
      }


    
    },[])

    const editbutton =()=>{
        const edited={
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
        UpdateUsers(finder,edited)
        .then((data) => {
          if(data){
            info[index]=edited;
            setinfo(info);
            Navigate('/');
          }
         
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });

    }



    return(
      <div className=" flex justify-center item-center">
          <div className="form-control items-center w-full max-w-xs flex flex-col justify-center items-center">
            <input type="text"
             placeholder="Enter Name "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={name}
            onChange={(e)=> setname(e.target.value)} />
            <input type="text"
             placeholder="Enter Username "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={username}
            onChange={(e)=> setusername(e.target.value)} />
            <input type="text"
             placeholder="Enter email "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={email}
            onChange={(e)=>setemail(e.target.value)} />
            <input type="text"
             placeholder="Enter Street "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={street}
            onChange={(e)=>setstreet(e.target.value)} />
            <input type="text"
             placeholder="Enter city "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={city}
            onChange={(e)=>setcity(e.target.value)} />
            <input type="text"
             placeholder="Enter State "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={state}
            onChange={(e)=>setstate(e.target.value)} />
            <input type="text"
             placeholder="Enter phone Number "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={phone}
            onChange={(e)=>setphone(e.target.value)} />
            <input type="text"
             placeholder="Enter Website "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={website}
            onChange={(e)=>setwebsite(e.target.value)} />
            <input type="text"
             placeholder="Enter Companny Name "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={companyname}
            onChange={(e)=>setcompanyname(e.target.value)} />
            <input type="text"
             placeholder="Enter catchphrase "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={catchphrase}
            onChange={(e)=>setcatchphrase(e.target.value)} />
            <input type="text"
             placeholder="Enter bs "
              className="input input-bordered input-accent m-2 p-2 w-full max-w-xs"
              value={bs}
            onChange={(e)=>setbs(e.target.value)} />

            <button className="btn btn-outline btn-success" onClick={editbutton}>Update</button>


        </div>
    
      </div>
    )
}

export default UpdateEdited;

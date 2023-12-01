/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Deleteauthor } from "../Addapi/authorapi";
import { updateauthorinfo } from "../Reducers/authorreducer";
import { useEffect } from "react";

const Authorsdisplay=()=>{

    const {authorinfo}=useSelector((state)=>state.Authordata.data)
    const dispatch= useDispatch()
    const navigate=useNavigate()

    useEffect(()=>{},)


    const deletebtn=(id)=>{
        
        Deleteauthor(id).then((data)=>{
         const restauthor=authorinfo.filter((author)=>author.id!=id)
         dispatch(updateauthorinfo(restauthor))
        })

    }


    return(
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 p-5">
        {authorinfo&& authorinfo?.map((data,idx)=>(
           <div className="card w-96 bg-base-100 shadow-xl  image-full" key={idx}>
           <figure><img src={data.avatar} alt={data.title} /></figure>
           <div className="card-body">
             <h2 className="card-title text-red-500 "> <kbd className="balck">Name: {data.name}</kbd></h2>
             <h3 className="card-title text-purple-300 "><kbd className="balck">Born on :{data.birthday}</kbd> </h3>
             <p className="card-title text-white-600" > Bio :{data.description} </p>
             <div className="card-actions justify-end">
               <button className="btn btn-white" onClick={()=>navigate(`/authoredit/${data.id}`)}>Edit </button>
               <button className="btn btn-white" onClick={()=>deletebtn(data.id)}>Delete</button>
             </div>
           </div>
         </div>
        ))}
       </div>
    )

}

export default Authorsdisplay;

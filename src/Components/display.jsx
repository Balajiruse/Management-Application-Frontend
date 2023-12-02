/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { DeleteUsers, GetallUsers } from "../Addapi/api";
import { useNavigate } from "react-router-dom";

export default function Display(){
    const [info,setinfo]=useState();
    const navigate=useNavigate()

   useEffect(()=>{
    GetallUsers().then((data)=>{setinfo(data)});
   },[setinfo])
 

  const deletebtn = (id) => {
    
    DeleteUsers(id)
      .then((data) => {
        const rest = info.filter((item) => item.id !== id);
        setinfo(rest);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };
  
    return(
       <div>
        <div className="navbar bg-base-100">
       <div className="flex-1">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://th.bing.com/th/id/OIP.Uj-MmiHjhzxbFh3RFhrjTAHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7" />
                    </div></label>
                
                <a className="btn btn-ghost normal-case text-xl p-0 m-0">Dashboard</a>
            </div>
        <div className="flex-none gap-2">
            <div className="form-control">
            <button className="btn btn-accent" onClick={()=>navigate('/adduser')}>AddUser</button>

            </div>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="https://th.bing.com/th/id/OIP.shbZSUEaJasMbATldeGfowHaHa?w=210&h=209&c=7&r=0&o=5&pid=1.7" />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  m-5 font-sans ">
            {info&&
                info.map((data,id)=>(
                    <div className="card w-96 bg-neutral shadow-xl  image-full" key={id}>
                    <figure><img src="https://th.bing.com/th/id/OIP.Gh2JQ506gy0d8CEm9aF1rgEgDY?w=219&h=180&c=7&r=0&o=5&pid=1.7" alt="Pic" /></figure>
                    <div className="card-body ">
                      <h2 className="card-title">Name: {data.name}</h2>
                      <h3 className="text-xl">Username: {data.username}</h3>
                      <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">Click to contact Info</label>
                        <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                          <div className="card-body">
                            <h3>Email:{data.email}</h3>
                            <p>Address:
                            {data.street},
                            {data.city},
                            {data.zipcode}.</p>
                           <div>
                              <div>Phone No: {data.phone}</div>
                              <div>Website: {data.website}</div>
                            </div>

                          </div>
                        </div>
                      </div>
                      
                      <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">Click to Company Info</label>
                        <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-secondary text-primary-content">
                          <div className="card-body">
                            <h3>Name:{data.companyname}</h3>
                            <div>
                              <div>Tag:{data.catchphrase}</div>
                              <div>Type:{data.bs}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                    
                     <div className="card-actions justify-end place-self-end gap-2 mt-auto">
                        <button className="btn btn-accent" onClick={()=>navigate(`/edituser/${data.id}`)}> Edit</button>
                        <button className="btn btn-accent" onClick={()=>deletebtn(data.id)}>Delete</button>
                      </div>
                    </div>
                   
                  </div>
                ))
            }

        </div>
       </div>
    )
}


import { useNavigate } from "react-router-dom";
import Background from "./Background";
import { useContext, useEffect } from "react";
import { AppCtx } from "../context/Appcontext";

export default function BasePage({children}){

    //useNavigate is used to navigate between pages
    const navigate=useNavigate();

    //required states is imported using useContext
    const {setResult,switching,setSwitching}=useContext(AppCtx);

    //useEffect is used to make changes when the page is opened
    useEffect(()=>{
           setResult("");
    },[])
    return(
        <div className="base-page-section">
            <Background>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  text-center items-center h-screen ">
            <div className="p-10">
                <b className="font-black text-xl text-neutral"> Management and Billing Application</b>
                <p className="text-neutral">Inventory System to control and manage products in the warehouse in real time and integrated to make it easier to develop your business</p>
            </div>

            <div className="content-center-section mr-10 ml-10">

            <div className="card w-96 mb-72 sm:mb-0 glass visibility-section">
            <div className="card-body">
                
            <div className="join grid grid-cols-2">
            <button className={switching==="register"?"join-item btn btn-outline bg-neutral text-neutral-400 border-0 font-bold":"join-item btn btn-outline text-neutral font-bold"} onClick={()=>{
                navigate("/");
                setSwitching("register")
                }}>Register</button>
            <button className={switching==="login"?"join-item btn btn-outline bg-neutral text-neutral-400 border-0 font-bold":"join-item btn btn-outline text-neutral font-bold"} onClick={()=>{
                navigate("/login");
                setSwitching("login");
                }}>Login</button>
            </div>
            {children}
            </div>
            </div>

            </div>

            </div>
            </Background>
        </div>
    )
}

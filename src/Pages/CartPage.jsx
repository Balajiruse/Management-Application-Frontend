
import { useEffect } from "react";
import Cart from "../Components/Cart";
import WorkSpace from "../Components/WorkSpace";


export default function CartPage(){

    
    //useEffect is used to make changes when the page is loaded
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/")
        }
    },[])

    return(
        <div className="cart-page-section">
            <WorkSpace>
                <Cart/>
            </WorkSpace>
        </div>
    )
}

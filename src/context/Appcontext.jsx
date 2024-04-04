
import { createContext, useState } from "react";


export const AppCtx=createContext(null);

export default function AppContext({children}){
    //required states is created and passed to the AppCtx Provider for global usage
    const [result,setResult]=useState();
    const [switching,setSwitching]=useState();
    const [loading,setLoading]=useState("off");
    const [data,setData]=useState();
    const [productName,setProductName]=useState();
    const [productQuantity,setProductQuantity]=useState();
    const [productPrice,setProductPrice]=useState();
    const [cartObj,setCartObj]=useState([]);
    const [confirm,setConfirm]=useState("off");
    const [cartCount,setCartCount]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [load,setLoad]=useState();
   
    return(
        <AppCtx.Provider
        value={{result,setResult,switching,setSwitching,loading,setLoading,data,setData,productName,productQuantity,productPrice,setProductName,setProductPrice,setProductQuantity,cartObj,setCartObj,confirm,setConfirm,cartCount,setCartCount,totalPrice,setTotalPrice,load,setLoad}}
        >
            {children}
        </AppCtx.Provider>
    )
}

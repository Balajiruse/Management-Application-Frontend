
import { useFormik } from "formik";
import WorkSpace from "../Components/WorkSpace";
import { addSchema } from "../Helpers/Schema";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../Helpers/helper";
import { AppCtx } from "../context/Appcontext";

export default function AddProductPage(){
    //useNavigate is used to navigate between pages
    const navigate=useNavigate();
    //required states is imported using useContext
    const {result,setResult,loading,setLoading}=useContext(AppCtx);
    //formik is used for addproduct form and validation schema as addSchema
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            productName:"",
            productQuantity:"",
            productPrice:"",
            id:localStorage.getItem("id")
        },
        validationSchema:addSchema,
        onSubmit:(object)=>{
            setLoading("on")
            addProduct(object).then((response)=>{
                setTimeout(()=>{
                    setLoading("off");
                    setResult(response.message);   
                },1000);
                setTimeout(()=>{
                    navigate("/dashboard")
                },2000)
            }).catch((response)=>{
                setLoading("off");
                setResult(response.message)});
        }
    })
    //useEffect is used to make changes when the page is loaded
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/");
            console.log("hehehehe")
        };
        setResult("");
        setLoading("off")
    },[])

    return(
        <div className="add-product-section">
            <WorkSpace>
                <div className="content-center-section mt-10">
                <div className="card w-96 glass adding-product-section">
            <div className="card-body text-center ">
            <h2 className="card-title text-center justify-center text-neutral">ADDING A PRODUCT</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs mb-2" value={values.productName} onChange={handleChange} onBlur={handleBlur} name="productName" />
            {touched.productName && errors.productName?(<div className="font-bold text-xs mb-1">{errors.productName}</div>):("")}
            <input type="number" placeholder="Product Quantity" className="input input-bordered w-full max-w-xs mb-2" value={values.productQuantity} onChange={handleChange} onBlur={handleBlur} name="productQuantity" />
            {touched.productQuantity && errors.productQuantity?(<div className="font-bold text-xs mb-1">{errors.productQuantity}</div>):("")}
            <input type="number" placeholder="Product Price" className="input input-bordered w-full max-w-xs mb-2"  value={values.productPrice} onChange={handleChange} onBlur={handleBlur} name="productPrice"/>
            {touched.productPrice && errors.productPrice?(<div className="font-bold text-xs mb-1">{errors.productPrice}</div>):("")}
            <button className="btn glass w-44 mb-2 text-neutral" type="submit">{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Add Product"}</button><br/>
            {result?(<div className="font-bold text-sm mt-3 capitalize">{result}</div>):""}
            </form>
            </div>
            </div>
                </div>
           
          
            
            </WorkSpace>
        </div>
    )
}

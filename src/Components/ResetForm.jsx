
import { useFormik } from "formik";
import { resetSchema } from "../Helpers/Schema";
import { resetPassword } from "../Helpers/helper";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppCtx } from "../context/Appcontext";

export default function ResetForm(){
    //useParams is used to get the id from the url
    const params=useParams();
    const id=params.id;
    //required states is imported using useContext
    const {result,setResult,setSwitching,loading,setLoading}=useContext(AppCtx);

    //formik is used for reset password form and validation schema as resetSchema
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            password:"",
            confirmpassword:""
        },
        validationSchema:resetSchema,
        onSubmit:(object)=>{
            setLoading("on");
            resetPassword(object,id).then((response)=>{
                setTimeout(()=>{
                    setLoading("off");
                    setResult(response.message);
                },1000)
            }).catch((response)=>{
                setLoading("off");
                setResult(response.message)});
           
        }
    })
   //useEffect is used to make changes when the page is opened
    useEffect(()=>{
           setSwitching("reset");
           setLoading("off");
    },[])
    return(
        <div className="reset-form-section">
            <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} name="password"/>
            </label>
            {touched.password && errors.password?(<div className="font-bold text-xs mb-1">{errors.password}</div>):("")}
            <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder="Confirm Password" value={values.confirmpassword} onChange={handleChange} onBlur={handleBlur} name="confirmpassword"/>
            </label>
            {touched.confirmpassword && errors.confirmpassword?(<div className="font-bold text-xs mb-1">{errors.confirmpassword}</div>):("")}
            <button className="btn glass w-44 mb-2 text-neutral font-bold" type="submit">{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Change Password"}</button><br/>
            {result?(<div className="font-bold text-sm mt-3 capitalize">{result}</div>):""}
            </form>
        </div>
    )
}

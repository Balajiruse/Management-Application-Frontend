
import { useFormik } from "formik";
import { forgotSchema } from "../Helpers/Schema";
import { forgotPassword } from "../Helpers/helper";
import { AppCtx } from "../context/Appcontext";
import { useContext, useEffect } from "react";

export default function ForgotForm(){
    //required states is imported using useContext
    const {result,setResult,loading,setLoading}=useContext(AppCtx);
    //useFormik is used for forgot password form with validation Schema as forgotSchema
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:""
        },
        validationSchema:forgotSchema,
        onSubmit:(object)=>{
            setLoading("on");
            forgotPassword(object).then((response)=>{
                setTimeout(()=>{
                    setLoading("off");
                    setResult(response.message);
                },1000)  
            }).catch((response)=>{setLoading("off");
                setResult(response.message)});

        }
    });

    //useEffect is used to make changes when the page is loaded
    useEffect(()=>{
         setLoading("off");
    },[])

    return(
        <div className="forgot-form-section">
            <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur} name="email"/>
            </label>
            {touched.email && errors.email?(<div className="font-bold text-xs mb-1">{errors.email}</div>):("")}
            <button className="btn glass w-44 mb-2 text-neutral font-bold" type="submit">{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Forgot Password"}</button><br/>
            {result?(<div className="font-bold text-sm mt-3 capitalize">{result}</div>):""}
            </form>
        </div>
    )
}

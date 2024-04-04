
import { useFormik } from "formik"
import { registerSchema } from "../Helpers/Schema"
import { registerUser } from "../Helpers/helper";
import { useContext, useEffect } from "react";
import { AppCtx } from "../context/Appcontext";

export default function RegisterForm(){
   //required states is imported using useContext
    const {result,setResult,setSwitching,loading,setLoading}=useContext(AppCtx);
    //formik is used for register user form and validation schema as registerSchema
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:"",
            username:"",
            password:""
        },
        validationSchema:registerSchema,
        onSubmit:(object)=>{
            setLoading("on");
            registerUser(object).then((response)=>{
                setTimeout(()=>{
                    setLoading("off");
                    setResult(response.message);
                },1000)
            }).catch((response)=>{
                setLoading("off");
                setResult(response.message)});
        }
    })
    //useEffect is used to make changes when the page is loaded
    useEffect(()=>{
        setSwitching("register");
        setLoading("off");
    },[])
    return(
        <div className="register-form-section">
            <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="email" className="grow" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" />
            </label>
            {touched.email && errors.email?(<div className="font-bold text-xs mb-1">{errors.email}</div>):("")}
            <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow" placeholder="Username" value={values.username} onChange={handleChange} onBlur={handleBlur} name="username" />
            </label>
            {touched.username && errors.username?(<div className="font-bold text-xs mb-1">{errors.username}</div>):("")}
            <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" />
            </label>
            {touched.password && errors.password?(<div className="font-bold text-xs mb-1">{errors.password}</div>):("")}
            <button className="btn glass w-44 text-neutral font-bold" type="submit">{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Register"}</button>
            {result?(<div className="font-bold text-xs mt-1">{result}</div>):""}
            </form>
        </div>
    )
}

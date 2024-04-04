
import { useFormik } from "formik";
import { loginSchema } from "../Helpers/Schema";
import { useContext, useEffect } from "react";
import { AppCtx } from "../context/Appcontext";
import { loginUser } from "../Helpers/helper";
import { useNavigate } from "react-router-dom";

export default function LoginForm(){
    //required states is imported using useContext  
    const {result,setResult,setSwitching,loading,setLoading}=useContext(AppCtx);
    //useNavigate is used to navigate between pages
    const navigate=useNavigate();
    //formik is used for login form and validation schema as loginSchema
    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:loginSchema,
        onSubmit:(object)=>{
            setLoading("on");
            loginUser(object).then((response)=>{
                if(response.message==="login success"){
                    localStorage.setItem("id",response.data._id);
                    localStorage.setItem("token",response.token);
                    setTimeout(()=>{
                        setLoading("off");
                        setResult(response.message);
                        navigate("/dashboard");
                    },3000)              
                }else{
                    setTimeout(()=>{
                        setLoading("off");
                        setResult(response.message);
                    },1000);
                }
            }).catch((response)=>{
                setLoading("off");
                setResult(response.message)
            });
        }
    })
    //useEffect is used to make changes when the page is loaded
    useEffect(()=>{
        setSwitching("login");
        setLoading("off");
    },[])

    return(
        <div className="login-form-section">
            <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="email" className="grow" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur} name="email"/>
            </label>
            {touched.email && errors.email?(<div className="font-bold text-xs mb-1">{errors.email}</div>):("")}
            <label className="input input-bordered flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" />
            </label>
            {touched.password && errors.password?(<div className="font-bold text-xs mb-1">{errors.password}</div>):("")}
            <button className="btn glass w-44 mb-2 text-neutral font-bold" type="submit">{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Login"}</button><br/>
            <a className="font-medium text-neutral cursor-pointer" onClick={()=>{
                navigate("/forgot");
                setSwitching("forgot");
                }}>Forgot Password?</a>
            {result?(<div className="font-bold text-sm mt-3 capitalize">{result}</div>):""}
            </form>
        </div>
    )
}

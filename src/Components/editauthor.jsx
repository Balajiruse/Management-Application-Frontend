/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { authorschema } from "../Formik/addauthorformik";
import { useFormik } from "formik";
import {  Updateauthor } from "../Addapi/authorapi";
import { updateauthorinfo } from "../Reducers/authorreducer";
import { useNavigate } from "react-router-dom";


const Editauthordata=({editid})=>{
    const {authorinfo}=useSelector((state)=>state.Authordata.data);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    let initialValues = {
        birthday: "",
        name: "",
        description: "",
      };
    
      const updateable = authorinfo && authorinfo?.filter((data) => data.id === editid);
      const updateindex = authorinfo && authorinfo?.findIndex((data) => data.id === editid);
    
      const { values, handleChange, handleSubmit, errors, handleBlur, touched } = useFormik({
        initialValues: updateable ? { ...updateable[0] } : { ...initialValues },
        validationSchema: authorschema,
        onSubmit: (editedauthor) => {
            const updatedInfo = [...authorinfo]; 
            updatedInfo[updateindex] = editedauthor;
            Updateauthor(editid,editedauthor);
          dispatch(updateauthorinfo(updatedInfo));
          navigate('/');
        },
      });
      


    return (
      <div className="flex justify-center items-center m-5">
   
        <form 
        className="form-control items-center w-full max-w-xs flex flex-col justify-center items-center m-5 p-5"
        onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter Author Name "
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}

            className="input input-bordered input-primary w-full max-w-xs m-2"
          />
          {touched.name&&errors.name ?(<div> {errors.name} </div>):""}
          <input
            type="text"
            placeholder="Enter birthday  "
            name="birthday"
            value={values.birthday}
            onBlur={handleBlur}
            onChange={handleChange}
            className="input input-bordered input-secondary w-full max-w-xs m-2"
          />
          {touched.birthday&&errors.birthday ?(<div> {errors.birthday} </div>):""}
          <input
            type="text"
            placeholder="Enter Description  "
            name="description"
            value={values.description}
            onBlur={handleBlur}
            onChange={handleChange}
            className="input input-bordered input-warning w-full max-w-xs m-2"
          />
          {touched.description&&errors.description ?(<div> {errors.description} </div>):""}
          <button className="btn btn-success" type="submit">Update Author</button>
        </form>
      </div>
    );
  };
  
  
export default Editauthordata;

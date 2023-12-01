/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editbookschema } from "../Formik/edibookformik";
import { useFormik } from "formik";
import { Updatebooks } from "../Addapi/Booksapi";
import { updateinfo } from "../Reducers/booksreducer";


const Editbooks=({editid})=>{
    let {info}=useSelector((state)=>state.Bookdata.data)
    const dispatch= useDispatch()
    const navigate=useNavigate()

    let initialValues = {
        publicationdate: "",
        author: "",
        title: "",
        isbn: "",
      };
      const updateable = info && info?.filter((data) => data.id === editid);
      const updateindex = info && info?.findIndex((data) => data.id === editid);
      

    const { values, handleChange, handleSubmit,errors ,handleBlur,touched} = useFormik({
      initialValues: updateable ? { ...updateable[0] } : { ...initialValues },
        validationSchema: editbookschema,
        onSubmit: (edited) => {
          if (edited) {
            const updatedInfo = JSON.parse(JSON.stringify(info));
            updatedInfo[updateindex] = edited;
            Updatebooks(editid, edited);
            dispatch(updateinfo(updatedInfo));
            navigate('/');
          } else {
            console.log("Error dude");
          }
        },          
    });

    

    return (
        <div className="flex justify-center items-center m-5">
    
          <form 
          className="form-control items-center w-full max-w-xs flex flex-col justify-center items-center m-5 p-5"
          onSubmit={handleSubmit}>
              <input
              type="text"
              placeholder="Enter Book Title "
              name="title"
              value={values.title}
              onBlur={handleBlur}
              onChange={handleChange}
  
              className="input input-bordered input-primary w-full max-w-xs m-2"
            />
            {touched.title&&errors.title ?(<div> {errors.title} </div>):""}
            <input
              type="text"
              placeholder="Enter Author Name "
              name="author"
              value={values.author}
              onBlur={handleBlur}
              onChange={handleChange}
              className="input input-bordered input-secondary w-full max-w-xs m-2"
            />
            {touched.author&&errors.author ?(<div> {errors.author} </div>):""}
            <input
              type="text"
              placeholder="Enter Publishing date "
              name="publicationdate"
              value={values.publicationdate}
              onBlur={handleBlur}
              onChange={handleChange}
              className="input input-bordered input-warning w-full max-w-xs m-2"
            />
            {touched.publicationdate&&errors.publicationdate ?(<div> {errors.publicationdate} </div>):""}
            <input
              type="text"
              placeholder="Enter ISBN  "
              name="isbn"
              value={values.isbn}
              onBlur={handleBlur}
              onChange={handleChange}
              className="input input-bordered input-error w-full max-w-xs m-2"
            />
            {touched.isbn&&errors.isbn ?(<div> {errors.isbn} </div>):""}
            <button className="btn btn-success" type="submit">Update Book</button>
          </form>
        </div>
    );


}

export default Editbooks;

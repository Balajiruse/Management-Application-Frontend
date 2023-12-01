import { useFormik } from "formik";
import { bookschema } from "../Formik/addbookformik";
import { Addbook } from "../Addapi/Booksapi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateinfo } from "../Reducers/booksreducer";

const AddNewBook = () => {

    const navigate=useNavigate()
    const {info}=useSelector((state)=>state.Bookdata.data)
    const dispatch=useDispatch()

    
    const { values, handleChange, handleSubmit,errors ,handleBlur,touched} = useFormik({
        initialValues: {
          publicationdate: "",
          author: "",
          title: "",
          isbn: "",
        },
        validationSchema: bookschema,
        onSubmit: (newbook) => {
            Addbook(newbook),
            dispatch(updateinfo([...info,newbook]))
            navigate('/')
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
          <button className="btn btn-success" type="submit">Add Book</button>
        </form>
      </div>
    );
  };
  
  export default AddNewBook;
  

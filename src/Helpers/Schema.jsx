
import * as yup from "yup";

//for user registration form
export const registerSchema=yup.object({
    email:yup.string().required("Please enter email"),
    username:yup.string().required("Please enter username").min(3,"Minimum three letters required").max(8,"Maximum eight letters allowed"),
    password:yup.string().required("Please enter password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
})
//for user login form
export const loginSchema=yup.object({
    email:yup.string().required("Please enter email"),
    password:yup.string().required("Please enter password")
})
//for user forgot password form
export const forgotSchema=yup.object({
    email:yup.string().required("Please enter email"),
})
//for user reset password form
export const resetSchema=yup.object({
    password:yup.string().required("Please enter password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null],"Password doesn't match").required("Please enter password")
})
//for editing product form
export const editSchema=yup.object({
    oldProductName:yup.string().required("Enter product name"),
    productName:yup.string().required("Enter product name"),
    productQuantity:yup.number().required("Enter quantity"),
    productPrice:yup.number().required("Enter price"),
    id:yup.string().required("")
})
//for adding product form
export const addSchema=yup.object({
    productName:yup.string().required("Enter product name"),
    productQuantity:yup.number().required("Enter quantity"),
    productPrice:yup.number().required("Enter price"),
    id:yup.string().required("")
})

import * as yup from "yup";

export const bookschema = yup.object({
  publicationdate: yup.date().required("please enter Publication date "),
  author: yup.string().required("please enter Author Name ").min(4,"Minimum 4 letters required").max(15,"first/last Name is enough"),
  title: yup.string().required("please enter Title  "),
  isbn: yup.number().required("please enter Isbn Number").integer("isbn is always a integer").min(6,"minimum 6 digits"),
  coverpic: yup.string().url().default("https://loremflickr.com/cache/resized/65535_52931834363_80ebc6f0f6_c_640_480_nofilter.jpg"),
});

import * as yup from "yup";

export const Editauthorschema = yup.object({
    birthday: yup.date().required("please enter  birthday "),
    name: yup.string().required("please enter Author Name ").min(4,"Minimum 4 letters required").max(15,"first/last Name is enough"),
    description: yup.string().required("please enter description  "),
    coverpic: yup.string().url().default("https://i.pravatar.cc/300?img=16"),
});

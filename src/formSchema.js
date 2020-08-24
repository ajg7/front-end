import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup
        .string()
        .required("Name is Required"),
    password: yup
        .string()
        .min(7, 'Password must be at least 7 characters long')
        .required('Password is Required'),
})


export default formSchema;
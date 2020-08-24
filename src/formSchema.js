import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is Required"),
    email: yup  
        .string()
        .email("Must be a valid email address")
        .required("Must include email address"),
    password: yup
        .string()
        .min(7, 'Password must be at least 7 characters long')
        .required('Password is Required'),
    className: yup
        .string()
        .required("Class Name is required"),
    classSection: yup
        .string()
})


export default formSchema;
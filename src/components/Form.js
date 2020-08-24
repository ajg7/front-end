import React, { useState } from "react";
import formSchema from "../formSchema";


const Form = props => {

    const [prof, setNewProf] = useState(initialProf)
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);



    const initialFormValues = {
        username: "",
        password: ""
    }

    const initialFormErrors = {
        username: "",
        password: ""
    }

    const initialProf = [];

    const inputChange = (name, value) => {
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [name]: ""
                })
            })
            .catch(error => {
                setFormErrors({
                    ...formErrors,
                    [name]: error.errors[0]
                })
            })
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const submit = () => {
        const newProf ={
            username: formValues.username.trim(),
            password: formValues.password.trim()
        }
        postNewStudents(newProf)
    }


    return(
        <>
            <form>
                <label> Username:
                    <input 
                    type="text"
                    name="username"
                    />                
                </label>
                <label> Password:
                    <input 
                    type="password"
                    name="password"
                    />
                </label>
            </form>
        </>
    )
}

export default Form;
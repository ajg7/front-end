import React, { useState } from "react";
import formSchema from "../formSchema";
import * as yup from "yup";


const Form = () => {

    const initialFormValues = {
        username: "",
        password: ""
    }

    const initialFormErrors = {
        username: "",
        password: ""
    }


    const [loginObj, setLoginObj] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

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

    const onInputChange = event => {
        const { name, value } = event.target;
        inputChange(name, value)
    }

    const submit = () => {
        const newLoginObj ={
            username: formValues.username.trim(),
            password: formValues.password.trim()
        }
        setLoginObj(newLoginObj)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
        console.log(loginObj)
    }


    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="errors">
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
                <div>
                    <label> Username:
                        <input 
                        value={formValues.username}
                        onChange={onInputChange}
                        type="text"
                        name="username"
                        />                
                    </label>
                    <label> Password:
                        <input 
                        value={formValues.password}
                        onChange={onInputChange}
                        type="password"
                        name="password"
                        />
                    </label>
                </div>
                <button>Log In</button>
            </form>
        </>
    )
}

export default Form;
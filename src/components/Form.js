import React, { useState, useEffect } from "react";
import formSchema from "../formSchema";
import * as yup from "yup";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom"


const Form = () => {

    const history = useHistory();

    const initialFormValues = {
        username: "",
        password: ""
    }

    const initialFormErrors = {
        username: "",
        password: ""
    }


    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);

    useEffect(() =>{
        formSchema.isValid(formValues)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [formValues])

    const inputChange = event => {
        const { name, value } = event.target;
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
                console.log(value)
                console.log(valid)
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

    const submit = event => {
        event.preventDefault();
        const existingUser ={
            username: formValues.username.trim(),
            password: formValues.password.trim()
        }
        axiosWithAuth().post("/auth/login", existingUser)
            .then(response => {
                console.log(response)
                localStorage.setItem("token", response.data.token);
                history.push("/protected");
            })
    }


    return(
        <>
            <form onSubmit={submit}>
                <div className="errors">
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>
                <div>
                    <label> Username:
                        <input 
                        value={formValues.username}
                        onChange={inputChange}
                        type="text"
                        name="username"
                        />                
                    </label>
                    <label> Password:
                        <input 
                        value={formValues.password}
                        onChange={inputChange}
                        type="password"
                        name="password"
                        />
                    </label>
                </div>
                <button disabled={disabled}>Log In</button>
            </form>
        </>
    )
}

export default Form;
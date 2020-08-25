import React, { useState } from "react";
import formSchema from "../formSchema";
import axios from "axios";
import * as yup from "yup";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom"



const SignupForm = () => {

    const history = useHistory();


    const initialFormValues = {
        username: "",
        password: ""
    }

    const initialFormErrors = {
        username: "",
        password: ""
    }


    const [loginObj, setLoginObj] = useState({});
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

    const submit = event => {
        event.preventDefault();
        const newUser ={
            username: formValues.username.trim(),
            password: formValues.password.trim(),
            role: 1
        }
        axiosWithAuth().post("/auth/register", newUser)
            .then(response => {
                console.log(response)
                history.push("/login");
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

export default SignupForm;
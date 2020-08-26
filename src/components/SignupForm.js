import React, { useState, useEffect } from "react";
import formSchema from "../formSchema";
import axios from "axios";
import * as yup from "yup";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import StyledForm from "./Form.js";



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
        const newUser ={
            username: formValues.username.trim(),
            password: formValues.password.trim(),
            role: 1
        }
        axios.post("https://better--professor.herokuapp.com", newUser)
            .then(response => {
                console.log(response)
                history.push("/login");
            })
    }



    return(
        <>
            <h1>Sign Up</h1>
                <form onSubmit={submit}>
                    <div className="errors">
                        <div>{formErrors.username}</div>
                        <div>{formErrors.password}</div>
                    </div>
                <StyledForm>
                    <div>
                        <label> Username:
                            <input 
                            value={formValues.username}
                            onChange={inputChange}
                            type="text"
                            name="username"
                            placeholder="Username"
                            />                
                        </label>
                        <label> Password:
                            <input 
                            value={formValues.password}
                            onChange={inputChange}
                            type="password"
                            name="password"
                            placeholder="Password"
                            />
                        </label>
                    </div>
                        <button disabled={disabled}>Submit</button>
                </StyledForm>
                    </form>
        </>
    )
}

export default SignupForm;
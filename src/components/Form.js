import React, { useState } from "react";
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
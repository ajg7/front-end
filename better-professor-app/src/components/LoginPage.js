import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form.js";


const LoginPage = props => {

    return(
        <>
            <h1>Login</h1>
            <h3>or Sign Up</h3>
            <button Link={Form.js}>Sign Up</button>
        </>
    )
}

export default LoginPage;
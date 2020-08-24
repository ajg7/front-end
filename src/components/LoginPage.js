import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form.js";


const LoginPage = props => {

    


    return(
        <>
            <h2>Login</h2>
            <button Link={Form.js}>Log In</button>
            <h2>Sign Up</h2>
            <button>Sign Up</button>
        </>
    )
}

export default LoginPage;
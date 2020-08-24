import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form.js";



const LoginPage = props => {
    return(
        <>
            <h2>Login</h2>
            <Link to="/login"><button>Log In</button></Link>
            <h2>Sign Up</h2>
            <Link to ="/signup"><button>Sign Up</button></Link>
        </>
    )
}

export default LoginPage;
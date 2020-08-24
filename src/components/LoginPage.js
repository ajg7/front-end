import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form.js";


const LoginPage = props => {

    


    return(
        <>
            <h2>Login</h2>
            <Link to="/login/form"><button>Log In</button></Link>
            <h2>Sign Up</h2>
            <button>Sign Up</button>
        </>
    )
}

export default LoginPage;
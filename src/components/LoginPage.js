import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form.js";
import styled from "styled-components";

const LoginPage = props => {
    return(
        <>
            <StyledLoginPage>
                <div>
                    <h2>Login</h2>
                    <Link to="/login"><button>Log In</button></Link>
                    <h2>Sign Up</h2>
                    <Link to ="/signup"><button>Sign Up</button></Link>
                </div>
            </StyledLoginPage>
        </>
    )
}

export default LoginPage;
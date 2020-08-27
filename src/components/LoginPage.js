import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form.js";
import { StyledForm, StyledPage } from "../theme/index";

const StyledLoginPage = StyledForm;

const LoginPage = props => {
    return(
        <>
            <StyledLoginPage>
                <StyledPage>
                    <div>
                        <h2>Login</h2>
                        <Link to="/login"><button>Log In</button></Link>
                        <h2>Sign Up</h2>
                        <Link to ="/signup"><button>Sign Up</button></Link>
                    </div>
                </StyledPage>
            </StyledLoginPage>
        </>
    )
}

export default LoginPage;
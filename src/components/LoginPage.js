import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form.js";
import styled from "styled-components";

const StyledLoginPage = styled.div`

    div {
        border: 2px solid black;
        padding: 10px 10px;

        &:hover {
            background-color: ${({ theme }) => theme.secondaryColor};
            h2 {
                color: ${({ theme }) => theme.primaryColor};
            }
        }
    }

    button {
        border: 4px solid ${({ theme }) => theme.primaryColor};
        border-radius: 20px;
        color: ${({ theme }) => theme.primaryColor};
        background-color: ${({ theme }) => theme.offWhite};
        font-weight: bold;

        &:hover {
            color: ${({ theme }) => theme.offWhite};
            background-color: ${({ theme }) => theme.primaryColor};
            transition: all 0.3s ease-in-out;
        }
    }
`

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
import styled from "styled-components";

export const theme = {
    primaryColor: "#3571A7",
    secondaryColor: "#FFC500",
    offWhite: "#FAFAFA",
    space: "10px 0px",
}

export const StyledForm = styled.div`

    .form-labels {
        border: 3px solid black;
        padding: 10px 10px;
        &:hover {
            background-color: ${({ theme }) => theme.secondaryColor};
            color: ${({ theme }) => theme.primaryColor};
            font-weight: bold;
        }
    }
    label {
        display: flex;
        justify-content: center;
        padding: ${({ theme }) => theme.space};
    }

    button {
        border: 4px solid ${({ theme }) => theme.primaryColor};
        border-radius: 20px;
        text-align: center;
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
export const StyledPage = styled.div`

    div {
        padding: 10px 30px;
        padding-bottom: 30px;

        &:hover {
            background-color: ${({ theme }) => theme.secondaryColor};
            color: ${({ theme }) => theme.primaryColor};
        }
    }

`
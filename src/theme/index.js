import styled from "styled-components";

const theme = {
    primaryColor: "#3571A7",
    secondaryColor: "#FFC500",
    offWhite: "#FAFAFA",
    space: "10px 0px",
}

export default theme;

export const StyledForm = styled.div`

    div {
        border: 2px solid black;
        padding: 10px 10px;

        &:hover {
            background-color: ${ theme => theme.secondaryColor};
            h2 {
                color: ${theme => theme.primaryColor};
            }
        }
    }

    button {
        border: 4px solid ${theme => theme.primaryColor};
        border-radius: 20px;
        color: ${theme => theme.primaryColor};
        background-color: ${theme => theme.offWhite};
        font-weight: bold;

        &:hover {
            color: ${theme => theme.offWhite};
            background-color: ${theme => theme.primaryColor};
            transition: all 0.3s ease-in-out;
        }
    }
`
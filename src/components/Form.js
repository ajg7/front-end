import React from "react";


const Form = props => {

    const initialFormValues = {
        name: "",
        email: "",
        password: "",
        className: "",
        classSection: ""
      }


    return(
        <>
            <form>
                <label> Username:
                    <input 
                    type="text"
                    name="username"
                    />                
                </label>
                <label> Password:
                    <input 
                    type="password"
                    name="password"
                    />
                </label>
            </form>
        </>
    )
}

export default Form;
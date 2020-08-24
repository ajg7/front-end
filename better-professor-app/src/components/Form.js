import React from "react";


const Form = props => {

    return(
        <>
            <form>
                <label> Name:
                    <input 
                    type="text"
                    name="name"
                    />                
                </label>
                <label> Email:
                    <input 
                    type="email"
                    name="email"
                    />
                </label>
                <label> Password:
                    <input 
                    type="password"
                    name="password"
                    />
                </label>
                <label> Class Name: 
                    <input 
                    type="text"
                    name="class name"
                    />  
                </label>
                <label> Class Section: 
                    <input 
                    type="text"
                    name="class section"
                    />  
                </label>
            </form>
        </>
    )
}

export default Form;
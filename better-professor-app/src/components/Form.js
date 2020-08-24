import React from "react";


const Form = props => {

    return(
        <>
            <form>
                <label> Name:
                    <input 
                    type="text"
                    />                
                </label>
                <label> Email:
                    <input 
                    type="email"
                    />
                </label>
                <label> Class Name: 
                    <input 
                    type="text"
                    />  
                </label>
                <label> Class Section: 
                    <input 
                    type="text"
                    />  
                </label>
            </form>
        </>
    )
}

export default Form;
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  username: "",
  password: "",
  role: 1
}

const DirtyLogin = () => {
  const [creds, setCreds] = useState(initialFormValues) 
  const history = useHistory()

  const handleOnChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value 
    })
  }
  const register = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/auth/login', creds)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        history.push('/protected')
      })
  }
    return(
        <>
            <form onSubmit={register}>
                <label> Name:
                    <input 
                    type="text"
                    name="username"
                    value={creds.username}
                    onChange={handleOnChange}
                    />                
                </label>
                <label> Password:
                    <input 
                    type="password"
                    name="password"
                    value={creds.password}
                    onChange={handleOnChange}
                    />
                </label>
                <button>regg</button>
            </form>
        </>
    )
}

export default DirtyLogin;
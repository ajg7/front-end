import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function MessageEdit() {
  const [formValues, setFormValues] = useState({
    
  })
  useEffect( () => {
    axiosWithAuth()
      .get(`/messages`)
      .then(res => {
        console.log("messages", res);
        // setMessages(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <form>
      <input/>
      <input/>
    </form>
  )
}

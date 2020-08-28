import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function ProjectEdit() {
  const history = useHistory()
  const proID = localStorage.getItem('user_id')
  const [formValues, setFormValues] = useState({
    projectTitle: "",
    dueDate: "",
  })

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  
  const editAssignemnt = (e) => {
    e.preventDefault()
    
    const updatedAssignment = {
      projectTitle: formValues.projectTitle,
      dueDate: formValues.dueDate,
    } 
    axiosWithAuth()
      .put(`/professor/${proID}/projects/${e.target.value}`, updatedAssignment) 
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))  
  }

  return (
    <div>
      <form onSubmit={editAssignemnt}>
        <input
          type='text'
          name='projectTitle'
          value={formValues.projectTitle}
          onChange={handleOnChange}
        />
        <input 
          type="date"
          name='projectDate'
          value={formValues.projectDate}
          onChange={handleOnChange}
        />
        <button>submit</button>  
      </form>
    </div>
  )
}

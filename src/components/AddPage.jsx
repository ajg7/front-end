import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchStudents } from '../store'
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initFormValues = {
  studentName: '',
  projectName: '',
  projectDate: '',
  message:'',
  messageRecipient:'',
  messageDate: '',
  messageTime: '',


}
const AddPage = (props) => {
const [formValues, setFormValues] = useState(initFormValues)
const id = localStorage.getItem('user_id')
console.log(props.students);
  useEffect(() => {
    props.fetchStudents(id)
  }, []);

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const createNewStudent = (e) => {
    e.preventDefault()
    const newStudent = {
      "name": formValues.studentName,
      "student": 7 
    }

    axiosWithAuth()
      .post(`/professor/${id}/students`, newStudent)
      .then(res => {
        console.log(res)
        setFormValues({...formValues, studentName: ''})
      })
      
  }

  const createNewAssignment = (e) => {
    e.preventDefault()
    const newAssignment = {
      projectTitle: formValues.projectName,
      dueDate: formValues.projectDate,
    } 
    axiosWithAuth()
      .post(`/professor/${id}/projects`, newAssignment) 
      .then(res => {
        console.log(res)
        setFormValues({
          ...formValues,   
            projectName: '',
            projectDate: '',
        })
      })

  }

  const createNewAutoMessage = (e) => {
    e.preventDefault()
    const newAutoMessage = {
      message: formValues.message,
      reciver: formValues.messageRecipient
    } 
    axiosWithAuth()
      .post(`/professor/${id}/messages`, newAutoMessage) 
      .then(res => {
        console.log(res)
        setFormValues({
          ...formValues, 
            message:'',
            messageRecipient:'',
            messageDate: '',
            messageTime: '',
        })
      })

  }

  return (
    <div className='add-card-conatiner'>

      <div className='add-card'>
        <h2>Add Student</h2>
        <input
          type='text'
          name='studentName'
          placeholder='Student Name'
          value={formValues.studentName}
          onChange={handleOnChange}
        />
        <br/>
        <button onClick={createNewStudent}>Add Student</button>
      </div>
      
      <div className='add-card'>
        <h2>Add Assignment</h2> 
        <input
          type='text'
          name='projectName'
          placeholder='Assignment Title'
          value={formValues.projectName}
          onChange={handleOnChange}
        />
        <input
          type='date'
          name='projectDate'
          value={formValues.projectDate}
          onChange={handleOnChange}
        />
        <br/>
        <button onClick={createNewAssignment}>Add Assignment</button>
      </div>
      
      <div className='add-card'>
        <h2>Add Auto Message</h2>
        <div>
          <select name="messageRecipient" onChange={handleOnChange}>
            <option value="">Myself</option>
            {
              props.students.map(s => {
                return (<option value={s.id}>{s.name}</option>)
              })
            }
          </select>
          <input
            type='date'
            name='messageDate'
            value={formValues.messageDate}
            onChange={handleOnChange}
            />
          <input
            type='time'
            name='messageTime'
            value={formValues.messageTime}
            onChange={handleOnChange}
            />
          <br/>
          <textarea
            name='message'
            value={formValues.message}
            onChange={handleOnChange}
          />
          <br/>
          <button onClick={createNewAutoMessage}>Add Auto Messsage</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    students: state.students,
  }
}
export default connect(mapStateToProps, {fetchStudents})(AddPage)
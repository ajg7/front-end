import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchStudents } from '../store'
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initFormValues = {
  addName: '',
  addProject: '',
  projectDate: '',


}
const AddPage = (props) => {
const [formValues, setFormValues] = useState(initFormValues)

  useEffect(() => {
    props.fetchStudents()
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
      name: formValues.addName,
      student: `${Math.floor(Math.random() * 1000)}`
    }
    axiosWithAuth()
      .post('/professor/1/students', newStudent)
      .then(res => {
        console.log(res)
      })
  }

  const createNewAssignment = () => {

  }

  const createNewAutoMessage = () => {

  }

  return (
    <div className='add-card-conatiner'>
      <div className='add-card'>
        <h2>Add Student</h2>
        <input
          type='text'
          name='addName'
          placeholder='Student Name'
          value={formValues.addName}
          onChange={handleOnChange}
        />
        <br/>
        <button onClick={createNewStudent}>Add Student</button>
      </div>
      <div className='add-card'>
        <h2>Add Assignment</h2>
        <input
          type='text'
          name='title'
          placeholder='Assignment Title'
        />
          <input
            type='date'
            />
        <br/>
        <button>Add Assignment</button>
      </div>
      <div className='add-card'>
        <h2>Add Auto Message</h2>
        <div>
          <select id="students" name="students">
            <option value="">Myself</option>
            {
              props.students.map(s => {
                return (<option value={s.username}>{s.username}</option>)
              })
            }
          </select>
          <input
            type='date'
            />
          <input
            type='time'
            />
          <br/>
          <textarea/>
          <br/>
          <button>Add Auto Messsage</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
return {
  students: state.students,    
  isLoading: state.isLoading,
  error: state.error, 
}
}
export default connect(mapStateToProps, {fetchStudents})(AddPage)
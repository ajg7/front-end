import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { sortStudents } from '../store'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const StudentPage = (props) => {
  const history = useHistory()
  const id = useParams().id
  const proID = localStorage.getItem('user_id')
  const [assignments, setAssignments] = useState([])
  const [student, setStudent] = useState([])
  const [messages, setMessages] = useState([])
  const [isEditing, setIsEditing] = useState({
    name: false,
  })
  const [formValues, setFormValues] = useState({
    name: '',
  })

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  const startEdit = (e) => {
    setIsEditing({
      ...isEditing,
      [e.target.name]: true
    })
    setFormValues({ ...formValues, name: student[0].name })
  }

  useEffect(() => {
    props.sortStudents(id)

    axiosWithAuth()
      .get(`/professor/${proID}/projects`)
      .then(res => {
        console.log("list of projects", res)
        setAssignments(res.data.data)
      })
      .catch(err => console.log(err))

    axiosWithAuth()
      .get(`/messages`)
      .then(res => {
        console.log("messages", res);
        setMessages(res.data.data)
      })
      .catch(err => console.log(err))
    setStudent(props.currentStudent)
  }, [messages.length])
  //============================================================================
  //                                  STUDENT                                   
  //============================================================================
  const editStudent = (e) => {
    e.preventDefault()
    const updatedStudent = {
      name: formValues.name
    }
    axiosWithAuth()
      .put(`/professor/${proID}/students/${id}`, updatedStudent)
      .then(res => {
        console.log(res)
        student[0].name = formValues.name
        setIsEditing(!isEditing)

      })
      .catch(err => console.log(err))
  }

  const deleteStudent = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .delete(`/professor/${proID}/students/${id}`)
      .then(res => {
        console.log('Student deleted', res)
        history.push("/protected")
      })
      .catch(err => console.log(err))
  }
  //============================================================================
  //                                ASSIGNMENT                                  
  //============================================================================
  const deleteAssignemnt = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    axiosWithAuth()
      .delete(`/professor/${proID}/projects/${e.target.value}`)
      .then(res => {
        console.log("Assignment deleted", res)
      })
      .catch(err => console.log(err))
  }
  //============================================================================
  //                                 MESSAGE                                    
  //============================================================================
  const deleteMessage = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .delete(`/messages/${e.target.value}`)
      .then(res => {
        console.log("deleted", res);
      })
      .catch()
  }

  return (
    <>
      { student.map(s => {
        return (
          <>
            { isEditing.name ? (
                <form onSubmit={editStudent}>
                  <input
                    type="text"
                    name='name'
                    value={formValues.name}
                    onChange={handleOnChange}
                  />
                  <button>submit</button>
                </form>
              ) : (
                <>
                  <h2>{s.name}</h2>
                  <button name="name" onClick={startEdit}>edit</button>
                  <button onClick={deleteStudent}>delete</button>
                </>
              )
            }

            <ul>
              { assignments.map(task => {
                  return (
                    <>
                      <li>{task.projectTitle}  Due Date: {task.dueDate}</li>
                      <button onClick={() => { history.push(`/project-page/edit/${task.id}`) }}>edit</button>
                      <button value={task.id} onClick={deleteAssignemnt}>delete</button>
                    </>
                )})
              }
            </ul>

            <h2>Messages</h2>
            { messages.map(m => {
                return (
                  <>
                    <div>{m.message}</div>
                    <button value={m.id} onClick={() => { history.push(`/message-page/edit/${m.id}`) }}>edit</button>
                    <button value={m.id} onClick={deleteMessage}>delete</button>
                  </>
              )})
            }

          </>
      )})}
    </>
  );
}
const mapStateToProps = state => {
  return {
    currentStudent: state.currentStudent
  }
}
export default connect(mapStateToProps, { sortStudents })(StudentPage)


import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchStudents } from '../store'
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import StudentCard from './StudentCard';
import MessageCard from './MessageCard';
import Header from './Header'

const Dashboard = (props) => {
  const history = useHistory()
  console.log(props.students);
  
  const [listStudents, setListStudents] = useState([]);
  const [listMessages, setListMessages] = useState([]);
  const id = localStorage.getItem('user_id')


  useEffect(() => {
    props.fetchStudents(id)
    axiosWithAuth()
      .get(`/professor/${id}/students`)
      .then(response => {
        console.log(response);
        setListStudents(response.data.data)
      })
    axiosWithAuth()
      .get("/messages")
      .then( res => {
        setListMessages(res.data.data)
      })
  }, []);
 
  return (
    <>
    <Header/>
      <div className='student-list'>
        <div className='heading'>
          <h2>Students</h2>
        </div>
        <br/>
        {
          listStudents.map( student => {
            return(<StudentCard student={student}/>)
          }) 
        }
      </div>
      <div className='student-list'>
        <div className='heading'>
          <h2>Messages</h2>
        </div>
        <br/>
        {
          listMessages.map( message => {
            return(<MessageCard message={message}/>)
          }) 
        }
      </div>
    </>
  )
}
const mapStateToProps = state => {
  return {
    students: state.students,    
    isLoading: state.isLoading,
    error: state.error, 
  }
}
export default connect(mapStateToProps, {fetchStudents})(Dashboard)
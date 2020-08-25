import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchStudents } from '../store'
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import StudentCard from './StudentCard';
import MessageCard from './MessageCard';
import Header from './Header'

const Dashboard = (props) => {
  const history = useHistory()

  const [listStudents, setListStudents] = useState([]);

  useEffect(() => {
    axiosWithAuth().get("https://better--professor.herokuapp.com/users")
      .then(response => {
        setListStudents(response.data.data)
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
          listStudents.map( student => {
            return(<MessageCard student={student}/>)
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
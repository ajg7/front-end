import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchStudents } from '../store'
import { connect } from "react-redux";
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
      <div>
        <h1>Professor Name</h1>
        <button onClick={() => history.push('/add')}> + </button>
      </div>
      <div>
        {
          listStudents.map( s => {
            return(<div>{s.username}</div>)
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
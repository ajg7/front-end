import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchStudents } from '../store'
import { connect } from "react-redux";

const Dashboard = (props) => {
  const history = useHistory()

  useEffect(() => {
    props.fetchStudents()
  }, []);
 
  return (
    <>
      <div>
        <h1>Professor Name</h1>
        <button onClick={() => history.push('/add')}> + </button>
      </div>
      <div>
        {
          props.students.map( s => {
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
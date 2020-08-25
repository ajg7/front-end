import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchStudents } from '../store'
import { connect } from "react-redux";


const AddPage = (props) => {

  useEffect(() => {
    props.fetchStudents()
  }, []);

  return (
    <>
      <div>
        <h2>Add Student</h2>
        <input
          type='text'
          name='name'
          placeholder='Student Name'
        />
        <br/>
        <button>Add Student</button>
      </div>
      <div>
        <h2>Add Assignment</h2>
        <input
          type='text'
          name='title'
          placeholder='Assignment Title'
        />
        <input
          type='text'
          name='date'
          placeholder='Due Date'
        />
        <br/>
        <button>Add Assignment</button>
      </div>
      <div>
        <h2>Add Auto Message</h2>
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
export default connect(mapStateToProps, {fetchStudents})(AddPage)
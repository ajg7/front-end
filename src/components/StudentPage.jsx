import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import {sortStudents} from '../store'

const StudentPage = (props) => {
  console.log(props);
  const id = useParams().id

  useEffect(() => {
    props.sortStudents(id)
  }, [])

  console.log(props.currentStudent);

  return (
    <>
      {
        props.currentStudent.map(s => {
          return(
            <>
              <h2>{s.name}</h2>
              <h2>student-id: {s.id}</h2>
              <h2>professor: {s.professor}</h2>
              <h2>student: {s.student}</h2>
            </>
          )
        })
      }
    </>
  );
}
const mapStateToProps = state => {
  return {
    currentStudent: state.currentStudent
  }
}
export default connect(mapStateToProps, {sortStudents})(StudentPage)


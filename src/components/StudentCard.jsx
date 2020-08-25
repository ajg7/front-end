import React from 'react'
import { useHistory } from 'react-router-dom'

const StudentCard = (props) => {
  const history = useHistory()
  return (
    <div onClick={() => history.push('/student-page')} className='student-card'>
      <h4>{props.student.username}</h4>
    </div>
  )
}

export default StudentCard

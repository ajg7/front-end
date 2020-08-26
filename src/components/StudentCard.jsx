import React from 'react'
import { useHistory} from 'react-router-dom'

const StudentCard = (props) => {
  const history = useHistory()
  return (
    <>
    <div onClick={() => history.push(`/student-page/${props.student.id}`)} className='student-card'>
      <h4>{props.student.name}</h4>
    </div>
  </>
  )
}

export default StudentCard

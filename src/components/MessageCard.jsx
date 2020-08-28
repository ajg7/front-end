import React from 'react'
import { useHistory } from 'react-router-dom'

const MessageCard = (props) => {
  const history = useHistory()
  return (
    <div onClick={() => history.push(`/message-page/${props.message.id}`)} className='student-card'>
      <h4>{props.message.message}</h4>
    </div>
  )
}

export default MessageCard

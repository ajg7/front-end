import React from 'react'
import { useHistory } from 'react-router-dom'

const MessageCard = (props) => {
  const history = useHistory()
  return (
    <div onClick={() => history.push('/message-page')} className='student-card'>
      <h4>message title</h4>
    </div>
  )
}

export default MessageCard

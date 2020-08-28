import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const MessagePage = () => {
  const messageId = useParams()
  useEffect(() => {
    axiosWithAuth()
      .get()
      .then(res => {
        console.log(res)
      })
  }, []);
  return (
    <>
      <div className='message-card'>
        <h2>Message Title</h2>
        <p>who it is meant for</p>
        <p>time and date</p>
        <p>The message</p>
        <button>delete</button>
        <button>edit</button>
      </div>
      
    </>
  );
}

export default MessagePage;
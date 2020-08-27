import React from 'react';

const MessagePage = () => {
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
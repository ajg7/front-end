import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory()
  return (
    <>
      <div>
        <h1>Professor Name</h1>
        <button onClick={() => history.push('/add')}> + </button>
      </div>
      <div>
        <ul>
          <li>Jim Halpert</li>
          <li>Sam Fisher</li>
          <li>James Bond</li>
        </ul>
      </div>
    </>
  )
}

export default Dashboard
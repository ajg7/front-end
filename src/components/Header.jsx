import React from 'react'
import { useHistory } from 'react-router-dom'
import plusicon from '../icons/plusicon.png'

const Header = () => {
  const history = useHistory()
  return(
    <div className='header'>
      <h1> The Better Professor</h1>
        <img src={plusicon} className="add-button" onClick={() => history.push('/add')}/> 
    </div>
  )
}

export default Header
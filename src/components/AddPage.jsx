import React from 'react';


const AddPage = () => {
  return (
    <>
      <div>
        <h2>Add Student</h2>
        <input
          type='text'
          name='name'
          placeholder='Student Name'
        />
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
      </div>
      <div>
        <h2>Add Auto Message</h2>
        <select id="cars" name="cars">
          <option value="">Myself</option>
          <option value="Sam">Sam Fsher</option>
          <option value="James">James Bond</option>
          <option value="Jim">Jim Halpert</option>
        </select>
        
      </div>
    </>
  )
}

export default AddPage
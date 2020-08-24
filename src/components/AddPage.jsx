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
        <br/>
        <button>Add Student</button>
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
        <br/>
        <button>Add Assignment</button>
      </div>
      <div>
        <h2>Add Auto Message</h2>
        <select id="students" name="students">
          <option value="">Myself</option>
          <option value="Sam">Sam Fisher</option>
          <option value="James">James Bond</option>
          <option value="Jim">Jim Halpert</option>
        </select>
        <input
          type='date'
        />
        <input
          type='time'
        />
        <br/>
        <textarea/>
        <br/>
        <button>Add Auto Messsage</button>
      </div>
    </>
  )
}

export default AddPage
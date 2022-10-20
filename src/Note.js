import React from 'react'

export const Note = ({activeNote, updateNote}) => {

  const editField = (field, value) => {
    updateNote({
      ...activeNote,
      [field]: value,
    });
  };
  return (
    <div className="col-8">
      {!activeNote ? <div className='noNote'>No Active Note</div> : 
      <>
      <h1>My note</h1>
        <input 
          type="text" 
          id='title' 
          className="form-control my-2" 
          value={activeNote.title}
          onChange={(e) => editField("title", e.target.value)}
          autoFocus
        />
      
        <textarea 
          id='body' 
          placeholder='Write your note here ...' 
          className="form-control" 
          value={activeNote.body}
          onChange={(e) => editField("body", e.target.value)}
        />
      </>
      }
        

    </div>
  )
}

import React from 'react'

export const ListOfNotes = ({
  notes, 
  addNote, 
  activeNote, 
  setActiveNote
}) => {
  return (
    <div className="col-4">
        <div className='row d-flex align-items-center'>
            <h1 className='col-8'>
                All Notes
            </h1>
            <button type="button" onClick={addNote} className="btn btn-light btn-sm" style={{width: 'fit-content', height: 'fit-content'}}>Add Notes</button>
        </div>
        {notes.map((note) => (
          <div className={`hover p-2 ${note.id === activeNote && 'active'}`} key={note.id} onClick={() => setActiveNote(note.id)}>
            <h2>{note.title}</h2>
            <p>{note.body && note.body.substr(0, 20) + "..."}</p>
          </div>
        ))}
        
    </div>
  )
}


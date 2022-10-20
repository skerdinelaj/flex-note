import { Note } from './Note';
import { ListOfNotes } from './ListOfNotes';
import './App.css';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

function App() {

  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "New Note",
      body: "",
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const updateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className='row px-3'>
      <ListOfNotes 
        notes={notes} 
        addNote={addNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Note activeNote={getActiveNote()} updateNote={updateNote}/>
    </div>
  );
}

export default App;

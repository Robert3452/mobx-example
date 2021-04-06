import React, { useState, useEffect } from 'react'
import Notes from './components/Notes';
import data from './data';
import { v4 as uuid } from 'uuid';


export default function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(data);
  }, [])

  const addNote = () => {
    setNotes([...notes, { id: uuid(), task: "New task" }])
  }
  const onDelete = (id, e) => {
    e.stopPropagation();
    setNotes(notes.filter(e => e.id !== id));
  }

  return (
    <div className="">
      <button onClick={addNote}>+</button>
      <Notes onDelete={onDelete} notes={notes} />
    </div>
  )
}

import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";
import axios from 'axios';

// npm run server -- to run json server

const initialNote = [
  {
    id: 1,
    title: "Work to do",
    time: "Today 8:00 AM",
    done: false,
  },
];


function App() {
  const [notes, setNotes] = useState(initialNote);

  

useEffect(() => {
  axios.get('http://localhost:9000/todos')
   .then(response => response.data)
   .then(notesData => setNotes(notesData))
}, [])

const addNewNote = (newNote) => {
  const updatedNotes = [ ...notes, newNote]
  axios.post('http://localhost:9000/todos', newNote)
  setNotes(updatedNotes)
}

  const deleteNote = (noteId ) => {
    axios.delete(`http://localhost:9000/todos/${noteId}`)
  }

  return (
    <div className="application">
      <h1 className="app-name">TODO</h1>
      <div className="todo-container">
        <Header />
        <TodoInput onAddNote={addNewNote}/>
        {notes.map((note) => (
          <Todo key={note.id} title={note.title} time={note.time} id={note.id} onTodoDelete={deleteNote}/>
        ))}
      </div>
    </div>
  );
}

export default App;

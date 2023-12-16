import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

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

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:9000/todos')
      const todosData = await response.json()
      setNotes(todosData)
      if(!response.ok) throw new Error
    } catch (error) {
      console.log(error, "Failed fetching data")
    }
   }

useEffect(() => {
  fetchData()
}, [])

  return (
    <div className="application">
      <h1 className="app-name">TODO</h1>
      <div className="todo-container">
        <Header />
        <TodoInput />
        {notes.map((note) => (
          <Todo key={note.id} title={note.title} />
        ))}
      </div>
    </div>
  );
}

export default App;

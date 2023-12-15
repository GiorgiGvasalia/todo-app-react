import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

const initialNote = [
  {
    id: 1,
    title: "Work to do",
    done: false,
  },
  {
    id: 2,
    title: "Workghghgh",
    done: false,
  },
];



function App() {

  const [notes, setNotes] = useState(initialNote);

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

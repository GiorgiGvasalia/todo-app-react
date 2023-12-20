import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";
import todosServices from "./services/todos.js";

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
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    todosServices.getAll().then((notesData) => setNotes(notesData));
  }, []);

  const addNewNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    todosServices.create(newNote);
    setNotes(updatedNotes);
  };

  const deleteTodoNote = (noteId) => {
    todosServices.deleteTodo(noteId).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    });
  };

  const handleTodoStatusChange = (todoId, newDoneStatus) => {
    todosServices
      .changeTodoDoneStatus(todoId, newDoneStatus)
      .then(() => {
        setNotes((prevTodos) => {
          return prevTodos.map((todo) => {
            if (todo.id === todoId) {
              return { ...todo, done: newDoneStatus };
            }
            return todo;
          });
        });
      })
      .catch((error) => {
        console.error("Failed to update todo done status:", error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    todosServices.getAll().then((notesData) => setNotes(notesData));
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="application">
      <h1 className="app-name">TODO</h1>
      <div className="todo-container">
        <Header currentTime={currentTime} />
        <TodoInput onAddNote={addNewNote} />
        {notes.map((note) => (
          <Todo
            key={note.id}
            title={note.title}
            time={note.time}
            id={note.id}
            onTodoDelete={deleteTodoNote}
            isDone={note.done}
            onCheckboxClick={handleTodoStatusChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

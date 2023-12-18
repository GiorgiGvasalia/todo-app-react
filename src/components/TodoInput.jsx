import "./TodoInput.css";
import addNoteIcon from "../images/Frame9.png";
import { useState } from "react";

const TodoInput = ({ onAddNote, onTodoDone }) => {
  const [todoInput, setTodoInput] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleAddNote = (e) => {
    e.preventDefault();
    if(!todoInput) return
    const newNote = {
      title: todoInput,
      id: Math.floor(Math.random() * 100),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      done: isDone,
    };
    onAddNote(newNote);
    onTodoDone(newNote.id, isDone); 
    setTodoInput('');
    setIsDone(false); 
  };

  const handleCheckboxChange = () => {
    setIsDone((prevIsDone) => !prevIsDone);
  };

  return (
    <div className="input">
      <input type="checkbox" checked={isDone} onChange={handleCheckboxChange} className="input-checkbox" name="" id="" />
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="note-input"
        type="text"
        placeholder="Note"
      />
      <img className="add-note-icon" src={addNoteIcon} alt="" onClick={handleAddNote} />
    </div>
  );
};

export default TodoInput;

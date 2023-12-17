import "./TodoInput.css";
import addNoteIcon from "../images/Frame9.png";
import { useState } from "react";

const TodoInput = ({ onAddNote}) => {
  const [todoInput, setTodoInput] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault()
    const newNote = {
      title: todoInput,
      id:  Math.random() > 0.5,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })    
    }
    onAddNote(newNote)
    setTodoInput('')

  }

  return (
    <div className="input">
      <input type="checkbox" className="input-checkbox" name="" id="" />
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="note-input"
        type="text"
        placeholder="Note"
      />
      <img className="add-note-icon" src={addNoteIcon} alt="" onClick={handleAddNote}/>
    </div>
  );
};

export default TodoInput;

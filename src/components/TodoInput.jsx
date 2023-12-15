import './TodoInput.css'
import addNoteIcon from "../images/Frame9.png"


const TodoInput = () => {
  return (
     <div className="input">
       <input type="checkbox" className='input-checkbox' name="" id="" />
        <input className="note-input" type="text" placeholder="Note" />
        <img className="add-note-icon" src={addNoteIcon} alt="" />
      </div>
  )
}

export default TodoInput
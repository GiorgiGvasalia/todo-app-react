import DeleteIcon from "./DeleteIcon";
import "./Todo.css";


const Todo = ({ id, title, time, onTodoDelete, isDone }) => {
  return (
    <div className="single-container">
      <div className="todo-info">
        <p className="todo-title">{title}</p>
        <span className="todo-time">{time}</span>
      </div>
      <div className="todo-status">
        <input type="checkbox" className={isDone ? 'todo-done' : ''} name="" id="" />
        <DeleteIcon onTodoDelete={() => onTodoDelete(id)} noteId={id} />
      </div>
    </div>
  );
};

export default Todo;

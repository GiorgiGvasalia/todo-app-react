import DeleteIcon from "./DeleteIcon";
import "./Todo.css";


const Todo = ({ id, title, time, onTodoDelete }) => {
  return (
    <div className="single-container">
      <div className="todo-info">
        <p>{title}</p>
        <span>{time}</span>
      </div>
      <div className="todo-status">
        <input type="checkbox" name="" id="" />
        <DeleteIcon onTodoDelete={() => onTodoDelete(id)} noteId={id} />
      </div>
    </div>
  );
};

export default Todo;

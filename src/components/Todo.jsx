import DeleteIcon from "./DeleteIcon";
import "./Todo.css";

const Todo = ({title}) => {
  return (
    <div className="single-container">
      <div className="todo-info">
        <p className="todo-title">{title}</p>
        <span className="todo-time">today 8:00</span>
      </div>
      <div className="todo-status">
        <input type="checkbox" name="" id="" />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Todo;

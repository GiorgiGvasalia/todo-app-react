import DeleteIcon from "./DeleteIcon";
import "./Todo.css";

const Todo = ({ id, title, time, onTodoDelete, isDone, onCheckboxClick }) => {
  const handleCheckboxClick = () => {
    onCheckboxClick(id, !isDone);
  };

  return (
    <div className="single-container">
      <div className="todo-info">
        <p className="todo-title">{title}</p>
        <span className="todo-time">{time}</span>
      </div>
      <div className="todo-status">
        <input
          onChange={handleCheckboxClick}
          checked={isDone}
          type="checkbox"
        />
        <DeleteIcon onTodoDelete={() => onTodoDelete(id)} noteId={id} />
      </div>
    </div>
  );
};

export default Todo;

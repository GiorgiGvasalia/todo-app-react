import DeleteIcon from "./DeleteIcon";
import "./Todo.css";

const Todo = ({title}) => {
  return (
    <div className="single-container">
      <div>
        <p>{title}</p>
        <span>today 8:00</span>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Todo;

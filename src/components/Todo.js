import "./styles/Todo.css";
import TodoItems from "./TodoItems";

const Todo = () => {
  return (
    <div className="todo-container">
      <p className="header">to do list</p>
      <TodoItems />
    </div>
  );
};

export default Todo;

import AddToDoItem from "./AddToDoItem";
import ToDoContainer from "./TodoContainer";
import "./styles/Todo.css"

const Todo = () => {
  return (
    <div className="todo">
      <ToDoContainer />
      <AddToDoItem className="add-btn" />
    </div>
  );
};

export default Todo;

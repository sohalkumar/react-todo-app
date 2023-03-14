import { useState } from "react";
import "./styles/TodoItems.css";

// to do item storage and rendering below this

const TodoItems = () => {
  // array to contain of all the to-dos
  const [toDoItemList, setToDoItemList] = useState(["test"]);

  // state variable to check if the 'add to-do' button is clicked or not
  // initially set as false because by default it is not clicked
  const [clicked, setClicked] = useState(false);

  // state variable to store the 'new to-do' typed/entered in the text-area
  // by the user
  // initially set to empty string
  const [toDo, setToDo] = useState("");

  // function to modify the state variable 'clicked'
  // that keeps track of whether 'add to-do' button is clicked or not
  const clickedAdd = () => {
    setClicked(!clicked);
  };

  // function to modify the state variable 'todo'
  // that holds the value of the currently entered to-do item
  const addItem = (event) => {
    event.preventDefault();
    const newToDos = [toDo, ...toDoItemList];
    if (toDo.length > 0) {
      setToDoItemList(newToDos);
    }
    setToDo("");
    setClicked(!clicked);
  };

  // function to delete the to-dos
  // takes the index of the to-do to be deleted
  // index is passed to this function through the delete button present
  // inside each to-do item
  const deleteToDo = (index) => {
    const updatedToDoList = [...toDoItemList];
    updatedToDoList.splice(index, 1);
    setToDoItemList(updatedToDoList);
  };

  // function to update the value of the to-do state variable
  // to whatever is being typed inside the text area
  const handleTyping = (event) => {
    setToDo(event.target.value);
  };

  // UI to be shown when user has *not* clicked on the 'add to-do' button
  const notClickedOnAdd = (
    <>
      {/* button that toggles the text area */}
      <button className="add-btn" onClick={clickedAdd}>
        +
      </button>
    </>
  );

  // UI to be shown when user clicked on the 'add to-do' button
  const clickedOnAdd = (
    <>
      {/* text area for typing new to-do items */}
      <textarea
        value={toDo}
        onChange={handleTyping}
        className="add-input-area"
        placeholder="new to do item here"
        autoFocus
      />
      {/* a button that calls the addItem function to
       add the typed to-do in the array*/}
      {toDo.length > 0 && (
        <button type="button" className="add-btn submit" onClick={addItem}>
          +
        </button>
      )}
      {/* button that toggles the text area */}
      <button
        type="button"
        className="add-btn add-btn-expanded"
        onClick={clickedAdd}
      >
        +
      </button>
    </>
  );

  // content to render when no to-dos are available
  const toDoEmpty = (
    <>
      <h3>no items added!</h3>
      <p>click the add button below to add</p>
    </>
  );

  // content to render when to-do(s) are available
  const toDoNotEmpty = toDoItemList.map((toDo, index) => {
    return (
      <div key={index} className="todo-item">
        <p>{toDo}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={() => {
            deleteToDo(index);
          }}
        >
          <i className="material-icons">delete</i>
        </button>
      </div>
    );
  });

  // returning the JSX
  return (
    <div className="content">
      {toDoItemList.length > 0 ? toDoNotEmpty : toDoEmpty}
      {clicked ? clickedOnAdd : notClickedOnAdd}
    </div>
  );
};

export default TodoItems;

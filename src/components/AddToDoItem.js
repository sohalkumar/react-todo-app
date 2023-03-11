import "./styles/AddToDoItem.css"
import { useState } from "react";

const AddToDoItem = () => {
    const [clicked, setClicked] = useState(false);
    function handleClick (event) {
        setClicked(
            { clicked: !clicked }
        )
    }

    const notClickedOnAdd = (
        <div className="add-not-expanded">
            <button value={clicked} onClick={handleClick}>ADD</button>
        </div>
    )
    const clickedOnAdd = (
        <div className="add-expanded">
            <input type="text" className="add-todo-input" placeholder="New To Do Item Here" />
            <button value={clicked} onClick={handleClick}>ADD</button>
        </div>
    )
    return (clicked ? clickedOnAdd : notClickedOnAdd)

}
export default AddToDoItem
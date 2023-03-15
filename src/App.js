import { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import Todos from "./components/Todos";

function App() {
  const [notes, setNotes] = useState(true);

  return (
    <>
      <div className="header">
        <p
          className={"notes-header" + (notes ? " active" : "")}
          onClick={() => setNotes(true)}
        >
          notes
        </p>
        <p
          className={"to-do-header" + (notes ? "" : " active")}
          onClick={() => setNotes(false)}
        >
          to-do-list
        </p>
      </div>

      {notes && <Notes />}
      {!notes && <Todos />}
    </>
  );
}

export default App;

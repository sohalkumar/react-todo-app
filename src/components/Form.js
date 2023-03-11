import { useState } from "react";

export default function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")

    const setFName = (event) => {
        setFirstName(event.target.value)
        // console.log(event);
    }

    const setLName = (event) => {
        setlastName(event.target.value)
        // console.log(event);
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(firstName + " " + lastName)
    }

    return (
        <div>
            <form>
                <h2>Form</h2>
                <label> First Name : </label>
                <input type="text" value={firstName} onChange={setFName} />
                <label> Last Name : </label>
                <input type="text" value={lastName} onChange={setLName} />
                <button type="submit" onSubmit={submitForm}>Submit</button>
            </form>
        </div>
    )
} 
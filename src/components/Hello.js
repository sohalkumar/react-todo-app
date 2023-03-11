import { useState } from "react"

export default function Hello() {
    const [counter, setCounter] = useState(0);
    
    const increment = () => {
        setCounter(counter + 1)
    }
    
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1) 
        }
    }
    
    const decrementBtn = counter > 0 ? <div><button onClick={decrement}>Decrement</button></div> : null
    
    return (
        <>
            <h1>The value of counter is : {counter}</h1>
            <div><button onClick={increment}>Increment</button></div>
            <div>{decrementBtn}</div>
        </>
    )
}
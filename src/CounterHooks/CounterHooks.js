import React, { useState } from 'react';
import './CounterHooks.css';


const CounterHooks = () => {
    const [counter, setCounter] = useState(0);

    const addHandler = () => {
        setCounter(counter + 1);
    };

    const removeHandler = () => {
        counter <= 0 ? setCounter(0) : setCounter(counter - 1); // If-lauseke (inline-if)
        // setCounter(counter - 1);
    };

    const resetHandler = () => {
        setCounter(0);
    };

    let test =
        counter === 0
            ? "circle neutral"
            : counter % 10 === 0
            ? "circle pink"
            : counter % 2 === 0
            ? "circle even"
            : "circle odd";

    return (
        <div className="container">
            <h3>Counter Hooks:</h3>
            <div className={test}>
                <p className="number">{counter}</p>
            </div>
            <div className="buttons2">
                <button onClick={addHandler}>Add one</button>
                <button onClick={removeHandler}>Remove one</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    );
}

export default CounterHooks;
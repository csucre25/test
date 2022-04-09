import React, { useState } from "react";
import "./Counter.scss";
const Counter = ({value}) => {
    let initialValue = value ? value : 0;
    const resetValue = 0;
    const [counter, setCounter] = useState(initialValue);

    const addCounter = () => {
        setCounter(counter + 1);
    };

    const subCounter = () => {
        setCounter(counter - 1);
    };
    const resetCounter = () => {
        setCounter(resetValue);
    };

    return (
        <div className="clock">
            <p>{counter}</p>
            <button className="btn" onClick={addCounter}>
                ADD
            </button>
            <button className="btn" onClick={subCounter}>
                SUB
            </button>
            <button className="btn" onClick={resetCounter}>
                RESET
            </button>
        </div>
    );
};

export default Counter;
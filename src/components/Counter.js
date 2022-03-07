import React, { useState } from "react";
import {PlusButton} from "./PlusButton.js";
import {MinusButton} from "./MinusButton.js";

export function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <p>{count}</p>
            <div className="buttons">
                <PlusButton setCount = {setCount} count = {count}/>             
                <MinusButton setCount = {setCount} count = {count} />
            </div>           
        </div>
    )
}
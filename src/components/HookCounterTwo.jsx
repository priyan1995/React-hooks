import React, { useState } from 'react';

export const HookCounterTwo = () => {

    const initialCount = 0

    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }   
    } 

    return(
        <>

        <h2>Count {count}</h2>

        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={incrementFive}>Increment 5</button>


        </>
    )
}
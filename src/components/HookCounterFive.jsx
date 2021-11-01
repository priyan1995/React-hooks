import React, { useState, useEffect } from 'react'

function HookCounterFive (){

    const [ count, setCount ] = useState(0)

    useEffect( () => {
        document.title = `You clicked ${count} times.`
    })

    return (
        <>

        <button onClick={ () => setCount(count+1) }>Clicked {count} times</button>

        </>
    )

}

export default HookCounterFive

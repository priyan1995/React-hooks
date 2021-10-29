import React,{useState} from 'react';

export const InputNameChange = () => {

    const [name, setName] = useState({firstName: '', lastName: ''})
 
    return(
        <>

        <form>
            <input 
            type="text"
            value={name.firstName}
            onChange={e=>setName({ ...name ,firstName: e.target.value})}
            />

            <input
            type="text"
            value={name.lastName}
            onChange={e=>setName({...name, lastName: e.target.value})}
            />

            <h2>Your First Name is: {name.firstName} </h2>
            <h2>Your Last Name is: {name.lastName}</h2>
        </form>

        </>
    )
}
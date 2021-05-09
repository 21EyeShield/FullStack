import React from 'react'
import Input from './Input'
const PersonForm = ({func, newName, newNumber, setNewName, setNewNumber}) => {
    return(
        <form onSubmit={func}>
        <Input index={'name'} value={newName} setValue={setNewName}/>       
        <Input index={'number'} value={newNumber} setValue={setNewNumber}/>  
        <div>
          <button type="submit">add</button>
        </div>
        </form>
        
    )
}

export default PersonForm
import React, { useState } from 'react'
import Person from './components/Person'
const App = () => 
{
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newQuery, setNewQuery ] = useState('')
  const [showall, setShowAll] = useState(true)
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
 
  const addChanges = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const alertHandler= (event) => {
    event.preventDefault()
    const alertString = persons.filter(person => person.name === newName ).length
      ? newName
      : newNumber
    window.alert(`${alertString} is already added to phonebook`)
  }

  const queryHandler = (event) => {
    setNewQuery(event.target.value)
    setShowAll(newQuery)
  }
   
  const altFunc =(persons.filter(person => person.name === newName).length || persons.filter(person => person.number === newNumber).length)
    ? alertHandler
    : addChanges

  const personToShow = showall
    ? persons.filter(person => person.name.toLowerCase().includes(newQuery)) 
    : persons


 return (
    <div>

      <h2>Phonebook</h2>
      <div>
          filter shown with <input value={newQuery} 
                                   onChange={queryHandler}/>
      </div>
      <div>
       debug: {newQuery}
      </div>

      <h2>add a new</h2>
      <form onSubmit={altFunc}>
        <div>
          name: <input value={newName} 
                       onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber}
                       onChange={(event) => setNewNumber(event.target.value)}/>
        </div>
        <div>debug: {newName}</div>
        <div>debug: {newNumber}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {personToShow.map(person => <Person key={person.name} person={person} />)}
      </div>
    </div>
  )
}

export default App
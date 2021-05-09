import React, { useState } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
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
      <h3>Phonebook</h3>
        <Filter newQuery={newQuery} queryHandler={queryHandler}/>
      <h3>add a new</h3>
        <PersonForm func={altFunc} newName={newName} newNumber={newNumber} 
           setNewNumber={(event) => setNewNumber(event.target.value)}
           setNewName={(event) => setNewName(event.target.value)}/>
      <h3>Numbers</h3>
        <Persons persons = {personToShow}/>
    </div>
  )
}

export default App
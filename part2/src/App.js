import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import PersonsService from './PersonsService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handlerNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlerNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handlerFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    for (const person of persons) {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        return
      }
    }
    PersonsService
        .postPerson({name: newName, number: newNumber})
        .then(res => setPersons(persons.concat(res)))
    setNewName('')
    setNewNumber('')
  }

  const deleteName = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      PersonsService.deletePerson(id).then(res => getPersons())
    }
  }

  const getPersons = () => {
    PersonsService
        .getPersons()
        .then(persons => setPersons(persons))
  }

  useEffect(() => {
    getPersons()
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handlerFilterChange={handlerFilterChange} />
      <h2>add a new</h2>
      <PersonForm addName={addName} 
          newName={newName} handlerNameChange={handlerNameChange} 
          newNumber={newNumber} handlerNumberChange={handlerNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deleteName={deleteName} />
    </div>
  )
}

export default App

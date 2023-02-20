import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import PersonsService from './PersonsService'
import Notification from './Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notice, setNotice] = useState(null)

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
    setNotification(newName)
    setNewName('')
    setNewNumber('')
  }

  const setNotification = (content) => {
    setNotice(content)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
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
      <Notification message={notice} />
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

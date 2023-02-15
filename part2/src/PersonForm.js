const PersonForm = ({ addName, newName, handlerNameChange, newNumber, handlerNumberChange }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handlerNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handlerNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
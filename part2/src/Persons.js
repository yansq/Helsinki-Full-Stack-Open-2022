const Persons = ({ persons, filter, deleteName }) => 
  <div>
    {
      persons.map(person => person.name.includes(filter) 
        ? 
          <div key={person.id}>{person.name} {person.number}&nbsp;
            <button onClick={() => deleteName(person.id, person.name)}>delete</button>
          </div> 
        : '')
    }
  </div>

export default Persons
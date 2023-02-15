const Persons = ({ persons, filter }) => 
  <div>
    {
      persons.map(person => person.name.includes(filter) 
        ? <div key={person.name}>{person.name} {person.number}</div> 
        : '')
    }
  </div>

export default Persons
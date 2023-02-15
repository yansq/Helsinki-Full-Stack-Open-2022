const Filter = ({ filter, handlerFilterChange }) => {
  return (
    <div>filter shown with<input value={filter} onChange={handlerFilterChange} /></div>
  )
}

export default Filter
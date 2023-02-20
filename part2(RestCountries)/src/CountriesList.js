const CountriesList = ({ countries, showDetail }) => {
  return (
    <div>
      {
        countries.map(country => 
            <div>{country.name.official}&nbsp;
              <button onClick={() => showDetail(country.name.official)} >show</button>
            </div>
        )
      }
    </div>
  )
}

export default CountriesList
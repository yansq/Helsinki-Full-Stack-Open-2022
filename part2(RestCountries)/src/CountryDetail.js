const CountryDetail = ({ countryDetail }) => {
  return (
    countryDetail && ( 
    <div>
      <h1>{countryDetail.name ? countryDetail.name.official : ''}</h1>
      {
        countryDetail.capital &&
        <div>capital {countryDetail.capital[0]}</div>
      }
      <div>area {countryDetail.area}</div>
      <h2>language</h2>
      <ul>
        {
          Object.values(countryDetail.languages).map(v => <li>{v}</li>)
        }
      </ul>
      <img alt="flag" src={countryDetail.flags.png} />
    </div>
    )
  )
}

export default CountryDetail
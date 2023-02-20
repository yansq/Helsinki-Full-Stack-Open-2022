import { useState, useEffect } from 'react'
import Errors from './Errors'
import CountriesList from './CountriesList'
import CountryDetail from './CountryDetail'
import CountriesService from './CountriesService'

const App = () => {
  const [error, setError] = useState([])
  const [inputContent, setInputContent] = useState([])
  const [countries, setCountries] = useState([])
  const [countryDetail, setCountryDetail] = useState("")

  const handleInputContent = (event) => {
    setInputContent(event.target.value)
    if (event.target.value) {
      CountriesService.getCountries(event.target.value).then(res => dealWithRes(res))
    }
  }

  const dealWithRes = (res) => {
    console.log(res)
    if (res.length > 10) {
      setError("Too many matches, specify another filter")
      setCountries([])
      setCountryDetail("")
    } else if (res.length === 1) {
      setError("")
      setCountries([])
      setCountryDetail(res[0])
    } else {
      setError("")
      setCountries(res)
      setCountryDetail("")
    }
  }

  const showDetail = (name) => {
    setInputContent(name)
    CountriesService.getCountries(name).then(res => dealWithRes(res))
  }

  return (
    <div>
      <div>
        find&nbsp;countries&nbsp;
        <input value={inputContent} onChange={handleInputContent} />
      </div>
      <Errors error={error} />
      <CountriesList countries={countries} showDetail={showDetail} />
      <CountryDetail countryDetail={countryDetail} />
    </div>
  )
}

export default App

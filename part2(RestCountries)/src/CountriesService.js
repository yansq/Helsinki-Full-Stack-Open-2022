import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1'

const getCountries = (name) => {
  return axios
      .get(`${baseUrl}/name/${name}`)
      .then(response => response.data)
      .catch(error => console.log(error))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getCountries }
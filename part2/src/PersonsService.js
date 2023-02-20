import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
  return axios
      .get(baseUrl)
      .then(response => response.data)
      .catch(error => console.log(error))
}

const postPersons = (newPerson) => {
  return axios
      .post(baseUrl, newPerson)
      .then(response => response.data)
      .catch(error => console.log(error))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPersons, postPersons }
import axios from 'axios'

const baseUrl = '/api/persons'

const getPersons = () => {
  return axios
      .get(baseUrl)
      .then(response => response.data)
      .catch(error => console.log(error))
}

const postPerson = (newPerson) => {
  return axios
      .post(baseUrl, newPerson)
      .then(response => response.data)
      .catch(error => console.log(error))
}

const deletePerson = (id) => {
  return axios
      .delete(`${baseUrl}/${id}`)
      .then(response => response.data)
      .catch(error => console.log(error))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPersons, postPerson, deletePerson }
import config from '../config'
import axios from 'axios'

const { API } = config

export default (req, res) => {
  if(!req.query.member) res.status(400).send({ error: 'missing member param' })

  const member = req.query.member
  const GET_BOARDS = `${API.URL}/members/${member}/boards?key=${API.KEY}&token=${API.TOKEN}&fields=name,id,prefs`
  axios.get(GET_BOARDS)
    .then(response => {
      res.send({
        status: 'ok',
        payload: response.data
       })
    })
    .catch(error => {
      res.send({
        status: 'error',
        description: error
      })
    })
}

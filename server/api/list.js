import config from '../config'
import axios from 'axios'

const { API } = config

export default (req, res) => {
  if(!req.query.id) res.status(400).send({ error: 'missing id param' })

  const board_id = req.query.id
  const GET_LIST = `${API.URL}/boards/${board_id}?fields=id,name&lists=open&list_fields=id,name&key=${API.KEY}&token=${API.TOKEN}`
  axios.get(GET_LIST)
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

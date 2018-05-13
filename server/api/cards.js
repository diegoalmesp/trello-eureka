import config from '../config'
import axios from 'axios'

const { API } = config

export default (req, res) => {
  if(!req.query.id) res.status(400).send({ error: 'missing id param' })

  const cards_id = req.query.id
  const GET_CARDS = `${API.URL}/lists/${cards_id}/cards?fields=id,name,desc&key=${API.KEY}&token=${API.TOKEN}`
  axios.get(GET_CARDS)
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

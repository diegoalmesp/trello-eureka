import config from '../config'
import axios from 'axios'

const { API } = config

export default (req, res) => {
  if(!req.query.card_id || !req.query.list_id) res.status(400).send({ error: 'missing params' })

  const card_id = req.query.card_id
  const list_id = req.query.list_id
  const POST_CARD = `${API.URL}/cards/${card_id}?idList=${list_id}&key=${API.KEY}&token=${API.TOKEN}`
  axios.put(POST_CARD)
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

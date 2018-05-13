import config from '../config'
import axios from 'axios'

const { API } = config

export default (req, res) => {
  if(!req.query.list_id || !req.query.name) res.status(400).send({ error: 'missing params' })

  const list_id = req.query.list_id
  const name = req.query.name
  const POST_CARD = `${API.URL}/cards?idList=${list_id}&name=${name}&key=${API.KEY}&token=${API.TOKEN}`
  axios.post(POST_CARD)
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

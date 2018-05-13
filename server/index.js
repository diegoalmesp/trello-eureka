import express from 'express'
import bodyParser from 'body-parser'
import config from './config'
import query from './api'

const app = express()

const port = config.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// allow CORS for development
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

/**
 * This endpoint retrieves the board list from a user, it needs the username, otherwise it will return an error
 * Original query: https://api.trello.com/1/members/<member>/boards?key=<key>&token=<token>&fields=name,id
 * Documentation available: https://trello.readme.io/docs/api-introduction
 */
app.get('/api/fetchBoards', query.boards)

/**
 * This endpoint retrieves the list that a board contains, it needs the board id, otherwise it will return an error
 * Original query: https://api.trello.com/1/boards/<board_id>?fields=id,name&lists=open&list_fields=id,name&key=<key>&token=<token>
 * Documentation available: https://trello.readme.io/docs/api-introduction
 */
app.get('/api/fetchBoardList', query.list)

/**
 * This endpoint retrieves the cards from a list, it needs the list id, otherwise it will return an error
 * Original query: https://api.trello.com/1/lists/<list_id>/cards?fields=id,name,desc&key=<key>&token=<token>
 * Documentation available: https://trello.readme.io/docs/api-introduction
 */
app.get('/api/fetchCards', query.cards)

/**
 * This endpoint post a new card based on the list id and the name of the new card, both parameters are mandatory, otherwise it will return an error
 * Original query: https://api.trello.com/1/cards?idList=<list_id>&name=<name>&key=<key>&token=<token>
 * Documentation available: https://trello.readme.io/docs/api-introduction
 */
app.post('/api/postCard', query.post_card)

/**
 * This endpoint moves a card from one list to another, both parameters are mandatory, otherwise it will return an error
 * Original query: https://api.trello.com/1/cards/<card_id>?idList=<list_id>&key=<key>&token=<token>
 * Documentation available: https://trello.readme.io/docs/api-introduction
 */
app.put('/api/moveCard', query.move_card)

/**
 * Server
 */
app.listen(port, () => console.log(`Listening on port ${port}`))

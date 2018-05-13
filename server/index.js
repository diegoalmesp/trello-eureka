import express from 'express'
import bodyParser from 'body-parser'
import config from './config'
import query from './api'

const app = express()

const port = config.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/**
 * This endpoint retrieves the board list from a user, it needs the username, otherwise it will return an error
 * Query: https://api.trello.com/1/members/<member>/boards?key=<key>&token=<token>&fields=name,id
 * Documentation available: https://trello.readme.io/docs/api-introduction
 */
app.get('/api/fetchBoards', query.boards)

/**
 * This endpoint retrieves the list that a board contains, it needs the board id, otherwise it will return an error
 * Query: https://api.trello.com/1/boards/<board_id>?fields=id,name&lists=open&list_fields=id,name&key=<key>&token=<token>
 * Documentation available: https://trello.readme.io/docs/api-introduction
 */
app.get('/api/fetchBoardList', query.list)

/**
 * This endpoint retrieves the cards from a list, it needs the list id, otherwise it will return an error
 * Query: https://api.trello.com/1/lists/<list_id>/cards?fields=id,name,desc&key=<key>&token=<token>
 * Documentation available: https://trello.readme.io/docs/api-introduction
 */
app.get('/api/getCards', query.cards)

/**
 * Server
 */
app.listen(port, () => console.log(`Listening on port ${port}`))

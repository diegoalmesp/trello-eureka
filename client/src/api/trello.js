import axios from 'axios'

const {
  REACT_APP_ENDPOINT,
  REACT_APP_DEFAULT_USR
} = process.env;

const ax = axios.create({
  baseURL: REACT_APP_ENDPOINT
});

class TrelloAPI {
  static getAllBoards(member = REACT_APP_DEFAULT_USR) {
    return ax.get(`/fetchBoards?member=${member}`)
  }

  static getBoardLists(id) {
    return ax.get(`/fetchBoardList?id=${id}`)
  }

  static getCards(id) {
    return ax.get(`/fetchCards?id=${id}`)
  }

  static postCard(list_id, name) {
    return ax.post(`/postCard?list_id=${list_id}&name=${name}`)
  }

  static moveCard(card_id, list_id) {
    return ax.put(`/moveCard?card_id=${card_id}&list_id=${list_id}`)
  }
}

export default TrelloAPI;

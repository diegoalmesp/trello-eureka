import * as types from './action_types'
import TrelloAPI from '../api/trello'


export function fetchBoardsSuccess(boards) {
  return {
    type: types.FETCH_BOARDS_SUCCESS,
    payload: boards
  };
}

export function loadBoards() {
  return dispatch => {
    // first fetch the list of boards
    // the delay prevents the react loading before the nodejs and thus givin a fetch error
    setTimeout(() => {
      return TrelloAPI.getAllBoards()
        .then(response => {
          // populate the boards in the store
          dispatch(fetchBoardsSuccess(response.data.payload))
          // then fetch the firt board id to populate the details page
          return dispatch(loadLists(response.data.payload[0].id))
        })
        .catch(error => {
          throw(error)
        })
    }, 1500)
  }
}

export function fetchListSuccess(lists) {
  return {
    type: types.FETCH_LIST_SUCCESS,
    payload: lists
  };
}

export function loadLists(id) {
  return dispatch => {
    return TrelloAPI.getBoardLists(id)
      .then(response => {
        dispatch(fetchListSuccess(response.data.payload))
        // fetch cards for each list
        const lists = response.data.payload.lists
        lists.forEach(list => {
          dispatch(loadCards(list.id))
        })
      })
      .catch(error => {
        throw(error)
      })
  }
}

// get cards
export function fetchCardsSuccess(list_id, cards) {
  return {
    type: types.FETCH_CARDS_SUCCESS,
    payload: {
      list_id: list_id,
      cards: cards
    }
  };
}

export function loadCards(id) {
  return dispatch => {
    return TrelloAPI.getCards(id)
      .then(response => {
        dispatch(fetchCardsSuccess(id, response.data.payload))
      })
      .catch(error => {
        throw(error)
      })
  }
}

// save card
export function saveCard(list_id, name) {
  return {
    type: types.SAVE_CARD,
    payload: {
      list_id: list_id,
      name: name
    }
  };
}

export function saveCardOpt(list_id, name) {
  return dispatch => {
    return TrelloAPI.postCard(list_id, name)
      .then(response => {
        dispatch(saveCard(list_id, name))
        console.info('succes saving card', response.data.payload)
      })
      .catch(error => {
        dispatch(deleteCard(list_id, name))
        throw(error)
      })
  }
}

// delete card
export function deleteCard(list_id, name) {
  return {
    type: types.DELETE_CARD,
    payload: {
      list_id: list_id,
      name: name
    }
  };
}

// move card
export function moveCard(card_id, target_list, origin_list) {
  return {
    type: types.MOVE_CARD,
    payload: {
      card_id: card_id,
      target_list: target_list,
      origin_list: origin_list
    }
  };
}

export function moveCardOpt(card) {
  const card_id = card.id,
        target_list = card.target,
        origin_list = card.origin

  return dispatch => {
    // move card the `optimistic` way
    dispatch(moveCard(card_id, target_list, origin_list))
    return TrelloAPI.moveCard(card_id, target_list)
      .then(response => {
        console.info('succes moving card', response.data.payload)
      })
      .catch(error => {
        dispatch(deleteCard(card_id, target_list, origin_list))
        throw(error)
      })
  }
}

















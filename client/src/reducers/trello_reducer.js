import * as types from '../actions/action_types'


const initialState = {
  boards: [],
  lists: {}
}

export function reducer (state = initialState, action) {
  switch (action.type) {

    case types.FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        boards: [ ...action.payload ]
      }

    case types.FETCH_LIST_SUCCESS:
      return {
        ...state,
        lists: { ...action.payload }
      }

    case types.FETCH_CARDS_SUCCESS:
      // find each list and add their cards
      let listsWithCards = { ...state.lists }
      listsWithCards.lists.forEach(list => {
        if(list.id ===action.payload.list_id) {
          list.cards = action.payload.cards
        }
      })
      return {
        ...state,
        lists: listsWithCards
      }

    case types.SAVE_CARD:
      // find the list and store the new card
      let cardUpdated = { ...state.lists }
      cardUpdated.lists.forEach(list => {
        if(list.id ===action.payload.list_id) {
          list.cards.push({
            id: Date.now(),
            name: action.payload.name
          })
        }
      })
      return {
        ...state,
        lists: cardUpdated
      }

    case types.DELETE_CARD:
      // find the list and delete last card
      // TODO: delete based on id
      let cardDeleted = { ...state.lists }
      cardDeleted.lists.forEach(list => {
        if(list.id ===action.payload.list_id) {
          list.cards.pop()
        }
      })
      return {
        ...state,
        lists: cardDeleted
      }

    default:
      return state
  }
}
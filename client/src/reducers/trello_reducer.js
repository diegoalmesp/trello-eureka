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
      let cardsUpdated = { ...state.lists }
      cardsUpdated.lists.forEach(list => {
        if(list.id ===action.payload.list_id) {
          list.cards.push({
            id: Date.now(),
            name: action.payload.name
          })
        }
      })
      return {
        ...state,
        lists: cardsUpdated
      }

    case types.MOVE_CARD:
      // find the card in the old list and save it in the new one
      let cardsMoved = { ...state.lists }
      let movingCard = []
      const { card_id, target_list, origin_list } = action.payload

      cardsMoved.lists.forEach(list => {
        if(list.id === origin_list) {
          const index = list.cards.findIndex(card => card.id === card_id)
          // remove card and save it in `movingCard`
          movingCard = list.cards.splice(index, 1)
          cardsMoved.lists.forEach(list => {
            if(list.id === target_list) {
              // find the new list and add the removed card
              list.cards.push(movingCard[0])
            }
          })
        }
      })
      return {
        ...state,
        lists: cardsMoved
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
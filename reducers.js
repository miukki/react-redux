// @flow

import { combineReducers } from 'redux'
import {
  ADD_ITEM,
  TOGGLE_ITEM,
  SET_VISIBILITY_FILTER,
  FILTERS
} from './actions_type'
const { SHOW_ALL } = FILTERS
 

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
  }
   
function items(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_ITEM:
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, {
            completed: !item.completed
          })
        }
        return item
      })
    default:
      return state
  }
}
 
const itemApp = combineReducers({
  visibilityFilter,
  items
})
 
export default itemApp
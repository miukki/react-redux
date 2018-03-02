import {
    ADD_ITEM,
    TOGGLE_ITEM,
    SET_VISIBILITY_FILTER,
    FILTERS
    } from './actions_type'
   
 
/*
 * action creators
 */
 
export function addItem(text) {
  return { type: ADD_ITEM, text }
}
 
export function toggleItem(index) {
  return { type: TOGGLE_ITEM, index }
}
 
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
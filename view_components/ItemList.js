import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
 
const ItemList = ({ todos, onItemClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Item key={index} {...todo} onClick={() => onItemClick(index)} />
    ))}
  </ul>
)
 
ItemList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
}
 
export default ItemList
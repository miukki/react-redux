import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import ItemList from '../view_components/ItemList'

const getVisibleItems = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleItems(state.todos, state.visibilityFilter)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onItemClick: id => {
      dispatch(toggleItem(id))
    }
  }
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
  
export default VisibleItemList

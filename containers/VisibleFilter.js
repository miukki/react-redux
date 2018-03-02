import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../view_components/Link'
 
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
 
const VisibleFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
 
export default VisibleFilter
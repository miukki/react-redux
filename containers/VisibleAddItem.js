import { connect } from 'react-redux'
import { addItem } from '../actions'
import AddItem from '../view_components/AddItem'

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: value => {
      dispatch(addItem(value))
    }
  }
}

const VisibleAddItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem)
  
export default VisibleAddItem

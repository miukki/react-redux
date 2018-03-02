import React from 'react'
import PropTypes from 'prop-types'
 
const AddItem = ({ onSubmitClick }) => (
  <div>
  <form
    onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      onSubmitClick(input.value)
      input.value = ''
    }}
  >
    <input
      ref={node => {
        input = node
      }}
    />
    <button type="submit">
      Add Todo
    </button>
  </form>
</div>)
 
AddItem.propTypes = {
  onSubmitClick: PropTypes.func.isRequired
}
 
export default AddItem
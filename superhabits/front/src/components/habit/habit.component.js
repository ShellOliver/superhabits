import { add } from '../../actions/habits.action'
import { connect } from 'react-redux'
import { InputForm } from '../inputForm/input-form.component'

const mapDispatchToProps = dispatch => {
  return {
    addItem: habit => dispatch(add(habit)),
    placeholder: 'New habit'
  }
}

export default connect(null, mapDispatchToProps)(InputForm)

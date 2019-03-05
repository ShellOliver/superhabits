import { connect } from 'react-redux'
import { deleteHabit } from '../../actions/habits.action'
import HabitList from '../../components/habit-list/habitList'

const mapStateToProps = state => ({ habits: state.habits })
const mapDispatchToProps = dispatch => (
  { deleteHabit: habit => dispatch(deleteHabit(habit)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(HabitList)

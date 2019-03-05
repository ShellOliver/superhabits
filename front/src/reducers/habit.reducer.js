import { RECEIVE_HABIT, REMOVE_HABIT } from '../actions/action.types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_HABIT:
      return [ ...state, action.payload ]
    case REMOVE_HABIT:
      return deleteHabit(state, action)
    default:
      return state
  }
}
function deleteHabit (state, action) {
  let indexFound = state.habits.findIndex(habit => habit.id === action.payload.id)
  state.habits.splice(indexFound, 1)
  return [ ...state ]
}

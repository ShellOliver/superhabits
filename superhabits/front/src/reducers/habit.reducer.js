import actions from '../actions/action.types'

const { ADD_HABIT, DELETE_HABIT } = actions

const initialState = {
  habits: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return { ...state, habits: [...state.habits, action.payload] }
    case DELETE_HABIT:
      return deleteHabit(state, action)
    default:
      return state
  }
}
function deleteHabit (state, action) {
  let indexFound = state.habits.find(habit => habit.name === action.payload.name)
  if (indexFound) { state.habits.splice(indexFound, 1) }
  return state
}

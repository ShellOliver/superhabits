import actionTypes from './action.types'

const add = (payload) => {
  return { type: actionTypes.ADD_HABIT, payload }
}

const del = (payload) => {
  return { type: actionTypes.DELETE_HABIT, payload }
}

export { add, del }

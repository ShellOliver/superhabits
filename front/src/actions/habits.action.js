import { RECEIVE_HABIT, DELETE_HABIT, API } from './action.types'

const receiveHabit = (payload) => {
  return { type: RECEIVE_HABIT, payload }
}

const createHabit = (payload) => {
  return {
    type: API,
    done: receiveHabit,
    payload,
    meta: { url: 'habit', method: 'POST' } }
}

const del = (payload) => {
  return { type: DELETE_HABIT, payload }
}

export { del, createHabit }

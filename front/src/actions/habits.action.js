import { RECEIVE_HABIT, REMOVE_HABIT, API } from './action.types'

const receiveHabit = (payload) => {
  return { type: RECEIVE_HABIT, payload }
}

const removeHabit = (payload) => (
  { type: REMOVE_HABIT, payload }
)

const createHabit = (payload) => (
  {
    type: API,
    done: receiveHabit,
    payload,
    meta: { url: 'habit', method: 'POST' } }
)

const deleteHabit = (payload) => (
  {
    type: API,
    done: removeHabit,
    payload,
    meta: { url: 'habit', method: 'DELETE' } }
)

export { deleteHabit, createHabit }

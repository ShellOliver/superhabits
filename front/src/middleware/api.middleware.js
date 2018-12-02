import { API } from '../actions/action.types'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000'
})

const middleware = ({ dispatch }) => next => async action => {
  if (action.type === API) {
    if (action.meta.method === 'POST') {
      try {
        let res = await request.post(action.meta.url, action.payload)
        action.done(res)
      } catch (error) {
        action.error(error)
      }
    } else if (action.meta.method === 'GET') {
      try {
        let res = await request.get(action.meta.url)
        action.done(res)
      } catch (error) {
        action.error(error)
      }
    }
  }
}

export default middleware

import { API } from '../actions/action.types'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000'
})

const middleware = ({ dispatch }) => next => async action => {
  if (action.type === API) {
    await request.post('/')
  }
}

export default middleware

import { API } from '../actions/action.types'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000'
})

const middleware = ({ dispatch }) => next => async action => {
  if (action.type === API) {
    switch (action.meta.method) {
      case 'POST':
        try {
          let res = await request.post(action.meta.url, action.payload)
          next(action.done(res.data))
        } catch (error) {
          next(action.error(error))
        }
        break
      case 'DELETE':
        try {
          await request.delete(`${action.meta.url}/${action.payload.id}`)
          next(action.done(action.payload))
        } catch (error) {
          next(action.error(error))
        }
        break
      case 'GET':
        try {
          let res = await request.get(action.meta.url)
          next(action.done(res))
        } catch (error) {
          next(action.error(error))
        }
        break

      default:
        break
    }
  }
}

export default middleware

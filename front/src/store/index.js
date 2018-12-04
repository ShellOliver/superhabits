import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import ReduxThunk from 'redux-thunk'
import apiMiddleware from '../middleware/api.middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [ReduxThunk, apiMiddleware]

export default createStore(reducers,
  composeEnhancers(applyMiddleware(...middleware)))

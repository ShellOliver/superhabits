import { API } from '../actions/action.types'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import middleware from './api.middleware'

const request = new MockAdapter(axios)

const postMockedRequest = (request) => new MockAdapter(request)
  .onPost().reply(201, { id: 1, name: 'product name' })
const getMockedRequest = (request) => new MockAdapter(request)
  .onGet().reply(200, { id: 1, name: 'product name' })
const deleteMockedRequest = (request) => new MockAdapter(request)
  .onAny().reply(200)

function apiTest (mockedRequest, type = 'GET') {
  it(`should call the action done when ${type} action success`, async () => {
    const mockDone = jest.fn()
    const nextMock = jest.fn()
    const action = { type: API, meta: { method: type }, done: mockDone }
    await middleware({ injectionReq: mockedRequest })(nextMock)(action)
    expect(mockDone).toBeCalled()
  })

  it(`should call the action error when ${type} action error`, async () => {
    const mockError = jest.fn()
    const nextMock = jest.fn()
    const errorMockedRequest = (request) => new MockAdapter(request)
      .onAny().reply(500)
    const action = { type: API, meta: { method: type }, error: mockError }
    await middleware({ injectionReq: errorMockedRequest })(nextMock)(action)
    expect(mockError).toBeCalled()
  })
}

describe('test call the next function in middleware when post', () => apiTest(postMockedRequest, 'POST'))
describe('test call the next function in middleware when get', () => apiTest(getMockedRequest))
describe('test call the next function in middleware when delete', () => apiTest(deleteMockedRequest, 'DELETE'))

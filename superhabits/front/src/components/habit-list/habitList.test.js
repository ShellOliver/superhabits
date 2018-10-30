import { shallow } from 'enzyme'
import React from 'react'
import configureStore from 'redux-mock-store'
import HabitListCon from './habitList'

describe('habitList test', () => {
  let wrapperCon
  const store = configureStore()({
    habit: [{ name: 'item1' }, { name: 'item2' }]
  })

  beforeEach(() => {
    wrapperCon = shallow(<HabitListCon store={store} />)
  })

  it('should return deleteHabit action when call delete from component', () => {
    let deleteHab = wrapperCon.props().deleteHabit({ name: 'some habit' })
    expect(deleteHab).toEqual({ type: 'DELETE_HABIT', payload: { name: 'some habit' } })
  })
})

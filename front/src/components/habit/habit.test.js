import { shallow } from 'enzyme'
import React from 'react'
import HabitCon from './habit.component'
import configureStore from 'redux-mock-store'

describe('habit connected component test', () => {
  let wrapperCon
  const store = configureStore()({
    habit: [{ name: 'item1' }, { name: 'item2' }]
  })

  beforeEach(() => {
    wrapperCon = shallow(<HabitCon store={store} />)
  })
  it('should return addItem action when call addItem from component', () => {
    const addHab = wrapperCon.props().addItem({ name: 'added by test' })
    expect(addHab).toEqual({ type: 'RECEIVE_HABIT', payload: { name: 'added by test' } })
  })
})

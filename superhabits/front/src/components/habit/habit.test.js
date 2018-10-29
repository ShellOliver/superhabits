import { mount, shallow } from 'enzyme'
import React from 'react'
import HabitCon, { Habit } from './habit.component'
import configureStore from 'redux-mock-store'
import habitReducer from '../../reducers/habit.reducer'

describe('habit page test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Habit addHabit={jest.fn()} />)
  })

  it('render form of habbit', () => {
    expect(wrapper.length).toEqual(1)
    expect(wrapper.exists('input[onChange]')).toEqual(true)
  })

  it('set value and call submit action in habit form', () => {
    let target = {}
    let input = wrapper.find('Input').find('input')
    wrapper.instance().onsubmit = jest.fn()
    input.simulate('change', target.value = 'dasfaga')
    input.simulate('submit')
    expect(wrapper.instance().onsubmit).toBeCalled()
  })
})

describe('habit action test', () => {
  let wrapperCon
  const store = configureStore()({
    habit: [{ name: 'item1' }, { name: 'item2' }]
  })

  beforeEach(() => {
    wrapperCon = shallow(<HabitCon store={store} />)
  })
  it('should return addHabit action when call addHabit from component', () => {
    const addHab = wrapperCon.props().addHabit({ name: 'added by test' })
    expect(addHab).toEqual({ type: 'ADD_HABIT', payload: { name: 'added by test' } })
  })
})

describe('habit reducer test', () => {
  it('should add habit to store', () => {
    let newState = habitReducer(undefined, { type: 'ADD_HABIT', payload: { name: 'added by test' } })
    expect(newState).toEqual({ habits: [ { name: 'added by test' } ] })
  })
})

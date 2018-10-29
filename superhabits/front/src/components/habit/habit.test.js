import { mount } from 'enzyme'
import React from 'react'
import { Habit } from './habit.component'

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

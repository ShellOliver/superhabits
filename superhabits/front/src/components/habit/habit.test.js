import { mount } from 'enzyme'
import React from 'react'
import { Habit } from './habit.component'

describe('home page test', () => {
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
    wrapper.instance().onsubmit = jest.fn()
    wrapper.find('input').simulate('change', target.value = 'dasfaga')
    wrapper.find('input').simulate('submit')
    expect(wrapper.instance().onsubmit).toBeCalled()
  })
})

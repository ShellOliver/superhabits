import { mount } from 'enzyme'
import React from 'react'
import { InputForm } from '../inputForm/input-form.component'

describe('input form component test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<InputForm addItem={jest.fn()} placeholder='new item' />)
  })

  it('render form of item', () => {
    expect(wrapper.length).toEqual(1)
    expect(wrapper.exists('input[onChange]')).toEqual(true)
  })

  it('set value and call submit action in item form', () => {
    let target = {}
    let input = wrapper.find('Input').find('input')
    wrapper.instance().onsubmit = jest.fn()
    input.simulate('change', target.value = 'dasfaga')
    input.simulate('submit')
    expect(wrapper.instance().onsubmit).toBeCalled()
  })
})

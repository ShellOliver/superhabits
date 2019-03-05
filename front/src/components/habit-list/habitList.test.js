import { shallow } from 'enzyme'
import React from 'react'
import HabitList from './habitList'

describe('render test', () => {
  it('should render without props', () => {
    const wrapperCon = shallow(<HabitList />)
    expect(wrapperCon.isEmptyRender()).toBe(false)
  })
})

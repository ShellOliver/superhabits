import { shallow } from 'enzyme'
import React from 'react'
import Home from './home'
import Habit from '../../components/habit/habit.component'
import HabitList from '../../components/habit-list/habitList'

describe('home page test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('should have habits list', () => {
    expect(wrapper.contains(<HabitList />)).toEqual(true)
  })

  it('should have habits list', () => {
    expect(wrapper.contains(<Habit />)).toEqual(true)
  })
})

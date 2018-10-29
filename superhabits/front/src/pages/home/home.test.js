import { shallow } from 'enzyme'
import React from 'react'
import Home from './home'
import HabitList from '../habit-list/habitList'
import Habit from '../../components/habit/habit.component'

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

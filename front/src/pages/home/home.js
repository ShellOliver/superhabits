import React, { Component } from 'react'
import HabitList from '../../containers/habit-list/habitList.container'
import InputForm from '../../containers/inputForm/input-form.component'
import { createHabit } from '../../actions/habits.action'

class Home extends Component {
  render () {
    return (
      <div style={{ margin: '1em' }}>
        <InputForm addItem={createHabit} />
        <HabitList />
      </div>
    )
  }
}

export default Home

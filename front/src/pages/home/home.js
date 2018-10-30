import React from 'react'
import Habit from '../../components/habit/habit.component'
import HabitList from '../../components/habit-list/habitList'

const Home = () => {
  return (
    <div style={{ margin: '1em' }}>
      <Habit />
      <HabitList />
    </div>
  )
}

export default Home

import React from 'react'
import Habit from '../../components/habit/habit.component';
import HabitList from '../habits/habits';

const Home = () => {
  return (
    <div>
      <HabitList/>
      <Habit/>
    </div>
  )
}

export default Home
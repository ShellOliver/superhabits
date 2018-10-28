import React from 'react'
import Habit from '../../components/habit/habit.component';
import HabitList from '../habit-list/habitList';

const Home = () => {
  return (
    <div>
      <HabitList/>
      <Habit/>
    </div>
  )
}

export default Home
import React from 'react'
import { connect } from "react-redux"

const mapStateToProps = state => (state.habit)

const HabitList = ({habits}) => {
  return (
    <div>
      {habits.map((habit, index) => <li key={index}>{habit.name}</li>)}
    </div>
  )
}

HabitList.propTypes = {

}


export default connect(mapStateToProps)(HabitList);

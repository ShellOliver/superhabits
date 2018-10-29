import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = state => (state.habit)

const HabitList = ({ habits }) => {
  return (
    <div>
      {habits.map((habit, index) => <li key={index}>{habit.name}</li>)}
    </div>
  )
}

HabitList.propTypes = {
  habits: PropTypes.array
}

export default connect(mapStateToProps)(HabitList)

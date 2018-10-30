import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import { del } from '../../actions/habits.action'

const mapStateToProps = state => ({ habitStore: state.habit })
const mapDispatchToProps = dispatch => {
  return {
    deleteHabit: habit => dispatch(del(habit))
  }
}

export const HabitList = ({ habitStore }) => {
  console.log(habitStore)
  return (
    <div>
      <Table color='green'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Habit</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {habitStore.habits.map((habit, index) => (
            <Table.Row key={index}>
              <Table.Cell>{habit.name}</Table.Cell>
              <Table.Cell>{habit.notes}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

HabitList.propTypes = {
  habitStore: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HabitList)

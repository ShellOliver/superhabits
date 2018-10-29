import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

const mapStateToProps = state => (state.habit)

const HabitList = ({ habits }) => {
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
          {habits.map((habit, index) => (
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
  habits: PropTypes.array
}

export default connect(mapStateToProps)(HabitList)

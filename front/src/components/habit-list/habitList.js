import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Table, Button, Icon } from 'semantic-ui-react'
import { del } from '../../actions/habits.action'

const mapStateToProps = state => ({ habitStore: state.habit })
const mapDispatchToProps = dispatch => {
  return {
    deleteHabit: habit => dispatch(del(habit))
  }
}

const DelButton = () => (
  <Button animated='vertical'>
    <Button.Content hidden>trash</Button.Content>
    <Button.Content visible>
      <Icon name='trash' />
    </Button.Content>
  </Button>
)

export const HabitList = ({ habitStore, deleteHabit }) => {
  return (
    <div>
      <Table color='green'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Habit</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {habitStore.habits.map((habit, index) => (
            <Table.Row key={index}>
              <Table.Cell>{habit.name}</Table.Cell>
              <Table.Cell>{habit.notes}</Table.Cell>
              <Table.Cell onClick={() => deleteHabit(habit)}>
                <DelButton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

HabitList.propTypes = {
  habitStore: PropTypes.any,
  deleteHabit: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HabitList)

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Table, Button, Icon } from 'semantic-ui-react'
import { deleteHabit } from '../../actions/habits.action'

const mapStateToProps = state => ({ habitStore: state.habit })

const DelButton = () => (
  <Button animated='vertical'>
    <Button.Content hidden>trash</Button.Content>
    <Button.Content visible>
      <Icon name='trash' />
    </Button.Content>
  </Button>
)

export const HabitList = ({ habitStore, dispatch }) => {
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
              <Table.Cell onClick={() => dispatch(deleteHabit(habit))}>
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
  dispatch: PropTypes.func
}

export default connect(mapStateToProps)(HabitList)

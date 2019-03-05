import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Icon } from 'semantic-ui-react'

const DelButton = () => (
  <Button animated='vertical'>
    <Button.Content hidden>trash</Button.Content>
    <Button.Content visible>
      <Icon name='trash' />
    </Button.Content>
  </Button>
)

const HabitList = ({ habits, deleteHabit }) => {
  console.log(habits)
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
          {habits.map((habit, index) => (
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
  habits: PropTypes.array,
  deleteHabit: PropTypes.func
}

export default HabitList

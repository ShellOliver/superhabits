import React, { Component } from 'react'
import { add } from '../../actions/habits.action'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'

const mapDispatchToProps = dispatch => {
  return {
    addHabit: habit => dispatch(add(habit))
  }
}

export class Habit extends Component {
    state = {
      name: ''
    }

    onsubmit = (e) => {
      e.preventDefault()
      this.props.addHabit({ name: this.state.name })
      this.setState({ name: '' })
    }

    onChangeHabit = (val) => {
      this.setState({ name: val.target.value })
    }

    render () {
      return (
        <div style={{ margin: '1em 0em' }}>
          <form onSubmit={this.onsubmit}>
            <Input size='big' onChange={this.onChangeHabit}
              value={this.state.name}
              placeholder='New habit'
              icon={{ name: 'plus', circular: true }} />
          </form>
        </div>
      )
    }
}

Habit.propTypes = {
  addHabit: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Habit)

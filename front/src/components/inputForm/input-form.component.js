import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'

export class InputForm extends Component {
    state = {
      name: ''
    }

    onsubmit = (e) => {
      e.preventDefault()
      this.props.addItem({ name: this.state.name })
      this.setState({ name: '' })
    }

    onChangeItem = (val) => {
      this.setState({ name: val.target.value })
    }

    render () {
      return (
        <div style={{ margin: '1em 0em' }}>
          <form onSubmit={this.onsubmit}>
            <Input size='big' onChange={this.onChangeItem}
              value={this.state.name}
              placeholder={this.props.placeholder}
              icon={{ name: 'plus', circular: true }} />
          </form>
        </div>
      )
    }
}

InputForm.propTypes = {
  addItem: PropTypes.func,
  placeholder: PropTypes.string
}

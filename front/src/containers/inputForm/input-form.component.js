import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

class InputForm extends Component {
    state = {
      name: ''
    }

    onsubmit = (e) => {
      const { dispatch, addItem } = this.props
      e.preventDefault()
      dispatch(addItem({ name: this.state.name }))
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
  dispatch: PropTypes.func,
  addItem: PropTypes.func,
  placeholder: PropTypes.string
}

export default connect(null)(InputForm)

import React, {Component} from 'react'
import {add} from '../../actions/habits.action'
import { connect } from 'react-redux';


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
        console.log('ok', this.state.name)
        this.props.addHabit({name: this.state.name})
    }
    
    onChangeHabit = (val) => {
        this.setState({name: val.target.value})
    }

    render(){
        return (
          <div>
          <form onSubmit={this.onsubmit}>
            <input onChange={this.onChangeHabit}/>
          </form>
          </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Habit)